import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Limite maximale d'emojis retournée (pour éviter de retourner les ~1935 emojis de GitHub si la limite n'est pas définie)
const MAX_LIMIT = 100;

let emojis = [];
// Au cas où l'API de GitHub a ne marche pas (pas de réseau ou rate limit), vous pouvez utiliser cette version hard codée
// const emojis = [
//     { link: 'https://github.githubassets.com/images/icons/emoji/unicode/1fa97.png?v8', name: 'accordeon' },
//     { link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f948.png?v8', name: 'accept' },
//     { link: 'https://github.githubassets.com/images/icons/emoji/unicode/1f3a8.png?v8', name: 'art' }
// ];

const bookmarks = [];

// Charge tous les emojis de GitHub via api.github.com/emojis
async function fetchGithubEmojisIfNeeded() {
    // Déjà en cache, ne pas charger à nouveau
    if (emojis && emojis.length > 0) return;

    try {
        const res = await fetch('https://api.github.com/emojis');
        // Le retour est dans le format {'art': 'a link'}, nous voulons le transformer
        // dans un tableau de Emoji[] (c'est-à-dire [{name: 'art', link: 'a link'}, ...])
        const emojisAsKey = await res.json();
        emojis = Object.entries(emojisAsKey).map((entry) => {
            return { link: entry[1], name: entry[0] };
        });
        console.log('Reloaded ' + emojis.length + ' emojis from the GitHub API');
    } catch (e) {
        emojis = [];
        console.error('Github API failed...', e);
    }
}

// Middleware to run fetchGithubEmojisIfNeeded() before each request
app.use(async (req, res, next) => {
    await fetchGithubEmojisIfNeeded();
    next();
});

// Permet de facilement récupérer la limit et de ne pas l'appliquer si supérieur au maximum
function getLimit(req) {
    let limit = req.query?.limit;
    if (!limit || limit > MAX_LIMIT) limit = MAX_LIMIT;
    return limit;
}

// --- EMOJIS ---

// Page d'accueil pour voir que l'API tourne bien si besoin...
app.get('/', (req, res) => {
    res.send('Remoji api available !');
});

// Charger tous les premiers emojis, en appliquant optionnellement un filtre
// -> ?search optionnel et ?limit attendue. Cette limite ne peut pas dépasser MAX_LIMIT
app.get('/emojis', (req, res) => {
    const query = req.query?.search;
    if (!query) res.send(emojis.slice(0, getLimit(req)));
    else res.send(emojis.filter((e) => e.name.includes(query.trim())).slice(0, getLimit(req)));
});

// Charger un emoji random
app.get('/emojis/random', (req, res) => {
    const randomIndex = Math.ceil(Math.random() * emojis.length);
    res.send(emojis.at(randomIndex));
});

// --- BOOKMARKS ---

// Charger tous les bookmarks
app.get('/bookmarks', (req, res) => {
    res.send(bookmarks);
});

// Bookmarker un emoji
app.post('/bookmarks/add', (req, res) => {
    const bookmark = req.body?.name;
    if (!bookmark) {
        res.send({ message: 'Error, bookmark name is null !' + bookmark });
        return;
    }
    if (bookmarks.includes(bookmark)) res.send({ message: 'Error, already bookmarked !' });
    else {
        bookmarks.push(bookmark);
        res.send(bookmarks);
        res.status(201);
    }
});

// Retirer un emoji bookmarké
app.post('/bookmarks/remove', (req, res) => {
    const bookmark = req.body?.name;
    if (!bookmark) {
        res.send({ message: 'Error, bookmark name is null !' });
        return;
    }
    if (!bookmarks.includes(bookmark)) res.send({ message: 'Error, it has not been bookmarked !' });
    else {
        bookmarks = bookmarks.sort((b) => b != bookmark);
        res.status(204);
        res.send(bookmarks);
    }
});

// Notre app tourne sur le port 8080
app.listen(8080, () => {
    console.log('Remoji backend started !');
});

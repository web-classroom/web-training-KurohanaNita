import { useEffect, useState } from 'react';
import { Emoji } from './types';
import EmojiList from './components/EmojiList';
import Search from './components/Search';
import EmojiImage from './components/EmojiImage';

// Constantes utiles
const BACKEND = 'http://localhost:8080'; //le lien du backend à prefixer avant les requêtes fetch
const LIMITS: number[] = [10, 20, 50, 100]; //toutes les valeurs des limites à afficher sous forme de boutons

function App() {
    // TODO: gérer les variables "réactives" pour l'état de chargement, la liste des emojis affichées, la limite choisie (une parmi LIMITS)
    // evtl la recherche actuelle et l'emoji aléatoire (affiché à gauche du titre)

    // TODO: charger un emoji random
    // Ce chargement ne doit se faire qu'une seule fois au chargement de le page, et non au rendu successifs
    // Attention au lancement infinie de requête (checker le panneau réseau des outils de développement)

    // TODO: au chargement du composant, récupérer les emojis (en y appliquant la limite actuelle)
    // Il faut également inclure la recherche s'il n'est pas vide
    // Un rechargement doit se refaire chaque fois que la limite ou la recherche change...
        // TODO: Fonction pour charger les emojis en fonction de la limite et la recherche optionnel

    // TODO: compléter les parties manquantes
    return (
        <div className="App">
            <header className="flex justify-center items-center">
                {/* TODO: afficher un émoji aléatoire ici (voir route backend dédiée et composant dédié). On ne doit pas afficher son nom !*/}
                <h1 id="title">Remoji - a simple emoji browser</h1>
            </header>
            <div>
                <div>
                    <span>Show </span>
                    {/* TODO: Afficher les LIMITS ici avec la classe 'limit', et la classe selected en plus quand nécessaire */}
                    <span>emojis</span>
                </div>
                {/* TODO: Inclure les composants Search et EmojiList */}
            </div>
        </div>
    );
}

export default App;

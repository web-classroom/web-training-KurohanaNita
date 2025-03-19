import { exo } from '@delibay/prjs';
import * as fns from './strings.js';

// Useful constants to work with
const PANGRAM = 'The quick brown fox jumps over the lazy dog';

// Exos list
exo({
  // GOAL: learn .length
  title: 'Get number of chars',
  fn: fns.getNumberOfChars,
  tests: [{ args: [PANGRAM], expected: 43 }],
});

exo({
  // GOAL: learn .toLowerCase()
  title: 'Get lowercase version of given text',
  fn: fns.getLowercaseVersion,
  tests: [{ args: ['THIs iS a SUPÉr msG!'], expected: 'this is a supér msg!' }],
});

exo({
  // GOAL: learn .indexOf() basic usage
  title: 'Get the first index',
  fn: fns.getFirstIndex,
  tests: [
    { args: [PANGRAM, ' '], expected: 3 },
    { args: [PANGRAM, 'k'], expected: 8 },
    { args: [PANGRAM, '_'], expected: -1 },
  ],
});

exo({
  // GOAL: learn .indexOf() second param
  title: 'Get the first index of given string after given position',
  fn: fns.getFirstIndexButAfter,
  tests: [
    { args: [PANGRAM, 'ox', 20], expected: -1 },
    { args: [PANGRAM, 'o', 15], expected: 17 },
  ],
});

exo({
  // GOAL: practice the 2 params of .indexOf() with a more concrete use case
  title: 'Get number of occurences of given char',
  instruction:
    'Use an iterative algorithm to search the index of the char one after the other, taking the latest index as the start limit for the next round. \nDo not use String.split(), String.substring() nor Array.filter().',
  fn: fns.countOccurencesOfChar,
  tests: [{ args: [PANGRAM, 'o'], expected: 4 }],
});

exo({
  // GOAL: learn .includes()
  title: 'Check if it contains a given word',
  fn: fns.containsAGivenWord,
  tests: [
    { args: [PANGRAM, 'fox'], expected: true },
    { args: [PANGRAM, 'qui'], expected: true },
    { args: [PANGRAM, 'FOX'], expected: false },
    { args: [PANGRAM, 'super dog'], expected: false },
  ],
});

exo({
  // GOAL: learn .substring()
  title: 'Extract the message between : and .',
  instruction: 'Avoid using any index calculation !',
  fn: fns.extractAMessage,
  tests: [{ args: ['The message is:We are happy.'], expected: 'We are happy' }],
});

exo({
  // GOAL: learn .substr()
  title: 'Extract a 3 chars code starting with 0x',
  instruction: 'Do not use the same method than before to avoid using any calculation on indexes...',
  fn: fns.extractACode,
  tests: [
    { args: ["The secret code 0xJSX, don't tell anyone."], expected: '0xJSX' },
    { args: ['code=0x002;'], expected: '0x002' },
  ],
});

exo({
  // GOAL: learn .concat()
  title: 'Concat several strings at once',
  instruction: "But do NOT use '+'...",
  fn: fns.concatStrings,
  tests: [{ args: ['100', ' / ', '500', ' = 1/5'], expected: '100 / 500 = 1/5' }],
});

exo({
  // GOAL: learn .match() and non trivial regex
  title: 'Extract all numbers',
  instruction: 'Use a single method. Hint: use a regex and the global flag !',
  fn: fns.extractAllNumbers,
  tests: [{ args: ['one: 21 years, two: 2 boats, 15.3 teeth, 1.553234e10 heart beats'], expected: ['21', '2', '15.3', '1.553234e10'] }],
});

exo({
  // GOAL: learn .split() and .at() (or []) and .toUpperCase()
  title: 'Build a simple acronym',
  instruction:
    'Acronym = First letter of the firstname + first and last letter of the lastname. We consider the fullname contain firstname + a space + lastname.',
  fn: fns.buildAcronym,
  tests: [
    { args: ['Linus Torvalds'], expected: 'LTS' },
    { args: ['Amélie Morino'], expected: 'AMO' },
    { args: ['marta benno'], expected: 'MBO' },
  ],
});

exo({
  // GOAL: train a combination .split() in combination with Array.map() and .length
  title: 'Count length of each word',
  fn: fns.countLengthOfWords,
  tests: [{ args: [PANGRAM], expected: [3, 5, 5, 3, 5, 4, 3, 4, 3] }],
});

exo({
  // GOAL: discover atob with an online research and .endsWith()
  title: 'Get some files inside a Base64 encoded .gitignore content',
  instruction:
    'This must be a one liner. Do not use if, includes() or substring(). Testing the extension should be a single method call. There is a dedicated function to decode some Base64.',
  fn: fns.getSomeFilesInGitignore,
  tests: [
    { args: ['bm9kZV9tb2R1bGVzCmRyYXdpbmcuaHRtbAp0ZXN0LmpzCmRlYnVnLmxvZwou\ndml0ZQo=', 'js'], expected: ['test.js'] },
    { args: ['bm9kZV9tb2R1bGVzCmNzcy50eHQKdG1wY3NzCnRlc3QuY3NzCmNzcy5kZWJ1Zwpjc3MK', 'css'], expected: ['test.css'] },
  ],
});

exo({
  // GOAL: learn JSON.parse()
  title: 'Get the object behind the string',
  fn: fns.getFromJSON,
  tests: [
    {
      args: [
        '{"sha": "aa5cc8dc1ffcbc6b949f9c81a7496bd1473843b1","node_id": "B_kwDOLuaepdoAKGFhNWNjOGRjMWZmY2JjNmI5NDlmOWM4MWE3NDk2YmQxNDczODQzYjE","size": 50,"content": "bm9kZV9tb2R1bGVzCmRyYXdpbmcuaHRtbAp0ZXN0LmpzCmRlYnVnLmxvZwou\\ndml0ZQo=\\n","encoding": "base64"}',
      ],
      expected: {
        sha: 'aa5cc8dc1ffcbc6b949f9c81a7496bd1473843b1',
        node_id: 'B_kwDOLuaepdoAKGFhNWNjOGRjMWZmY2JjNmI5NDlmOWM4MWE3NDk2YmQxNDczODQzYjE',
        size: 50,
        content: 'bm9kZV9tb2R1bGVzCmRyYXdpbmcuaHRtbAp0ZXN0LmpzCmRlYnVnLmxvZwou\ndml0ZQo=\n',
        encoding: 'base64',
      },
    },
  ],
});

exo({
  // GOAL: learn JSON.stringify()
  title: 'Transform the object to JSON',
  fn: fns.transformToJSON,
  tests: [
    {
      args: [{ firstname: 'Kali', age: 20 }],
      expected: '{"firstname":"Kali","age":20}',
    },
  ],
});

exo({
  // GOAL: learn to manage errors of bad JSON format
  title: 'Check JSON validity',
  instruction: "Don't invent a parsing algorithm (!), just try to parse but catch up yourself if it throws an error at you :)",
  fn: fns.checkJsonValidity,
  tests: [
    {
      args: ['{"firstname":"Kali","age":20}'],
      expected: true,
    },
    {
      args: ['{"firstname":"Kali","age":20,}'],
      expected: false,
    },
    {
      args: ['{firstname:"Kali",age:20}'],
      expected: false,
    },
    {
      args: ['not some json at all'],
      expected: false,
    },
  ],
});

exo({
  // GOAL: learn .lastIndexOf() and substring()
  title: 'Extract the latest dog mention',
  instruction: 'Extract the end of the sentence, starting at the latest dog mention. Do not use String.indexOf() or do a one liner.',
  fn: fns.myLatestAnimal,
  tests: [
    {
      args: ['I have dog John, another dog Piky, and finally the best dog Diana !', 'dog'],
      expected: 'dog Diana !',
    },
  ],
});

exo({
  // GOAL: learn .replace() and .replaceAll()
  title: 'Replace first and all',
  instruction: 'Do not use String.substring() nor String.indexOf() and use only 2 methods.',
  fn: fns.replaceFirstAndAll,
  tests: [
    {
      args: ['me_gmail.com, hi_you@gmail.com, super@gmail.com', '_', '@', '@gmail.com', '@private.mail'],
      expected: 'me@private.mail, hi_you@private.mail, super@private.mail',
    },
    {
      args: ['aa oo bb', 'a', 'A', '--', '_'],
      expected: 'Aa oo bb',
    },
  ],
});

exo({
  // GOAL: use trim(), do more complex substring operations
  title: 'Parse a raw exo definition into an exo object',
  instruction:
    'Easy algo: Consider the exo title to be between Exo: and \\n, the instruction after it on multiple lines.\nMake sure to remove these useless extra spaces at start and end of each value (but not in the middle).',
  fn: fns.parseExoWIP,
  tests: [
    {
      args: [
        "Exo:   What is the best OS ?\n That's a very neutral question...  \nI know but that's reality..." +
          ' \t \n\nSolution:  GNU/Linux   \nignore this part...',
      ],
      expected: {
        title: 'What is the best OS ?',
        instruction: "That's a very neutral question...  \nI know but that's reality...",
        solution: 'GNU/Linux',
      },
    },
  ],
});

exo({
  // GOAL: develop a more complex algorithm iterating on lines, train .split(), .startsWith(), .endsWith(), .substring()
  title: 'Parse some parameters like a basic shell',
  instruction:
    'Algorithm proposition:\nSplit by space, loop over each part, if it starts with some quotes, save the quote, accumulate until the end quote is found.',
  fn: fns.parseParameters,
  tests: [
    { args: ['ls -laR node_modules/.bin/'], expected: ['ls', '-laR', 'node_modules/.bin/'] },
    { args: ['npx vitest --filter "simple acronym"'], expected: ['npx', 'vitest', '--filter', 'simple acronym'] },
    { args: ['grep "it\'s very nice!" book.txt | wc -l'], expected: ['grep', "it's very nice!", 'book.txt', '|', 'wc', '-l'] },
  ],
});

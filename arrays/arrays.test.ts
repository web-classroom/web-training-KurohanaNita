import { exo } from '@delibay/prjs';
import * as fns from './arrays.js';
import { expect } from 'vitest';

// Useful constants to work with
const animals = ['cat', 'dog', 'cow', 'chimp', 'chicken'];

// Exos list
exo({
  title: 'Create an empty array',
  fn: fns.getEmptyArray,
  tests: [{ expected: [] }],
});

function checkHugeArray(result: any[], x: number, y: number) {
  expect(result?.length, 'Length is not correct').to.eq(x);
  const randomIndex = Math.ceil(Math.random() * x - 1);
  expect(result[randomIndex], 'Value at randomIndex=' + randomIndex + ' is ' + result[randomIndex] + ' but should be ' + y).to.eq(y);
}

exo({
  title: 'Create a huge array x elements filled with y',
  instruction: 'This should be a one liner!!',
  fn: fns.hugeFilledArray,
  tests: [
    {
      args: [100, 6],
      expect: (result) => {
        checkHugeArray(result, 100, 6);
      },
    },
    {
      args: [12, 59],
      expect: (result) => {
        checkHugeArray(result, 12, 59);
      },
    },
  ],
});

exo({
  title: 'Push back values and remove at front',
  instruction: "Here, we want to push 4 times '10' and pop front 2 times",
  fn: fns.pushAndRemove,
  tests: [
    {
      args: [[1, 2, 3], 4, 10, 2],
      expected: [3, 10, 10, 10, 10],
    },
    {
      args: [[1, 2, 3], 1, 2, 5],
      expected: [],
    },
  ],
});

exo({
  title: 'Take the last element in alphabetic order',
  fn: fns.getLastOfAlphabeticalOrder,
  tests: [
    {
      args: [JSON.parse(JSON.stringify(animals))],
      expected: 'dog',
    },
    {
      args: [JSON.parse(JSON.stringify([...animals, 'zebra']))],
      expected: 'zebra',
    },
  ],
});

exo({
  title: 'Remove element between 2 given values',
  fn: fns.removeInValueRange,
  tests: [
    {
      args: [['cat', 'dog', 'cow', 'chimp', 'chicken'], 'dog', 'chimp'],
      expected: ['cat', 'chicken'],
    },
    {
      //cannot remove anything if first element is not found
      args: [animals, 'not found', 'chimp'],
      expected: animals,
    },
    {
      //cannot remove anything if second element is not found
      args: [animals, 'cat', 'coooow'],
      expected: animals,
    },
  ],
});

exo({
  title: 'Extract a subrange of values',
  instruction: 'The range to extract starts at the index of first occurence of second arg, and stops at the last index of third arg (included).',
  fn: fns.extractRange,
  tests: [
    {
      args: [[3, 1, 5, 6, 7, 2, 6, 1, 5, 2, 3, 6, 2, 3, 1, 5], 6, 3],
      expected: [6, 7, 2, 6, 1, 5, 2, 3, 6, 2, 3],
    },
    {
      args: [[6, 2, 6, 7, 8, 2, 6, 13, 6, 3], 13, 3],
      expected: [13, 6, 3],
    },
    {
      args: [[6, 2, 6, 7, 10, 3], 6, 6],
      expected: [6, 2, 6],
    },
  ],
});

exo({
  title: 'Uppercase and reverse the array',
  fn: fns.upperCaseAndReverse,
  tests: [
    {
      args: [['cat', 'dog', 'cow', 'chimp', 'chicken']],
      expected: ['CHICKEN', 'CHIMP', 'COW', 'DOG', 'CAT'],
    },
  ],
});

exo({
  title: 'Filter an array basically',
  fn: fns.filterByInclude,
  tests: [
    {
      args: [animals, 'o'],
      expected: ['dog', 'cow'],
    },
  ],
});

exo({
  title: 'Filter an array with a regex',
  instruction: 'Here, we want to filter with the following pattern: h + (i between 1 and 3 times) + (optionnaly an o)',
  fn: fns.filterHello,
  tests: [
    {
      args: [['hi', 'hiii', 'hiiio', 'h', 'ho']],
      expected: ['hi', 'hiii', 'hiiio'],
    },
  ],
});

exo({
  title: 'Filter an array with full match',
  instruction: 'Like previous exo, but the regex should must match the full string, not just something inside.',
  fn: fns.filterHello2,
  tests: [
    {
      args: [['hi', 'hiii', 'hiiio', 'h', 'hiiioK', ' hio', 'hhii', 'ho', 'io', 'here hiiio and something else']],
      expected: ['hi', 'hiii', 'hiiio'],
    },
  ],
});

exo({
  title: 'Filter an array with a complex regex',
  instruction: "The pattern is: 0 to 3 letters between a and e, then numbers under 50.\nAll parameters until 'b03' match the pattern.",
  fn: fns.filterCodes,
  tests: [
    {
      args: [
        [
          //pass
          'abc14',
          'bbd2',
          'eeb7',
          'aa37',
          '49',
          '15',
          'b03',
          //not pass
          '92',
          'ab120',
          'ziw12',
          'ko63',
        ],
      ],
      expected: ['abc14', 'bbd2', 'eeb7', 'aa37', '49', '15', 'b03'],
    },
  ],
});

exo({
  title: 'Count words separated by strange separators in deep array',
  fn: fns.countAnyWords,
  tests: [
    {
      args: [['a\tnice   day', ['nice_job', 'nice_work', 'what--a_great job'], ['guess what ?', 'what ?_?----?', ' idk']]],
      expected: {
        '?': 4,
        a: 2,
        day: 1,
        great: 1,
        guess: 1,
        idk: 1,
        job: 2,
        nice: 3,
        what: 3,
        work: 1,
      },
    },
  ],
});

exo({
  title: "Calculate the 'product of words'",
  instruction:
    'The calculation is: string length + index value.\nExample: [cow, chicken, ...] = (2+3) * (4+7) * ... = 5280\nNote: Do this in a single method call !',
  fn: fns.productOfWords,
  tests: [
    {
      args: [animals],
      expected: 5280,
    },
  ],
});

exo({
  title: 'Get the max values across all strings',
  fn: fns.getTheMax,
  tests: [
    {
      args: [['2 4 1 5 1 9 2 4 1', '0 3 1 4 1 6 2 5 1', '5 1 2 3 5 1 20 0 12']],
      expected: 20,
    },
  ],
});

exo({
  title: 'Get the sum of max values in each string',
  fn: fns.getTheSumOfMax,
  tests: [
    {
      args: [['2 4 1 5 1 9 2 4 1', '0 3 1 4 1 6 2 5 1', '5 1 2 3 5 1 20 0 12']],
      expected: 35,
    },
    {
      args: [['3 0 2 5 1 7 29 5 29 5 6 8 12 22']],
      expected: 29,
    },
  ],
  instruction: 'The calculation is: 9 + 6 + 20 = 35',
});

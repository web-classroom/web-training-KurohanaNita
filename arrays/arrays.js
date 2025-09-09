// Learn array manipulations, run these exos with PRJS

export function getEmptyArray() {

  return [];
}

export function hugeFilledArray(size, value) {

  return  new Array(size).fill(value);
}

export function pushAndRemove(array, pushTimes, pushValue, popFrontTimes) {
  array.push(...new Array(pushTimes).fill(pushValue));
  for (let i = 0; i < popFrontTimes; ++i) {
    array.shift();
  }
  return array;
}

export function getLastOfAlphabeticalOrder(array) {

  return array.sort()[array.length - 1];
}

export function removeInValueRange(array, first, last) {

  const begin = array.indexOf(first);
  const end = array.indexOf(last);
  if (begin === -1 || end === -1) return array;
  array.splice(begin, end - begin + 1);
  return array;
}

export function extractRange(array, start, end) {
  const firstIndex  = array.indexOf(start);
  const secondIndex  = array.lastIndexOf(end);
  if (firstIndex === -1 || secondIndex  === -1) return array;

  return array.slice(firstIndex, secondIndex + 1);
}

export function upperCaseAndReverse(array) {
  return array.reverse().map(item => item.toUpperCase());
}

export function filterByInclude(array, filter) {
  return array.filter(item => item.includes(filter));
}

export function filterHello(array) {
  const regex = /hi{1,3}o?/;
  return array.filter(item => regex.test(item));
}

export function filterHello2(array) {
  const regex = /^hi{1,3}o?$/;
  return array.filter(item => regex.test(item));
}

export function filterCodes(array) {
  const re = /^[a-e]{0,3}(\d|[0-4]\d)$/;
  // same as          /^[a-e]{0,3}([0-9]|[0-4][0-9])$/;
  return array.filter(item => re.test(item));
}

export function countAnyWords(deepArray) {
  const words = deepArray.flat().reduce((acc, item) =>  acc.concat(item.split(/[-_\s]/)), []);
  const counter = {};
  for (const word of words) {
    if (word.trim() === "") continue;
    if(!counter[word]) {
      counter[word] = 0;
    }
    counter[word]++;
  }
  return counter;
}

export function productOfWords(array) {
  return array.reduce((acc, item, i) => acc * (item.length + i), 1);
}

export function getTheMax(array) {
   return Math.max(...array.flatMap((item) => item.split(' ').map((e) => parseInt(e))));
}

export function getTheSumOfMax(array) {
  return array.map((item) => Math.max(...item.split(' ').map((e) => parseInt(e)))).reduce((acc, cur) => acc + cur, 0);
}

// Learn string manipulations, run these exos with PRJS

export function getNumberOfChars(text) {
  return text.length;
}

export function getLowercaseVersion(text) {
  return text.toLowerCase();
}

export function getFirstIndex(text, substring) {
  return text.indexOf(substring);
}

export function getFirstIndexButAfter(text, substring, startPos) {
  return text.indexOf(substring, startPos);
}

export function countOccurencesOfChar(text, char) {
  let count = 0;
  let i = -1;

  while (count <= text.length) {
    i = text.indexOf(char, i + 1);
    if (i !== -1) count++;
    else break;
  }
  return count;
}

export function containsAGivenWord(text, word) {
  return text.includes(word);
}

export function extractAMessage(text) {
  return text.split(":")[1].replace(/\.$/, "");
}

export function extractACode(text) {
  return text.match(/0x[a-zA-Z0-9]{1,3}/)?.[0] ?? null;
}

export function concatStrings(str1, str2, str3, str4) {
  return str1.concat(str2).concat(str3).concat(str4);
}

export function extractAllNumbers(text) {
  return text.match(/\d+(\.\d+)?(e\d+)?/g);

}

export function buildAcronym(fullname) {
  const [first, last] = fullname.split(' ');
  return (first.at(0) + last.at(0) + last.at(last.length - 1)).toUpperCase();
}

export function countLengthOfWords(sentence) {
  // TODO
}

export function getSomeFilesInGitignore(base64Content, extension) {
  // TODO
}

export function getFromJSON(text) {
  // TODO
}

export function transformToJSON(obj) {
  // TODO
}

export function checkJsonValidity(text) {
  // TODO
}

export function myLatestAnimal(talk, animal) {
  // TODO
}

export function replaceFirstAndAll(sentence, first, firstReplace, all, allReplace) {
  // TODO
}

export function parseExoWIP(raw) {
  // TODO
}

export function parseParameters(command) {
  // TODO
}


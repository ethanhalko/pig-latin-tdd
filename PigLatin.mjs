const VOWELS = ['a', 'e', 'i' ,'o' ,'u'];
const MULTIGRAPHS = ['ps', 'ch', 'qu','sch', 'thr', 'th'];

function getMultigraph(word) {
  const triGraph = MULTIGRAPHS.find((chars) => word.slice(0, 3).toLowerCase() === chars);
  if(triGraph) {
    return triGraph;
  }

  return MULTIGRAPHS.find((chars) => word.slice(0, 2).toLowerCase() === chars);
}

function getFirstChar(charArray, startsWithVowel, multigraph) {
  if(!startsWithVowel && !multigraph) {
    return charArray.shift();
  }

  return charArray[0];
}

function convert(currentWord) {
  const startsWithVowel = VOWELS.includes(currentWord[0].toLowerCase());
  const multigraph = getMultigraph(currentWord);
  const converted = [...currentWord.split('')];

  const firstChar = getFirstChar(converted, startsWithVowel, multigraph);

  if(!startsWithVowel) {
    const prefix = multigraph ? converted.splice(0, multigraph.length).join('').toLowerCase() : firstChar.toLowerCase();

    converted.push(prefix);
  }

  if(firstChar === firstChar.toUpperCase()) {
    converted[0] = converted[0]?.toUpperCase();
  }

  return converted;
}

export function englishToPigLatin(word) {
  const currentWord = word?.trim();
  if(!currentWord) {
    return '';
  }

  if(parseInt(currentWord)) {
    return currentWord;
  }

  const converted= convert(currentWord);

  return [...converted, 'ay'].join('');
}

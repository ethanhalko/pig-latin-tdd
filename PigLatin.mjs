const VOWELS = ['a','e','i','o','u'];
const MULTIGRAPHS = ['ps', 'ch', 'qu', 'sch', 'thr', 'th'];

function getMultigraph(word) {
  const triGraph = MULTIGRAPHS.find((chars) => word.slice(0, 3).toLowerCase() === chars);
  if(triGraph) {
    return triGraph;
  }

  return MULTIGRAPHS.find((chars) => word.slice(0, 2).toLowerCase() === chars) || '';
}

function getFirstChar(charArray, startsWithVowel, multigraph) {
  if(!startsWithVowel && !multigraph) {
    return charArray.shift();
  }

  return charArray[0];
}

function doConversion(word) {
  const convertedWord = word.split('');
  const multigraph = getMultigraph(word);
  const startsWithVowel = VOWELS.includes(convertedWord[0].toLowerCase());
  const firstChar = getFirstChar(convertedWord, startsWithVowel, multigraph);

  if(!startsWithVowel) {
    const prefix = multigraph ? convertedWord.splice(0, multigraph.length).join('').toLowerCase() : firstChar.toLowerCase();
    convertedWord.push(prefix);

    if(firstChar === firstChar.toUpperCase()) {
      convertedWord[0] = convertedWord[0]?.toUpperCase();
    }
  }

  return convertedWord;
}

export function englishToPigLatin(word) {
  const currentWord = word?.trim();
  if(!currentWord) {
    return '';
  }

  if(parseInt(currentWord) || /[^a-zA-Z0-9]/.test(currentWord)) {
    return currentWord;
  }

  const converted = doConversion(currentWord);

  return [...converted, 'ay'].join('');
}

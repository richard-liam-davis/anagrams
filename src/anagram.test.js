const anagrams = require('./anagram').anagrams;

const anagramOptions = { 
  generator: require('./getWordsFromFile').wordGenerator
};

test('does example1', async () => {

  let resultsArray = [];

  anagramOptions.resultOutput = result => resultsArray.push(result.join(','));

  await anagrams('./data/example1.txt', anagramOptions);

  expect(resultsArray).toContain('abc,bac,cba');
  expect(resultsArray).toContain('fun,unf');
  expect(resultsArray).toContain('hello');
});


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


// test('does perform with example3 data', async () => {

//   let t0 = performance.now();

//   let resultsArray = [];

//   anagramOptions.resultOutput = result => resultsArray.push(result.join(','));

//   await anagrams('./data/example3.txt', anagramOptions);
  
//   var t1 = performance.now(); // used to give ballpark timings while I optimised
//   console.log(t1-t0);
//   expect(t1 - t0).toBeLessThan(.1);
// });
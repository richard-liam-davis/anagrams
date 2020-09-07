async function main() {

    const anagrams = require('./src/anagram').anagrams;

    const anagramOptions = { 
        generator: require('./src/getWordsFromFile').wordGenerator,
        resultOutput: result => console.log(result.join(','))
    };
  
    const filename = process.argv.slice(2)[0];

    try {
      await anagrams(filename, anagramOptions);
    } 
    catch (err) {
      console.log(err);
    } 
}

main();  


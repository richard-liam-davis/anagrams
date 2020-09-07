const anagrams = async (filename, options) => {

    const wordGenerator = options.generator(filename);

    let done = false;

    do {
      
      const words = await wordGenerator.next();

      let anagramsMap = {};

      for (word of words.value) {

        const anagramCode = word.toLowerCase().split('').filter(x => x !== ' ').sort().join('');
        
        if (!anagramsMap[anagramCode]) {
          anagramsMap[anagramCode] = new Set();
        } 

        anagramsMap[anagramCode].add(word);
      }

      for (const code in anagramsMap) {
        let anagramList = anagramsMap[code];
        options.resultOutput(Array.from(anagramList));
      }

      done = words.done;
    } 
    while (!done);
};

exports.anagrams = anagrams; 


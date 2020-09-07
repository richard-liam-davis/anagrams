const getWordsFromFile = async function* (filename) {

  const readline = require('readline');
  const fs = require('fs');

  if (!fs.existsSync(filename)) {
    throw ('File not found');
  }
  
  const fileStream = fs.createReadStream(filename);
    
  const lines = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  
  let words = [];
  let currentLength = 0;
  for await (const line of lines) {
    if (currentLength && currentLength !== line.length) {
      yield words;
      words = [];
    }
    currentLength = line.length;
    words.push(line);
  }
  return words;
};

exports.wordGenerator = getWordsFromFile;
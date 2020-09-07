# Anagrams Coding Test

This solution is written in node.js. 

To run the code, you will need to have node.js installed. Go to the root of the project and type `node app.js ./data/example1.txt`. This command will output anagram groups to the console, or write 'File not found' if it was unable to retrieve an appropriate file.

There are two main source files:

- `getWordsFromFile.js` is concerned with using the file system to retrieve the file provided on the command line, opening it, and returning the contents to the calling function 'piece by piece', where each piece is an array of words of the same length. It is a generator function, allowing the calling function to cleanly access each piece by means of the `next()` function, and to stop when `done` is true.

- `anagram.js` provides the main bulk of the anagram logic. It takes as arguments a filename and a simple 'options' object. This object has two properties: one to specify a function to use to get words (in this solution it uses the function provided by `getWordsFromFile.js`, but this allows you to swap in a different means of providing the words without altering `anagram.js`), and secondly a function to call on each group of resulting anagrams (helpful for testing and/or if you wanted to do something other than write the results to console) 


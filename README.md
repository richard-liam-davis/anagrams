# Anagrams Coding Test

This solution is written in node.js. 

To run the code, you will need to have node.js and yarn installed. Go to the root of the project and run `yarn install`. To run tests, run `yarn test`. Typing `node app.js ./data/example1.txt` will output anagram groups to the console, or write 'File not found' if it was unable to retrieve an appropriate file.

There are two main source files:

- `getWordsFromFile.js` is concerned with using the file system to retrieve the file provided on the command line, opening it, and returning the contents to the calling function 'piece by piece', where each piece is an array of words of the same length. It is a generator function, allowing the calling function to cleanly access each piece by means of the `next()` function, and to stop when `done` is true.

- `anagram.js` provides the main bulk of the anagram logic. It takes as arguments a filename and a simple 'options' object. This object has two properties: one to specify a function to use to get words (in this solution it uses the function provided by `getWordsFromFile.js`, but this would allow you to swap in a different means of providing the words without altering `anagram.js`), and secondly a function to call for each group of resulting anagrams (helpful for testing and/or if you wanted to do something other than write the results to console).

The algorithm is fairly simple, and runs in 0(n) time - A group of words is retrived from the generator, and for each one, an `anagramCode` is computed, simply by converting to lower case, removing spaces, and ordering the letters within alphabetically. In this way, each group of words that are anagrams of each other have the same code. Each word is then added to a dictionary object where the key is the code and the value is a `Set` of words that take the code.

Finally, for each key in the dictionary, the provided `resultOutput` function is called - in normal use this function simply joins the members of each Set with a ',' and writes to the console. 

Given more time, I would likely develop the idea of passing in the anagram function's dependencies. This would allow us to mock the function that retrieves the words from disk when testing the algorithm. This would lead to the use of classes/constructor injection and a DI framework. I also considered pulling the code that generates the `anagramCode` for each word into a separate dependency and testing it in isolation, as there are likely some optimisations that could be applied.


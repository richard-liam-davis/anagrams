const generator = require('./getWordsFromFile').wordGenerator;

test('read example1.txt', async () => {
 
    const wordGenerator = generator('./data/example1.txt');

    let words = await wordGenerator.next();
    
    expect(words.value[0]).toBe('abc');
    expect(words.value[1]).toBe('fun');
    expect(words.value[2]).toBe('bac');
    expect(words.value[3]).toBe('fun');
    expect(words.value[4]).toBe('cba');
    expect(words.value[5]).toBe('unf');

    expect(words.done).toBe(false);

    words = await wordGenerator.next();

    expect(words.value[0]).toBe('hello');

    expect(words.done).toBe(true);
  });
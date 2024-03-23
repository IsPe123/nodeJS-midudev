const fs = require('node:fs');

///////////////////////////////////////////////////////
//SYNC

console.log('Leyendo el primer archivo...S');
const text = fs.readFileSync('./fs/hm.txt', 'utf-8');

console.log(text);

console.log('Leyendo el segundo archivo...S');
const text2 = fs.readFileSync('./fs/hu.txt', 'utf-8');

console.log(text2);

///////////////////////////////////////////////////////
//ASYNC

console.log('Leyendo el primer archivo...AS');
fs.readFile('./fs/hm.txt', 'utf-8', (err, textB) => {
    console.log(textB);
});

console.log('Haciendo cosas...');

console.log('Leyendo el segundo archivo...AS');
fs.readFile('./fs/hu.txt', 'utf-8', (err, text2B) => {
    console.log(text2B);
});

///////////////////////////////////////////////////////
//PROMESAS

const fs2 = require('node:fs/promises');

console.log('Leyendo el primer archivo...PR');
fs2.readFile('./fs/hm.txt', 'utf-8')
    .then(textC => {
        console.log(textC);
    });

console.log('Haciendo cosas...');

console.log('Leyendo el segundo archivo...PR');
fs2.readFile('./fs/hu.txt', 'utf-8')
    .then(text2C => {
        console.log(text2C);
    });

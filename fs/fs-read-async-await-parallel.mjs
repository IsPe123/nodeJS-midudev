import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./fs/hm.txt', 'utf-8'),
    readFile('./fs/hu.txt', 'utf-8')
]).then(([text, text2]) => {
    console.log('Primer texto: ', text);
    console.log('Segundo texto: ', text2);
})
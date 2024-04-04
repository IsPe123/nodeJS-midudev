//DEBE HACERSE CON MODULOS (MJS) SI O SI
import {readFile} from 'node:fs/promises';

console.log('Leyendo el primer archivo...');
const text = await readFile('./fs/hm.txt', 'utf-8');
console.log(text);

console.log('Haciendo cosas...');

console.log('Leyendo el segundo archivo...');
const text2 = await readFile('./fs/hu.txt', 'utf-8');
console.log(text2);
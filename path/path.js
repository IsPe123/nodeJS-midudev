const path = require('node:path');

//BARRAA SEPARADORA DE CARPETAS
console.log(path.sep);

//Unir rutas con path.join
const filePath = path.join('content', 'algo', 'text.txt')
console.log(filePath)

//Nombre del archivo
const PathName = path.basename('content/algo/texto.txt')
console.log(PathName)

//Nombre del archivo sin laa extencion
const PathName2 = path.basename('content/algo/texto.txt', '.txt')
console.log(PathName2)

//Extencion del archivo
const extencion = path.extname('content/algo/image.jpg')
console.log(extencion)
const fs = require('node:fs/promises')
const path = require('node:path')
const picocolors = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
    let files;
    try{
        files = await fs.readdir(folder);
    } catch {
        console.error(picocolors.red(`No se pudo leer el directorio ${folder}`));
        process.exit(1);
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file);
        let stats;
        try {
            stats = await fs.stat(filePath);
        } catch {
            console.error(`No se pudo leer el archivo ${filePath}`)
        }

        let isDirectory = stats.isDirectory();
        let fileType = isDirectory ? 'directory:' : 'file:';
        let fileSize = stats.size;
        let fileModifer = stats.mtime.toLocaleString();

        return `${fileType} ${file} ${fileSize.toString()} ${fileModifer}`

    })

    const filesInfo = await Promise.all(filesPromises);
    filesInfo.forEach(fileInfo => console.log(fileInfo));
}

ls(folder);
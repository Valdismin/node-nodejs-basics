import fs from 'fs'
import zlib from 'zlib'

const decompress = async () => {
    const gzip = zlib.createGunzip();
    const readFile = fs.createReadStream('./files/archive.gz');
    const writeFile = fs.createWriteStream('./files/fileToCompress.txt');

    readFile.pipe(gzip).pipe(writeFile);
};

await decompress();

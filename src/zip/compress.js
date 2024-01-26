import fs from 'fs'
import zlib from 'zlib'

const compress = async () => {
    const gzip = zlib.createGzip();
    const readFile = fs.createReadStream('./files/fileToCompress.txt');
    const writeFile = fs.createWriteStream('./files/archive.gz');

    readFile.pipe(gzip).pipe(writeFile);
};

await compress();

import fs from 'fs'
import zlib from 'zlib'
import path from "path";
import {fileURLToPath} from "url";

const compress = async () => {
    const gzip = zlib.createGzip();
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const readFilePath = path.join(__dirname, 'files', 'fileToCompress.txt')
    const writeFilePath = path.join(__dirname, 'files', 'archive.gz')
    const readFile = fs.createReadStream(readFilePath);
    const writeFile = fs.createWriteStream(writeFilePath);

    readFile.pipe(gzip).pipe(writeFile);
};

await compress();

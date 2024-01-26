import fs from 'fs'
import crypto from 'crypto'
import {fileURLToPath} from "url";
import path from "path";

const calculateHash = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files','fileToCalculateHashFor.txt')
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath)

    stream.on('data', (chunk) => {
        hash.update(chunk)
        console.log(hash.digest('hex'))
    })

};

await calculateHash();

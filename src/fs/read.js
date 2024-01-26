import fs from 'fs'
import {fileURLToPath} from "url";
import path from "path";

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const fileToReadPath = path.join(__dirname, 'files','fileToRead.txt')

    fs.access(fileToReadPath, fs.constants.F_OK, (e) => {
        if (e?.code === 'ENOENT') {
            throw new Error('FS operation failed')
        } else {
            fs.readFile(fileToReadPath, 'utf-8', (_, data) => {
                console.log(data)
            })
        }
    })
};

await read();

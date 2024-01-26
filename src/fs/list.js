import fs from 'fs'
import {fileURLToPath} from "url";
import path from "path";

const list = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folderToReadPath = path.join(__dirname, 'files');

    fs.access(folderToReadPath, fs.constants.F_OK, (e) => {
        if (e?.code === 'ENOENT') {
            throw new Error('FS operation failed')
        } else {
            fs.readdir(folderToReadPath,(err, data) => {
                console.log(data)
            })
        }
    })
};

await list();

import fs from 'fs'
import {fileURLToPath} from "url";
import path from "path";

const remove = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const removeFilePath = path.join(__dirname, 'files', 'fileToRemove.txt')

    fs.access(removeFilePath, fs.constants.F_OK, (e) => {
        if(e?.code === 'ENOENT') {
            throw new Error('FS operation failed')
        } else {
            fs.rm(removeFilePath,() => {})
        }
    })
};

await remove();

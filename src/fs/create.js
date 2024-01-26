import fs from 'fs'
import {fileURLToPath} from "url";
import path from "path";

const create = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const creationPath = path.join(__dirname, 'files', 'fresh.txt')

    fs.access(creationPath, fs.constants.F_OK, (e) => {
        if (e) {
            if (e.code === 'ENOENT') {
                fs.writeFile(creationPath, 'I am fresh and young', () => {
                })
            }
        } else {
            throw new Error('FS operation failed')
        }
    })
};

await create();

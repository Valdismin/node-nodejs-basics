import fs from 'fs'
import {fileURLToPath} from "url";
import path from "path";

const copy = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathFrom = path.join(__dirname, 'files')
    const destinationPath = path.join(__dirname, 'files_copy')

    fs.access(pathFrom, fs.constants.F_OK, (e) => {
        if (e?.code === 'ENOENT') {
            throw new Error('FS operation failed')
        } else if (!e) {
            fs.access(destinationPath, fs.constants.F_OK, (err) => {
                if (!err) {
                    throw new Error('FS operation failed')
                } else {
                    fs.cp('./files', './files_copy', {recursive: true}, () => {
                    })
                }
            })
        } else {
            fs.cp('./files', './files_copy', {recursive: true}, () => {
            })
        }
    })
};

await copy();

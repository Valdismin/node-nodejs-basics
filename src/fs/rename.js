import fs from 'fs'
import{fileURLToPath} from "url";
import path from "path";

const rename = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const wrongFilePath = path.join(__dirname, 'files','wrongFilename.txt')
    const correctFilePath = path.join(__dirname, 'files','properFilename.txt')

    fs.access(wrongFilePath, fs.constants.F_OK, (e) => {
        if (e?.code === 'ENOENT') {
            throw new Error('FS operation failed')
        } else if (!e) {
            fs.access(correctFilePath, fs.constants.F_OK, (err) => {
                if (!err) {
                    throw new Error('FS operation failed')
                } else {
                    fs.rename(wrongFilePath, correctFilePath, () => {
                    })
                }
            })
        } else {
            fs.rename(wrongFilePath, correctFilePath, () => {
            })
        }
    })
};

await rename();

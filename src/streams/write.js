import fs from 'fs'
import {fileURLToPath} from "url";
import path from "path";

const write = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files','fileToWrite.txt')
    const writeStream = fs.createWriteStream(filePath);
    process.stdin.pipe(writeStream);
};

await write();

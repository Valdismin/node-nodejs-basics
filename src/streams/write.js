import fs from 'fs'

const write = async () => {
    const filePath = './files/fileToWrite.txt'
    const writeStream = fs.createWriteStream(filePath);
    process.stdin.pipe(writeStream);
};

await write();

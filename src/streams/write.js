const write = async () => {
    const fs = await import('fs')
    const filePath = './files/fileToWrite.txt'
    const writeStream = fs.createWriteStream(filePath);
    process.stdin.pipe(writeStream);
};

await write();

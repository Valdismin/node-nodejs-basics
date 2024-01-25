const read = async () => {
    const fs = await import('fs')
    const filePath = './files/fileToRead.txt'
    const readStream = fs.createReadStream(filePath);

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk)
    });
};

await read();

const decompress = async () => {
    const fs = await import('fs')
    const zlib = await import('zlib')
    const gzip = zlib.createGunzip();
    const readFile = fs.createReadStream('./files/archive.gz');
    const writeFile = fs.createWriteStream('./files/fileToCompress.txt');

    readFile.pipe(gzip).pipe(writeFile);
};

await decompress();

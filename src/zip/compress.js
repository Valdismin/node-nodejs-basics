const compress = async () => {
    const fs = await import('fs')
    const zlib = await import('zlib')
    const gzip = zlib.createGzip();
    const readFile = fs.createReadStream('./files/fileToCompress.txt');
    const writeFile = fs.createWriteStream('./files/archive.gz');

    readFile.pipe(gzip).pipe(writeFile);
};

await compress();

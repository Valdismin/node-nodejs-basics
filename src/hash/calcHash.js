const calculateHash = async () => {
    const fs = await import('fs');
    const crypto = await import('crypto');
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream('./files/fileToCalculateHashFor.txt')

    stream.on('data', (chunk) => {
        hash.update(chunk)
        console.log(hash.digest('hex'))
    })

};

await calculateHash();

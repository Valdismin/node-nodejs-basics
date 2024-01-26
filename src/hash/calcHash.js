import fs from 'fs'
import crypto from 'crypto'

const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream('./files/fileToCalculateHashFor.txt')

    stream.on('data', (chunk) => {
        hash.update(chunk)
        console.log(hash.digest('hex'))
    })

};

await calculateHash();

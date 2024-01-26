import fs from 'fs'

const read = async () => {

    const fileToReadPath = './files/fileToRead.txt'

    fs.access(fileToReadPath, fs.constants.F_OK, (e) => {
        if (e?.code === 'ENOENT') {
            throw new Error('FS operation failed')
        } else {
            fs.readFile(fileToReadPath, 'utf-8', (_, data) => {
                console.log(data)
            })
        }
    })
};

await read();

import fs from 'fs'

const rename = async () => {

    const wrongFilePath = './files/wrongFilename.txt'
    const correctFilePath = './files/properFilename.md'

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

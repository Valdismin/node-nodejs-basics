import fs from 'fs'

const copy = async () => {
    const path = './files'
    const destinationPath = './files_copy'

    fs.access(path, fs.constants.F_OK, (e) => {
        if (e?.code === 'ENOENT') {
            throw new Error('FS operation failed')
        } else if (!e) {
            fs.access(destinationPath, fs.constants.F_OK, (err) => {
                if (!err) {
                    throw new Error('FS operation failed')
                } else {
                    fs.cp('./files', './files_copy', {recursive: true}, () => {
                    })
                }
            })
        } else {
            fs.cp('./files', './files_copy', {recursive: true}, () => {
            })
        }
    })
};

await copy();

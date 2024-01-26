import fs from 'fs'

const list = async () => {


    const folderToReadPath = './files'

    fs.access(folderToReadPath, fs.constants.F_OK, (e) => {
        if (e?.code === 'ENOENT') {
            throw new Error('FS operation failed')
        } else {
            fs.readdir(folderToReadPath,(err, data) => {
                console.log(data)
            })
        }
    })
};

await list();

import fs from 'fs'

const create = async () => {
    const path = './files/fresh.txt'

    fs.access(path, fs.constants.F_OK, (e) => {
        if (e) {
            if (e.code === 'ENOENT') {
                fs.writeFile(path, 'I am fresh and young', () => {
                })
            }
        } else {
            throw new Error('FS operation failed')
        }
    })
};

await create();

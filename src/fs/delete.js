const remove = async () => {
    const fs = await import('fs')

    const removeFilePath = './files/fileToRemove.txt'

    fs.access(removeFilePath, fs.constants.F_OK, (e) => {
        if(e?.code === 'ENOENT') {
            throw new Error('FS operation failed')
        } else {
            fs.rm(removeFilePath,() => {})
        }
    })
};

await remove();

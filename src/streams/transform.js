const transform = async () => {
    const { Transform } = await import('stream')
    const reverseText = () => new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join());
        },
    });

    const functionForPipe = reverseText()
    process.stdin.pipe(functionForPipe).pipe(process.stdout);
};

await transform();

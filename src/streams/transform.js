import {Transform} from 'stream'

const transform = async () => {
    const reverseText = () => new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join());
        },
    });

    const functionForPipe = reverseText()
    process.stdin.pipe(functionForPipe).pipe(process.stdout);
};

await transform();

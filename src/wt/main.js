import os from 'os'
import path from 'path'
import {fileURLToPath} from "url";
import {Worker} from 'worker_threads';

const createPromise = (worker) => {
    return (new Promise((resolve, reject) => {
        worker.on('message', (message) => {
            resolve(message.result);
        });
        worker.on('error', () => {
            reject(null);
        });
    }));
}

const performCalculations = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const numCPUs = os.cpus().length;
    const workerPath = path.join(__dirname, 'worker.js');
    const promises = [];
    const workersResults = [];
    for (let i = 0; i < numCPUs; i++) {
        const worker = new Worker(workerPath, {
            workerData: 10 + i
        })
        const promise = createPromise(worker)

        promises.push(promise);
    }
    Promise.allSettled(promises)
        .then((resultsArray) => {
            resultsArray.forEach((result, index) => {
                if (result.status === 'fulfilled') {
                    workersResults.push({status: 'resolved', data: result.value});
                } else {
                    workersResults.push({status: 'error', data: null});
                }
            });
            console.log(workersResults);
        })
};

await performCalculations();

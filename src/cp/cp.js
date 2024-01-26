import {fork} from 'child_process';
import path from 'path';
import {fileURLToPath} from "url";

const spawnChildProcess = async (args) => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    fork(path.join(__dirname, 'files', 'script.js'), args, { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['arg1', 'arg2', 'arg3']);

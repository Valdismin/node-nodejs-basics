import {fork} from 'child_process';

const spawnChildProcess = async (args) => {
    fork('./files/script.js', args, { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['arg1', 'arg2', 'arg3']);

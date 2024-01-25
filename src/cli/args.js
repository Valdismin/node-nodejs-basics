const parseArgs = () => {
    let args = process.argv.slice(2)
    const finalArgs = {}
    for (let i = 0; i < args.length; i += 2) {
        const name = args[i].replace('--', '')
        finalArgs[name] = args[i + 1]
    }

    for (let key in finalArgs) {
        let value = finalArgs[key]
        console.log(`${key} is ${value}`)
    }
};

parseArgs();

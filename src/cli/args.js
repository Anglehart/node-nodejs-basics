export const parseArgs = () => {
    const args = process.argv;
    args.splice(0, 2);
    args.forEach((element, i, arr) => {
        if (element.startsWith('--')) {
            console.log(`${element.slice(2)} is ${arr[i + 1]}`);
        }
    });
};

parseArgs();

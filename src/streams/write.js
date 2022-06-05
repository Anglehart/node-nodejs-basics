import fs from 'fs';
import url from 'url';
import path from 'path';

const TARGET_FILE = path.join(path.dirname(url.fileURLToPath(import.meta.url)), 'files', 'fileToWrite.txt');

export const write = async () => {
    const stream = fs.createWriteStream(TARGET_FILE)
    console.log('Write your text:')

    process.stdin.on('data', (data) => {
        stream.write(data)
    })
};

write();

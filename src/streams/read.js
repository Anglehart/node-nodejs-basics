import fs from 'fs';
import url from 'url';
import path from 'path';

const TARGET_FILE = path.join(path.dirname(url.fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt');

export const read = async () => {
    let dataText = '';
    const stream = fs.createReadStream(TARGET_FILE, 'utf-8');
    stream.on('data', (chunck) => {
        dataText += chunck;
    })
    stream.on('end', () => {
        process.stdout.write(dataText);
    })
};

read();

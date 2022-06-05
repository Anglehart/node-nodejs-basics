import fs from 'fs';
import crypto from 'crypto';
import path from 'path';
import url from 'url';

const TARGET_FILE = path.join(path.dirname(url.fileURLToPath(import.meta.url)), 'files', 'fileToCalculateHashFor.txt');

export const calculateHash = async () => {
    const readStream = fs.createReadStream(TARGET_FILE);
    const hash = crypto.createHash('sha256');
    hash.on('readable', () => {
        const data = hash.read();
        if (data) {
            console.log(data.toString('hex'));
        }
    });
    readStream.on('data', (data) => {
        hash.write(data);
        hash.end();
    })
};

calculateHash();

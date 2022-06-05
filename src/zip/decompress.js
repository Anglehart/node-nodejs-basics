import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import stream from 'stream';
import url from 'url';
import util from 'util';

const pipe = util.promisify(stream.pipeline);
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const TARGET_FILE = path.join(__dirname, 'files', 'fileToCompress.txt');
const CURRENT_FILE = path.join(__dirname, 'files', 'archive.gz');

const useZlib = async () => {
    const gzip = zlib.createGunzip();
    const source = fs.createReadStream(CURRENT_FILE);
    const destination = fs.createWriteStream(TARGET_FILE);
    await pipe(source, gzip, destination);
};

export const decompress = async () => {
    await fs.promises.access(CURRENT_FILE)
        .then(async () => await useZlib())
        .then(async () => await fs.promises.unlink(CURRENT_FILE))
        .catch((e) => {
            throw new Error('FS operation failed');
        })
};

decompress();

import fs from 'fs';

export const read = async () => {
    const path = 'files/fileToRead.txt';
    if (!fs.existsSync(path)) {
        throw new Error('FS operation failed');
    } else {
        fs.readFile(path, 'utf8', function(err, contents) {
            console.log(contents);
        });
    }
};

read();

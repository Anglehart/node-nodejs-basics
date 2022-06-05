import fs from 'fs';

export const remove = async () => {
    const path = 'files/fileToRemove.txt';
    if (!fs.existsSync(path)) {
        throw new Error('FS operation failed');
    } else {
        fs.unlink(path, err => {
            if(err) throw new Error('FS operation failed');
            console.log('Success');
        });
    }
};

remove();

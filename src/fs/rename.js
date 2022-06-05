import fs from 'fs';

export const rename = async () => {
    const originalPath = "files/wrongFilename.txt";
    const newPath = "files/properFilename.md";

    if(!fs.existsSync(originalPath)) {
        throw new Error('FS operation failed');
    } else if(fs.existsSync(newPath)) {
        throw new Error('FS operation failed');
    } else {
        fs.rename(originalPath, newPath, err => {
            if(err) throw new Error('FS operation failed');
        });
    }
};

rename();

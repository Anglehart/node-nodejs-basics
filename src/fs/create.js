import fs from 'fs';

export const create = async () => {
    const path = 'files/fresh.txt';
    if (fs.existsSync(path)) {
        throw new Error('FS operation failed');
    } else {
        fs.writeFile(path, "I am fresh and young", function() {
            console.log("The file was saved!");
        });
    }
};

create();

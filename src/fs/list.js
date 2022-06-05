import fs from 'fs';

export const list = async () => {
    const path = "files";

    const getFiles = function (dir, files_){
        files_ = files_ || [];
        const files = fs.readdirSync(dir);
        for (const i in files){
            const name = dir + '/' + files[i];
            if (fs.statSync(name).isDirectory()){
                getFiles(name, files_);
            } else {
                files_.push(name);
            }
        }
        return files_;
    };

    if (!fs.existsSync(path)) {
        throw new Error('FS operation failed');
    } else {
        getFiles(path).forEach((el) => {
            console.log(el.split('/')[1]);
        })
    }
};

list();

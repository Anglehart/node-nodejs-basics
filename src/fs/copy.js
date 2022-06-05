import fs from 'fs';

export const copy = async () => {
    const originalPath = "files";
    const newPath = "files_copy";

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


    if(!fs.existsSync(originalPath)) {
        throw new Error('FS operation failed');
    } else if(fs.existsSync(newPath)) {
        throw new Error('FS operation failed');
    } else {
        fs.mkdir(newPath, err => {
            console.log('New folder created');
            getFiles(originalPath).forEach(el => {
                fs.copyFile(el, `${newPath}/${el.split('/')[1]}`, err => {
                    if(err) throw new Error('FS operation failed');
                    console.log(`Файл ${el} успешно скопирован`);
                });
            })
        });
    }
};

copy();

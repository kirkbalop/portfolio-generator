const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
    fs.writeFile('./src/index.html', fileContent, err => {
        if (err) {
            reject(err);
            return;
        }
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = styleContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
                resolve({
                    ok: true,
                    message: 'Page styled!'
                });
        });
    });
};

module.exports = { writeFile, copyFile };
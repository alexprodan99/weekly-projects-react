'use strict';
const { FileDoesNotExistError } = require('./errors');
const fs = require('fs');

const readFile = (path) => {
    if (!fs.existsSync(path)) {
        throw new FileDoesNotExistError(`${path} does not exists!`);
    }
    return fs.readFileSync(path, 'utf-8');
};

const writeFile = (path, content) => {
    fs.writeFileSync(path, content);
};

module.exports = { readFile, writeFile };

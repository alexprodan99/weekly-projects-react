'use strict';

class FileDoesNotExistError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FileDoesNotExistError';
    }
}

module.exports = { FileDoesNotExistError };

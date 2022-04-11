'use strict';
const mathjs = require('mathjs');

const _getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
};

const genExpression = function (
    height,
    minValueOperand = 1,
    maxValueOperand = 9,
    basicOperatorSet = ['+', '-', '*', '/', '^'],
    advancedOperatorSet = ['sqrt', 'sin']
) {
    const n = Math.max(1, height + _getRandomInt(-2, 0));
    let exp = '' + Math.floor(_getRandomInt(minValueOperand, maxValueOperand+1));
    for (let i = 0; i < n; i++) {
        exp +=
            ' ' +
            basicOperatorSet[
                Math.floor(_getRandomInt(0, basicOperatorSet.length))
            ];
        if (Math.random() < 0.25 && height > 4) {
            exp +=
                ' ' +
                advancedOperatorSet[
                    Math.floor(_getRandomInt(0, advancedOperatorSet.length))
                ];
            exp += '(' + genExpression(height - 4) + ')';
            exp +=
                ' ' +
                basicOperatorSet[
                    Math.floor(_getRandomInt(0, basicOperatorSet.length))
                ];
        }
        if (Math.random() < 0.5 && height > 3) {
            exp += ' (' + genExpression(height - 2) + ')';
        } else {
            exp +=
                ' ' +
                Math.floor(_getRandomInt(minValueOperand, maxValueOperand+1));
        }
    }
    return exp;
};

const evaluate = function (exp) {
    return mathjs.evaluate(exp);
};

module.exports = { genExpression, evaluate };

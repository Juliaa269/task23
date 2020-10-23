const add = require('./add');
const mult = require('./mult');
const div = require('./div');
const sub = require('./sub');

module.exports = {
    add : (leftOperand, rightOperand) => add.output(leftOperand, rightOperand),
    sub : (leftOperand, rightOperand) => sub.output(leftOperand, rightOperand),
    mult : (leftOperand, rightOperand) => mult.output(leftOperand, rightOperand),
    div : (leftOperand, rightOperand) => div.output(leftOperand, rightOperand),
}

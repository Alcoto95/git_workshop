const add = (number1, number2) => {
  return number1 + number2;
}

const divide = (number1, number2) => {
  return number1 / number2;
}

const multiply = (number1, number2) => {
  const result = number2 * number1
  return result;
}

const substract = (number1, number2) => {
  return number1 - number2;
}

module.exports = {
  add,
  divide,
  multiply,
  substract,
};

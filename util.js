const { fetchData } = require('./http')

const generateText = (name, age) => {
  // Returns output text
  return `${name} (${age} years old)`;
};

const createElement = (type, text, className) => {
  // Creates a new HTML element and returns it
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

const validateInput = (text, notEmpty, isNumber) => {
  // Validate user input with two pre-defined rules
  if (!text) {
    return false;
  }
  if (notEmpty && text.trim().length === 0) {
    return false;
  }
  if (isNumber && +text === NaN) {
    return false;
  }
  return true;
};

const checkValidation = (name, age) => {
  if (
    !validateInput(name, true, false) ||
    !validateInput(age, false, true)
  ) {
    return;
  }
  return generateText(name, age)
}

const loadTitle = () => {
  return fetchData().then(extractedData => {
    const title = extractedData.title;
    const transformedTitle = title.toUpperCase();
    return transformedTitle;
  });
};

const printTitle = () => {
  loadTitle().then(title => {
    console.log(title);
  });
};

exports.generateText = generateText
exports.validateInput = validateInput
exports.checkValidation = checkValidation
exports.createElement = createElement
exports.printTitle = printTitle
exports.loadTitle = loadTitle
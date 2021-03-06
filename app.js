const { checkValidation, createElement, printTitle } = require('./util');

const initApp = () => {
  // Initializes the app, registers the button click listener
  const newUserButton = document.querySelector('#btnAddUser');
  const loadTitleButton = document.querySelector('#btnLoadTitle')
  newUserButton.addEventListener('click', addUser);
  loadTitleButton.addEventListener('click', printTitle)
};

const addUser = () => {
  // Fetches the user input, creates a new HTML element based on it
  // and appends the element to the DOM
  const newUserNameInput = document.querySelector('input#name');
  const newUserAgeInput = document.querySelector('input#age');

  const userList = document.querySelector('.user-list');
  const outputText = checkValidation(
    newUserNameInput.value,
    newUserAgeInput.value
  );
  if(!outputText) {
    return
  }
  const element = createElement('li', outputText, 'user-item');
  userList.appendChild(element);
};

// Start the app!
initApp();

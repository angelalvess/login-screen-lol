const inputs = document.querySelectorAll('.input');
const loginButton = document.querySelector('.login-button');

handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('span-active');
};

handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
  }
};

handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length >= 8) {
    loginButton.removeAttribute('disabled');
  } else {
    loginButton.setAttribute('disabled', '');
  }
};

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));

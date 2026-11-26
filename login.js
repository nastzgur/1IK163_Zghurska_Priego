const form = document.getElementById('login-form');
const passwordInput = document.getElementById('password');
const message = document.getElementById('password-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const password = passwordInput.value;
  const valid = password.length >= 8
    && (password.match(/[A-Z]/g) || []).length >= 2
    && /\d/.test(password)
    && /[^A-Za-z0-9]/.test(password);

  passwordInput.setAttribute('aria-invalid', String(!valid));
  message.className = valid
    ? 'password-message is-valid'
    : 'password-message is-invalid';
  message.textContent = valid
    ? 'Password meets the requirements.'
    : 'Password does not meet the requirements.';
});

passwordInput.addEventListener('input', () => {
  passwordInput.removeAttribute('aria-invalid');
  message.className = 'password-message';
  message.textContent = '';
});

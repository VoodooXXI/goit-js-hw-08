import throttle from 'lodash/throttle';

document.addEventListener('DOMContentLoaded', () => {
  const storedState = localStorage.getItem('feedback-form-state');
  if (storedState) {
    const { email, message } = JSON.parse(storedState);
    document.querySelector('input[name="email"]').value = email;
    document.querySelector('textarea[name="message"]').value = message;
  }
});

document.addEventListener(
  'input',
  _.throttle(() => {
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    const state = { email, message };
    localStorage.setItem('feedback-form-state', JSON.stringify(state));
  }, 500)
);

document.querySelector('.feedback-form').addEventListener('submit', event => {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');
  document.querySelector('input[name="email"]').value = '';
  document.querySelector('textarea[name="message"]').value = '';

  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;
  console.log({ email, message });
});

const runForm = function () {
  const input = document.getElementById('email');
  const text = document.getElementById('text');

  //

  const previousData = JSON.parse(localStorage.getItem('contact'));
  if (previousData) {
    console.log(previousData.email);
    console.log(previousData.message);
  }
  //

  let inputContent = '';
  let textContent = '';

  input.addEventListener('input', event => {
    inputContent = event.currentTarget.value;
    console.log(inputContent);
  });

  text.addEventListener('input', event => {
    textContent = event.currentTarget.value;
    console.log(textContent);
  });

  const feedbackFormState = {
    email: inputContent,
    message: textContent,
  };

  localStorage.setItem('contact', JSON.stringify(feedbackFormState));
};

export default runForm;

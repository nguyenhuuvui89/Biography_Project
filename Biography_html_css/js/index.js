const panelSignUpForm = document.querySelector('.right-panel');
const panelLoginForm = document.querySelector('.left-panel');
const panelSignUpBtn = panelSignUpForm.querySelector('.btn');
const panelLoginBtn = panelLoginForm.querySelector('.btn');

const signUpForm = document.querySelector('.sign-up');
const loginForm = document.querySelector('.log-in-form');

function signUp() {
  panelSignUpForm.style.visibility = 'hidden';
  signUpForm.style.zIndex = '1';
  signUpForm.style.visibility = 'visible';
  loginForm.style.visibility = 'hidden';
  panelLoginForm.style.visibility = 'visible';
}

function logIn() {
  panelLoginForm.style.visibility = 'hidden';
  loginForm.style.zIndex = '1';
  loginForm.style.visibility = 'visible';
  signUpForm.style.visibility = 'hidden';
  panelSignUpForm.style.visibility = 'visible';
}

// ---Show sign up form when click to sign up button---
panelSignUpBtn.addEventListener('click', signUp);
// ---Show log in form when click to login button---
panelLoginBtn.addEventListener('click', logIn);

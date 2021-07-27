

console.log('Hello world!');

const button = document.querySelector('.js_appointment-btn');
console.log(button);
button.addEventListener('click', function() {
  const nameInput = document.querySelector('.js_appointment-input-name');
  const emailInput = document.querySelector('.js_appointment-input-email');
  const nameInputValue = nameInput.value;
  const emailInputValue = emailInput.value;
  const successMessage = document.querySelector('.js_appointment-success-message'); 
  successMessage.classList.remove('appointment-success-message-active');

  if (nameInputValue==="") {
    const nameInputError = document.querySelector('.js_appointment-input-name-error');
    nameInputError.classList.add('input__error-active')
  }

  if (emailInputValue==="") {
    const emailInputError = document.querySelector('.js_appointment-input-email-error');
    emailInputError.classList.add('input__error-active');
  }

  if (nameInputValue!=="" && emailInputValue!=="") {
    successMessage.classList.add('appointment-success-message-active');
    nameInput.value = "";
    emailInput.value = "";
    const formData = {
      email: emailInputValue,
      fullname: nameInputValue   
    }
    console.log(formData);
  }
}) 

// Задание №2
const loginButton = document.querySelector('.header-login__link');
console.log(loginButton);
loginButton.addEventListener('click',function(){
  const modalWindow = document.querySelector('.modal');
  modalWindow.classList.add('modal_active');

})
const modalBodyClose = document.querySelector('.modal-body__close');
modalBodyClose.addEventListener('click',function(){
  const modalWindow = document.querySelector('.modal');
  modalWindow.classList.remove('modal_active');
})

const loginFormButton = document.querySelector('.js-modal__btn');
console.log(loginFormButton);
loginFormButton.addEventListener('click',function()  {
  const emailInput = document.querySelector('.js_modal-input-email');
  const passwordInput = document.querySelector('.js_modal-input-password');
  const emailInputValue = emailInput.value;
  const passwordInputValue = passwordInput.value;
  const successModalMessage = document.querySelector('.js_modal-success-message'); 
  successModalMessage.classList.remove('modal-success-message-active');

  if (emailInputValue ==="") {
    const emailInputError = document.querySelector('.js_modal-input-email-error');
    emailInputError.classList.add('input__error-active');
  }

  if (passwordInputValue ==="") {
    const passwordInputError = document.querySelector('.js_modal-input-password-error');
    passwordInputError.classList.add('input__error-active');
  }

  if (emailInputValue !=="" && passwordInputValue !=="" ) {
    successModalMessage.classList.add('modal-success-message-active');
    emailInput.value ="";
    passwordInput.value ="";
    const modalFormData = {
      email: emailInputValue,
      password: passwordInputValue
    }
    console.log(modalFormData);
  }
})

// Задание№3

const buttonLearMore = document.querySelector('.js-learn_btn');
const scrollProject = document.querySelector('.project-grid');
buttonLearMore.addEventListener('click', handleButtonClick);

function handleButtonClick() {
  scrollProject.scrollIntoView({block: "center", behavior: "smooth"})
  

}

// Задание №4

const buttonMenu = document.querySelector('.header-menu__burger');
const burgerMenuClose = document.querySelector('.menu-burger__close');
buttonMenu.addEventListener('click',toggleMenu);
burgerMenuClose.addEventListener('click',toggleMenu);
function toggleMenu ()  {
  const menuWindow = document.querySelector('.menu');
  menuWindow.classList.toggle('menu_active');

}
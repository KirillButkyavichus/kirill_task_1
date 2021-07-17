

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
    const nameInputError = document.querySelector('.js_appointment-input-email-error');
    nameInputError.classList.add('input__error-active');
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


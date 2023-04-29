import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const message = document.querySelector('textarea');

//const STORAGE = 'feedback-form-storage';

function onInputSubmit(e) {
    e.preventDefault();
    const { elements: { email, message} } = e.currentTarget;
    const formData = {
        email: email.value,
        message: message.value
    };
    console.log(formData);
   
    localStorage.setItem('feedback-form-storage', JSON.stringify(formData));
    
    //e.currentTarget.reset();
    //localStorage.removeItem('feedback-form-storage');
}

function onSetDataValues() {
    const oldData = JSON.parse(localStorage.getItem('feedback-form-storage'));
    if(oldData) {
        input.value = oldData.email;
        message.value = oldData.message;
    }
}

/*function onInputData() {
    const inputValueData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if(inputValueData) {
        input.value = inputValueData;
    }
}

function getTeaxtareaData() {
    const message = document.querySelector('textarea');
    const txtarmessage = JSON.parse(localStorage.getItem('feedback-form-state'));
    if(txtarmessage) {
        message.value = txtarmessage;
    }
}*/

function onTextareaData(e) {
    const textAreaMessage = e.target.value;
    console.log(textAreaMessage);
}

form.addEventListener('submit', onInputSubmit);
message.addEventListener('input', throttle(onTextareaData, 500));






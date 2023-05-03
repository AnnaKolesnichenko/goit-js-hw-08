import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const message = document.querySelector('textarea');

const email = document.querySelector('input[name="email"]'); 
const textarea = document.querySelector('textarea[name="message"]');


const STORAGE = 'feedback-form-storage';

function onCheckForm(e) {
    const { elements: {email, message }} = e.currentTarget;    
    const data = {
        email: email.value,
        message: message.value
    };

    if(email.value === '' || textarea.value === '') {
        alert("There is not enough data for the form to be processed");
        return;
    }  
    console.log(data);
}

function onInputSubmit(e) {
    e.preventDefault();    
    const { elements: {email, message }} = e.currentTarget;    
    const formData = {
        email: email.value,
        message: message.value
    };       
    localStorage.setItem(STORAGE, JSON.stringify(formData));  
    console.log(formData);
}

function onClearFormn(e) {
    e.preventDefault();
    const oldData = JSON.parse(localStorage.getItem(STORAGE));
    if(oldData) {
        e.currentTarget.reset();
        localStorage.removeItem(STORAGE);
    }
}

function onSetDataValues() {
    const oldData = JSON.parse(localStorage.getItem(STORAGE));
    if(oldData) {
        input.value = oldData.email;
        message.value = oldData.message;
    }
}

/*function onTextareaData(e) {
    const textAreaMessage = e.target.value;
    console.log(textAreaMessage);
}*/

form.addEventListener('submit', onCheckForm);
form.addEventListener('submit', onInputSubmit);
form.addEventListener('submit', onClearFormn);
//message.addEventListener('input', throttle(onTextareaData, 500));
onSetDataValues();








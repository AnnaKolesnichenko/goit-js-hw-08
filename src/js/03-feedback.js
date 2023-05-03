import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const message = document.querySelector('textarea');

const email = document.querySelector('input[name="email"]'); 
const textarea = document.querySelector('textarea[name="message"]');


const STORAGE = 'feedback-form-storage';

function onCheckForm(e) {
    const data = {
        email: email.value,
        message: message.value
    };

    if(email.value === '' || message.value === '') {
        alert("There is not enough data for the form to be processed");
        return;
    }  
    console.log(data);
}

function onInputSubmit(e) {
    e.preventDefault();    
    const formData = {
        email: email.value,
        message: textarea.value
    };       
    localStorage.setItem(STORAGE, JSON.stringify(formData));  
}

function onClearForm(e) {
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


form.addEventListener('submit', onCheckForm);
form.addEventListener('input', throttle(onInputSubmit, 500));
form.addEventListener('submit', onClearForm);
onSetDataValues();








let start_button = document.querySelector('.start_button');
let start = document.querySelector('.start');
let popup = document.getElementById('popupId');
let name = document.getElementById('name');
let surname = document.getElementById('surname');
let patronymic = document.getElementById('patronymic');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let popup_button = document.querySelector('.popup_button');
let result = document.getElementById('result');

let popupData = {
    name: '',
    surname: '',
    patronymic: '',
    email: '',
    phone: '',
};

start_button.addEventListener('click', () => {
    start.classList.remove('start');
    start.classList.add('unvivsible');
    popup.classList.remove('unvivsible');
    popup.classList.add('popup');
    setTimeout(() => {
        document.addEventListener('click', (event) => {
            if (!popup.contains(event.target)) popup.style.display='none';
          });
    }, 1);
});


popup_button.addEventListener('click', (e) => {
    e.preventDefault();
    popup.classList.remove('popup');
    popup.classList.add('unvivsible');
    popupData.name = name.value;
    popupData.surname = surname.value; 
    popupData.patronymic = patronymic.value; 
    popupData.email = email.value; 
    popupData.phone = phone.value;
    result.classList.remove('unvivsible');
    result.classList.add('result');
    result.innerHTML = JSON.stringify(popupData, null, '\n');
})

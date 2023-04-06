//Keyboard Events
let chatbox = document.getElementById('chat');
textBox.addEventListener('keydown', (event) => {
    console.log(`key=${event.key},code=${event.code}`);

}); 

//focus events
const pwd = document.querySelector('input[type="password"]');

pwd.addEventListener('focus', (e) => {
    e.target.style.backgroundColor = 'yellow';
});

pwd.addEventListener('blur', (e) => {
    e.target.style.backgroundColor = '';
});
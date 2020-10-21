let message = ', Just learn it! Your Gromcode';
const sender = 'Your Gromcode';

function sendMessage(name) {
    console.log(`${name}, ${message}! ${sender}`);
}

function setMessage(text) {
    message = text;
}

setMessage('Good job');

sendMessage('Eva');
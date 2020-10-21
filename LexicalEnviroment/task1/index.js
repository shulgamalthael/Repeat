let message = ', Just learn it! Your Gromcode';
const sender = 'Your Gromcode';

export function sendMessage(name) {
    console.log(`${name}, ${message}! ${sender}`);
}

export function setMessage(text) {
    message = text;
}

setMessage('Good job');

sendMessage('Eva');
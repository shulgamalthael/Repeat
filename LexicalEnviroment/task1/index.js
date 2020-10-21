let message = 'Just learn it';
const sender = 'Your Gromcode';

export function sendMessage(name) {
    console.log(`${name}, ${message}! ${sender}`);
}

export function setMessage(text) {
    message = text;
}

// setMessage('Good job');
// sendMessage('Ann');
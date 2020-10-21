//Algo:
//1.createMessage function
////input: undefined
////output: object
//2.setMessage function
////input: string message
////output: string
//3.setSender function
////input: string sender
////output: string

export default function createMessenger() {

    let message = 'Just learn it'
    let sender = 'Gromcode'

    function sendMessage(name) {
        console.log(`${name}, ${message}! Your ${sender}`)
    }

    function setMessage(text) {
        message = text;
    }

    function setSender(send) {
        sender = send;
    }

    return {
        sendMessage,
        setMessage,
        setSender
    }

}

// const messanger = createMessenger();
// messanger.sendMessage('Bob');
// 
// const messanger1 = createMessenger();
// messanger1.sendMessage('Nikita');
// messanger1.setMessage('Good job');
// 
// const messanger2 = createMessenger();
// messanger2.setMessage('Waf :)');
// messanger2.setSender('Nikita');
// messanger2.sendMessage('Eva');
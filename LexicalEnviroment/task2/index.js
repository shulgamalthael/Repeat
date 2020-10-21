//Algo:
//1.createMessage function
////input: none
////output: object
//2.setMessage function
////input: string message
////output: string
//3.setSender function
////input: string sender
////output: string

let message = 'Just learn it'
let sender = 'Gromcode'

export function createMessage() {

    user = {

        sendMessage(name) {
            console.log(`${name}, ${message}! Your ${sender}`)
        },

        setMessage(text) {
            message = text;
        },

        setSender(send) {
            sender = send;
        }
    }

}

createMessage();
user.setSender('Gromcode');
user.setMessage('Good job');
user.sendMessage('Ann');
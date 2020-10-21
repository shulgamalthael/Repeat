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

let message = 'Just learn it'
let sender = 'Gromcode'

export default function createMessenger() {

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
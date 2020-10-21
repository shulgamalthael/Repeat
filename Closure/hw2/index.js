const memory = [
    {
        message: '',
        dateTime: new Date(),
        type: 'warn'
    },
    {
        message: '',
        dateTime: new Date(),
        type: 'error'
    },

    {
        message: '',
        dateTime: new Date(),
        type: 'log'
    }
];

function validate(type, str) {
    memory.map( elem => {
        if( elem.type === type ) {
            return elem.message = str;
        }
    })
}

export function createLogger() {
    function warn(str) {
        validate('warn', str);
    }

    function error(str) {
        validate('error', str);
    }

    function log(str) {
        validate('log', str);
    }

    function getRecords(type) {

        if( type === undefined ) {
            console.log(memory);
            const sortedMemory = memory.sort((a, b) => {
                return a.dateTime - b.dateTime;
            })
        }

        memory.map(elem => {
            if( elem.type === type ) {
                console.log( elem );
            }
        })
    }

    return {
        warn,
        error,
        log,
        getRecords
    }
}

// console.log(memory);
// 
// const loger = createLogger();
// loger.warn('Hi!');
// loger.error('Error');
// loger.log('Success');
// loger.getRecords('log');
// loger.getRecords();
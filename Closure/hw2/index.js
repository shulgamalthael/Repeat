let memoty = [];

export function createLoger() {
    
    function warn(message) {
        memory.push({
            message: message,
            dateTime: new Date(),
            type: 'warn'
        })
    }

    function error(message) {
        memory.push({
            message: message,
            dateTime: new Date(),
            type: 'error'
        })
    }

    function log(message) {
        memory.push({
            message: message,
            dateTime: new Date(),
            type: 'log'
        })
    }

    function getRecords( type ) {

        if( type !== undefined ) {
            const result = memory.filter(el => el.type === type)
                .sort((a, b) => b.dateTime - a.dateTime);
            return result;
        } else {
            return memory.sort((a, b) => b.dateTime - a.dateTime)
        }
        
    }

    return {
        warn,
        error,
        log,
        getRecords
    }
}
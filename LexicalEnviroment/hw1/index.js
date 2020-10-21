    let memory = 0;

    export function add(num) {
        memory += num;
        console.log(memory);   
    }

    export function decrease(num) {
        memory -= num;
        console.log(memory);  
    }

    export function reset() {
        memory = 0;
        console.log(memory);  
    }

    export function getMemo() {
        return memory;
    }

// add(10);
// 
// decrease(5);
// 
// reset();
// 
// add(100);
// 
// getMemo();
 export function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    }
 }

 const counter = makeCounter();
 const counter1 = makeCounter();
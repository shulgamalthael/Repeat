export function createCalculator() {

    let memo = 0;

    function add(num) {
        memo += num;
    }

    function decrease(num) {
        memo -= num;
    }

    function reset() {
        memo = 0;
    }

    function getMemo() {
        return memo;
    }

    return {
        add,
        decrease,
        reset,
        getMemo
    }
}
var arr = [];

for(var i = 0; i < 10; i++) {
    arr[i] = function() {
        return i;
    }

    console.log(arr[i]());
}

export { arr };
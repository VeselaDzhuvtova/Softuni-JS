function addAndRemove(input) {

    let arr = input;
    let arrLength = arr.length;
    let result = [];

    for (let i = 0; i < arrLength; i++) {

        if(arr[i] === 'remove'){
            result.pop();
        }else if(arr[i] === 'add'){
            result.push(i + 1);
        }
    }
    if(result.length === 0){
        console.log('Empty');
    }else {
        console.log(result.join(' '));
    }
}
addAndRemove (['add', 'add', 'add', 'add'])
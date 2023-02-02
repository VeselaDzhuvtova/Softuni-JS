function condenseArrayToNumber (arr) {

    let num = [];

    for (let i = 0; i < arr.length; i++) {
        num[i] = Number(arr[i]);        
    }
    while(num.length > 1) {
        let condensed = [];
        for (let i = 0; i < num.length - 1; i++) {
            condensed[i] = Number(num[i] + num[i+1]);
        }
        num = condensed;
        condensed = 0;
    }
    console.log(Number(num))
}
condenseArrayToNumber([2,10,3])
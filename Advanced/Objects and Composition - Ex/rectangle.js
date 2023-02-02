function rectangle (arr) {
    let SecondArr = []
    let comparedArr = []
    let areaObj = {}
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length - 1; j++) {
            areaObj.width = Number(arr[i][j])
            areaObj.height = Number(arr[i][j + 1])
            SecondArr.push('width: ' + areaObj.width)
            SecondArr.push('height: ' + areaObj.height)
            areaObj.area = function (a, b) {
                let area1 = a * b
                return area1
            }
            let aa = areaObj.area(arr[i][j], arr[i][j + 1]) // ???
            SecondArr.push('area: ' + areaObj.area(arr[i][j], arr[i][j + 1])) // ???
        }
    }
    console.log(SecondArr.join(', '))
}
rectangle 
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

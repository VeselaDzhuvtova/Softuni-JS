function circleAreaAndPerimeter (input) {

    let r = Number(input[0]);

    let s = Math.PI * r * r;
    let per = Math.PI * 2 * r;

    console.log(s.toFixed(2))
    console.log(per.toFixed(2))
}
circleAreaAndPerimeter ([3])
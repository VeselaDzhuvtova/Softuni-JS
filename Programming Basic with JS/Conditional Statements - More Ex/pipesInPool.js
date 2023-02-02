function pipesInPool (input) {

    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let p1Hours = p1 * h; // 300
    let p2Hours = p2 * h; // 360
    let total = p1Hours + p2Hours;

    let totalInPercentage = (total / v) * 100;
    let inPersP1 = (Math.abs (p1Hours / total)) * 100;
    let inPersP2 = (Math.abs (p2Hours / total)) * 100;

    if (total <= v) {
        console.log(`The pool is ${totalInPercentage.toFixed(2)}% full. Pipe 1: ${inPersP1.toFixed(2)}%. Pipe 2: ${inPersP2.toFixed(2)}%.`)
    } else {
        console.log(`For ${h} hours the pool overflows with ${Math.abs(total - v)} liters.`)
    }
}
pipesInPool ([1000, 100, 120, 3])
// pipesInPool([100, 100, 100, 2.5])

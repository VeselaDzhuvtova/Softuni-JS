function moving(input){
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;

    let freeSpace = width * length * height;
    let busySpace = 0;
    
    while (input[index]!=="Done"){
        if (freeSpace > busySpace){
        let pack = Number(input[index]);
        busySpace = busySpace + pack;
        index++;
        } else {
            break;
        }
    }
    let diff = Math.abs(freeSpace - busySpace);
    if (busySpace >= freeSpace){
        console.log(`No more free space! You need ${diff} Cubic meters more.`);
    } else{
        console.log(`${diff} Cubic meters left.`)
    }
}
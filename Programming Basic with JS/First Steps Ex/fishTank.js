function fishTank (input) {

    let length = input[0];
    let width = input[1];
    let height = input[2];
    let percentage = input[3];

    let totalVolume = (length * width * height) / 1000;
    let full = totalVolume * (1 - (percentage / 100));
    console.log(full)
}
fishTank (["85 ","75 ","47 ","17 "])
function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let i = 1;
    let negativeGradeCount = 0;
    let sumGrade = 0;
    let hasExcluded = false;

    while (i <= 12) {
        let currentGrade = Number(input[index]);
        index++;

        if (currentGrade < 4) {
            negativeGradeCount++;
            if (negativeGradeCount == 2){
                hasExcluded = true;
                break;
            }
            continue;
        } 
        sumGrade += currentGrade;
        i++;
        }
        let avgGrade = sumGrade / 12;
        if(hasExcluded){
            console.log(`${name} has been excluded at ${i} grade`);
        } else {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }

}
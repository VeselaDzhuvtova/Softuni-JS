function examPreparation(input){
    let index = 0;
    let maxBadEvaluation = input[index];
    index++;

    let command = input[index];

    let taskName = "";
    let sum = 0;

    let count = 0;
    let taskCount = 0;
    let average = 0;
    while(input[index] !== "Enough"){
        taskName = input[index];
        index++;
        command = Number(input[index]);
        index++;
        sum = sum + command;
        taskCount++;

        if (command <= 4){
            count++;
            if(count >= maxBadEvaluation){
                console.log(`You need a break, ${count} poor grades.`)
                return;
            }
        }
    }
    average = sum / taskCount;
    console.log(`Average score: ${average.toFixed(2)}`);
    console.log(`Number of problems: ${taskCount}`);
    console.log(`Last problem: ${taskName}`);
}
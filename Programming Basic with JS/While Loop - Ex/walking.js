function walking(input){
    let index = 0;
    let totalSteps = 0;
    let goingHome = false;
    let diff = 0;

    while(totalSteps < 10000){
        if(input[index]==="Going home"){
            goingHome = true;
            index++;
            steps = Number(input[index]);
            totalSteps = totalSteps + steps;
            break;
        } else{
            let steps = Number(input[index]);
            index++;
            totalSteps = totalSteps + steps;
        }
    }
    diff = Math.abs(totalSteps - 10000);
    if (goingHome && totalSteps < 10000){
        console.log(`${diff} more steps to reach goal.`);
    } else {
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
    }
} 
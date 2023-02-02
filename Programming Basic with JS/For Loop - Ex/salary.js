function salary(input) {
    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 2; i <= tabs + 2; i++) {
        let site = (input[i]);
        if (site === "Facebook") {
            salary = salary - 150;
        } else if (site === "Instagram") {
            salary = salary - 100;
        } else if (site === "Reddit") {
            salary = salary - 50;
        }
        if (salary <= 0) {
            break;
        }
    }

    if (salary > 0) {
        console.log(salary);
    } else {
        console.log("You have lost your salary.");
    }
}
function projectCreation (input) {
    let name = input[0];
    let projects = input[1];
    let hoursForOneProject = 3;
    let result = projects * hoursForOneProject;
    console.log(`The architect ${name} will need ${result} hours to complete ${projects} project/s.`)
}
projectCreation (["George ","4 "])
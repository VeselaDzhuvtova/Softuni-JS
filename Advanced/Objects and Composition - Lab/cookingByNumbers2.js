function cookingByNumbers (...commands) {

    let initial = commands.shift(); // от тук тръгваме. Вземаме 32 и остават командите
    const parser = {
        chop: (x => x/2),
        dice: x => Math.sqrt(x),
        spice: x => x + 1,
        bake: x => x * 3,
        fillet: x => x * 0.8
    };

    for (let command of commands) {
        initial = parser[command](initial);
        console.log(initial);
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop',)
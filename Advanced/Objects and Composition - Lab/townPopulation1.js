function townPopulation1 (townsAsStrings) {
    const result = {}; // създаваме празен обект, който да пази резултата

    for (let line of townsAsStrings) { // обхождаме масива
        const [name, population] = line.split(' <-> '); // [name, population] това е деструктуриране

        if (name in result == false) { // ако града не съществува
            result[name] = 0; // result е = 0
        }
        result[name] += Number(population); // ако града съществува, добави новата популация към старата (100 000 старо + 10 000 ново)
    }
    console.log(Object
        .entries(result) // превръщаме обекра в масив
        .map(([name, population]) => `${name}: ${population}`) // за всеки [name, population] ми върни стринг
        .join('\n')); // довави към резултата
}

townPopulation1([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])


    // Инпут - масив. ->трябва да стане Sofia : 1200000. 
    //Ако града е вече в списъка, го игнорираме и добавяме популацията към същия град в по-горен ред.
1.  // сортиране на обект/указател/
// създаваме обект
const phonebook = {
    'John': '+1-555-7416', // [0 име, 1 телефон]
    'Mary': '+1-555-1576',
    'Bob': '+1-555-2346'
};
// превръщаме обекта в матрица
const entries = Object.entries(phonebook);

// сортираме по име а[0] - б[0]
entries.sort((a, b) => {
    return a[0].localeCompare(b[0]);
});

console.log(entries);

const sorted = Object.fromEntries(entries);
console.log(entries);

// създаваме/взимаме обекта, превръщаме го в матрица,
// сортираме я и от нея правим нов обект.

// обекта не може да се сортира. Затова го превръщаме в матрица.



// 2. Свойство, което съхранява функция е метод. Свойство, което съхранява данни е поле.
//Object methods - това са просто функции, които се съхраняват в свойството(property).
function hello() { // създаваме функция, която в последствие използваме в обект.
    console.log('Hello!');
}
let person = {
    firstName: "John",
    lastName: "Doe",
    sayHi: hello,
    age: function (myAge) {
        console.log (`My name is ${this.firstName} and my age is ${myAge}!`) 
    }
}
person.sayHi();
person.age(21);
const myFn = person.sayHi;
const person2 = {
    name: 'Ivan',
    age: 31,
    myFn
};
console.log(`My name is ${person2.name}.`)
console.log(`My age is ${person2.age}.`)
person2.myFn


// 3. JSON

JSON.stringify() //- превръща JSON в String. 
// Всяко свойство се показва на отделен ред

// НЕ МОЖЕМ ДА ВКАРАМЕ ФУНКЦИИ В JSON

function solve(data) { // превръща текст в JSON
 console.log( JSON.parse(data))
}

//  promise е нашия Promise.
//  Подаваме му функция (executor), която получава 
// параметри resolve i reject(които са нейни функции)
//  и могат да приемат стойности в последствие

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('Just Married...');// тук ще се върнат някакви данни като резултат
        } else {
            reject('Sorry it\'s me')
        }
    }, 3000);
});

console.log(promise);

promise.then((result) => {
    console.log(result);
});// когато този promise се изпълни...(и използваме then)

promise.catch((reason) => {
    console.log(reason);
}); // ако fail-не (ако се провали) тогава изпълни...

// най-често се среща така (chain - верига):

promise
.then((result) => {
    console.log(result);
})
.catch((reason) => {
    console.log(reason);
});




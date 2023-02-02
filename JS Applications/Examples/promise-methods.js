// бърз промис без catch...винаги се изпълнява(Promise.resolve)

//  По същия начин подаваме и с reject(винаги да отхвърля)

let alwaysResolvingPromise = Promise.resolve('YES');

alwaysResolvingPromise
.then(res => console.log(res))
.catch((err) => console.log('Never Used'));

alwaysResolvingPromise
.catch((reason) => console.log(reason));

//  връща масив от promises (2) ['YES', 'Yes2']
// Ако искаме да върнем масив - с Promise.All
// Promise.All НЕ връща резултат ако дори един от промисите fail-ва

let multiplePromises = Promise.all([
    alwaysResolvingPromise,
    Promise.resolve('Yes2'),
]);

multiplePromises.then(res => {
    console.log(res);
});

// then, catch and finally са методи на Promise


function solve() {

    const label = document.querySelector('#info span'); // взимаме Not connected полето
    const departBtn = document.getElementById('depart'); // взимаме бутона depart
    const arriveBtn = document.getElementById('arrive'); // взимаме бутона arrived

    let stop = {// взимаме спирката(следващата спирка) като обект
        next: 'depot'
    };

    async function depart() {
        // get info for next stop Взимаме информация за следващата спирка
        departBtn.disabled = true;//бутонът не е активен
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}` // тръваме от depot. Като направиш тази заявка изчакай да получиш данните, за да ги обработим
        const res = await fetch(url);// правим заявка към url-a

        stop = await res.json(); // даваме нова стойност на променливата stop/спирката, като json

        label.textContent = `Next stop ${stop.name}`//в полето се изписва даденото съобщение

        arriveBtn.disabled = false;// бутонът е активен
    }

    function arrive() {

        label.textContent = `Arriving is ${stop.name}`
        departBtn.disabled = false;//обръщаме бутоните
        arriveBtn.disabled = true;//обръщаме бутоните
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
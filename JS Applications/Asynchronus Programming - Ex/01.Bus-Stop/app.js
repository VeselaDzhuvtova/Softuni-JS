async function getInfo() {

    // read input value
    // request to server
    // parse data
    // display data
    // check error

    const stopNameElement = document.getElementById('stopName');//вземи полето, на което трябва да изпишем спирката в последствие
    const timeTableElement = document.getElementById('buses');//ul списъка, в който ще слагаме li

    const stopId = document.getElementById('stopId').value;//
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;// взимаме си url-а

    try {
        stopNameElement.textContent = 'Loading...';//на бутона да изпишем 'Loading...' докато зарежда
        timeTableElement.replaceChildren();//изчиства данните от предишната заявка, за да не се натрупват като цъкнем няколко пъти на бутона
        
        const res = await fetch(url);//искам да изчакам резултата от тази заявка / функцията fetch
        if(res.status !== 200) {// ако резултатът е различен от 200 ОК
            throw new Error('Stop ID not found!');// хвърли грешка - невалиден номер
        }
        const data = await res.json();// преобразувай данните в json формат
        stopNameElement.textContent = data.name;//присвои данните (името на спирката) в полето

        Object.entries(data.buses).forEach(b => {//вземи обекта със бусовете, мини през всеки елемент
            const liElement = document.createElement('li');//създай нов li елемент в ul на html-a
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`//присвои на li елемента b[0] е номера на автобуса, b[1] са минутите
            timeTableElement.appendChild(liElement);//закачи всички li елементи, които отговарят на номера, който сме подали
        });
    } catch(error) {
        stopNameElement.textContent = 'Error'// при грешен номер на спирка - грешка
    }
}
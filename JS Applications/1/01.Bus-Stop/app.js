// НЕ Е ГОТОВО

async function getInfo() {
    console.log("TODO...");
    const stopInfoElement = document.getElementById("stopId");
    const stopId = stopInfoElement.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    const stopNameElements = document.getElementById("stopName");
    const busList = document.getElementById("buses");
    
    busList.innerHTML = "";
    stopId.value = "";

    try {
        const response = await fetch(url);
        const data = await response.json();
    
        stopNameElements.textContent = data.name;
        Object.entries(data.buses).forEach(([busNumber, timeArrive]) => {
            li.textContent = `Bus ${busNumber} arrives in ${timeArrive} minutes.`
            busList.appendChild(li);
        });
    }
    catch (error) {
        stopNameElements.textContent = "Error";
    }
}

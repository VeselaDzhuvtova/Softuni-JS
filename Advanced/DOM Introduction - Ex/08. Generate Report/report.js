function generateReport() {
    const headerBoxes = Array.from(document.querySelectorAll('thead tr th input'));
    const boxesL = headerBoxes.length;
    const infoTable = Array.from(document.querySelectorAll('tbody tr'));
    const infoTableL = infoTable.length;
    const output = document.getElementById('output');

    const result = [];

    for (let i = 0; i < infoTableL; i++) {

        const report = {};

        for (let j = 0; j < boxesL; j++) {

            if (headerBoxes[j].checked) {
                report[headerBoxes[j].name] = infoTable[i].children[j].textContent;
            }
        }
        result.push(report);
    }
    output.textContent = JSON.stringify(result);
}

// function area() {
//     return Math.abs(this.x * this.y);
// };
// function vol() {
//     return Math.abs(this.x * this.y * this.z);
// };

// function areaAndVolumeCalclator (area, vol, input) {
//     let coordinates = JSON.parse(input);
//     let result = [];

//     for (const points of coordinates) {
//         result.push({
//             area: area.call(points),
//             vol:vol.call(points)
//         });
//     }
//     return result;
// }

// // 2 вариант

// function fancySolve(area, vol, input) {
//     return JSON.parse(input)
//         .map(x => ({
//             area: area.call(x),
//             vol: vol.call(x),
//         })
//         );
// }

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {

    return JSON.parse(input)
        .map(points => ({           
            area: area.apply(points),
            volume: vol.apply(points),
        })
        );
}

areaAndVolumeCalclator(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`);
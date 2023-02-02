function pieceOfPie (arrPies, firstPie, secondPie) {

    let indexOfFirstPie = arrPies.indexOf(firstPie);
    let indexOfSecondPie = arrPies.indexOf(secondPie);

    return arrPies.slice(indexOfFirstPie, indexOfSecondPie + 1);
}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)
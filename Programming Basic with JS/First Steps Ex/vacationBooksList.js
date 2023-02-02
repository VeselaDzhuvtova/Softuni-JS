function vacationBooksList (input) {
    let numOfListsInCurrBook = Number(input[0]);
    let listsForHour = Number(input[1]);
    let daysForABook = Number(input[2]);

    let totalHours = numOfListsInCurrBook / listsForHour;
    let result = totalHours / daysForABook;
    console.log(result)

} vacationBooksList (["212 ","20 ","2 "])
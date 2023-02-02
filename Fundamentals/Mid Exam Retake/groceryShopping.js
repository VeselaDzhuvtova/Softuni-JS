function groceryShopping(input) {

    let initialList = array.shift().split("!");
    for (let line of array) {
      let [command, item, nextItem] = line.split(" ");
      if (command == "Go" && item == "Shopping!") {
        break;
      }
      if (command == "Urgent") {
        if (!initialList.includes(item)) {
          initialList.unshift(item);
        }
      } else if (command == "Unnecessary") {
        if (initialList.includes(item)) {
          let index = initialList.indexOf(item);
          initialList.splice(index, 1);
        }
      } else if (command == "Correct") {
        if (initialList.includes(item)) {
          let index = initialList.indexOf(item);
          initialList.splice(index, 1, nextItem);
        }
      } else if (command == "Rearrange") {
        if (initialList.includes(item)) {
          let index = initialList.indexOf(item);
          initialList.splice(index, 1);
          initialList.push(item);
        }
      }
    }
    console.log(initialList.join(", "));
  }
groceryShopping(["eggs|milk|bread|fish",
"Important%bread",
"Swap%eggs%tomato",
"Shop!"])


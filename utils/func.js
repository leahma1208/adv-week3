export function GoToPage(p=1, books=[], num=10){
    // const books = require("./books.json");
    const lists = books.slice((p-1)*5, p*num);

    console.log(lists);
    return lists;
}

// GoToPage(1) will get me books 0-5
// GoToPage(2) will get me books 5-10
//GoToPage(3) will get me books 10-15

// GoToPage(2);
let booList = "";
async function getBookList() {
    const response = await fetch("/books.json");
    const booList = await response.json();
    console.log(booList);
}

getBookList();

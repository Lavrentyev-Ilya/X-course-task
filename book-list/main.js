let bookList = "";
async function getBookList() {
    const response = await fetch("/books.json");
    const bookList = await response.json();
}

getBookList();

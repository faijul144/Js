function Book(title,auth,isbn){
this.title = title;
this.auth = auth;
this.isbn = isbn;
}

// function for UI
function UI(){}


UI.prototype.addNewBook = function(book) {
    const list = document.getElementById('book_list');

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.auth}</td>
    <td>${book.isbn}</td>
    <td><a href="javascript:void(0)"><i <i class="fas fa-times-circle "></i></a></td>
    `;
    list.appendChild(row);

    document.getElementById('title').value = " ";
    document.getElementById('auth').value = " ";
    document.getElementById('isbn').value = " ";
}


// Event Listener
document.getElementById('book-form').addEventListener('submit',function(e){

    const title = document.getElementById('title').value,
          auth = document.getElementById('auth').value,
          isbn = document.getElementById('isbn').value;

    const book = new Book(title,auth,isbn);
    // console.log(book);

    const ui = new UI();
    ui.addNewBook(book);

    e.preventDefault();
})
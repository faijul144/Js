const form = document.getElementById('book-form');
const container = document.getElementById('container');
const list = document.getElementById('book_list');
const row = document.createElement('tr');


class Book{
    constructor(title,auth,isbn){
        this.title = title;
        this.auth = auth;
        this.isbn = isbn;
    }
}

class UI{
    addNewBook(book){
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.auth}</td>
        <td>${book.isbn}</td>
        <td><a href="javascript:void(0)" class="delete"><i class="fas fa-times-circle"></i></a></td>
        `;
        list.appendChild(row);

        document.getElementById('title').value = "";
        document.getElementById('auth').value = "";
        document.getElementById('isbn').value = "";
    }

    alertMessageEmpty(){
        const err = document.createElement('div');

        err.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade' ,'show');

        err.innerHTML = `
        <strong>Opps You Missed Something!!</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
        `;
        container.insertBefore(err,form);
    }

    deleteBook(target){
        if(target.parentElement.className === 'delete'){
            target.parentElement.parentElement.parentElement.remove();
        }
    }
}


// Event Listener
form.addEventListener('submit',function(e){

    const title = document.getElementById('title').value,
          auth = document.getElementById('auth').value,
          isbn = document.getElementById('isbn').value;

    const book = new Book(title,auth,isbn);
    // console.log(book);

    const ui = new UI();

    if(title === "" || auth === "" || isbn === ""){
        ui.alertMessageEmpty();
    }else{
    ui.addNewBook(book);
}
    e.preventDefault();
})

// Delete Listener

list.addEventListener('click',function(e){

    const ui = new UI();
    ui.deleteBook(e.target);
    console.log(e.target.parentElement.className);

    e.preventDefault();
})
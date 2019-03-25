class UI{
    showHistory(his){
    const ul = document.getElementById('history-list');
    ul.classList.add('show');
    const li = document.createElement('li');
    // const date = new Date();
//    const date_min = date.prototype.getHours();
    // console.log(date.toLocaleDateString());
    // console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    li.classList.add('list-group-item');
    li.innerHTML = `<a class = "history-item" href="">${his}</a>`;
    ul.appendChild(li);
    }
}
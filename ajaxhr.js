// Ajax = Asynchronous Javascript & XML

// XHR = XmlHttpRequest (XHR) Obj

//JSON = JavaScript Object Notation

document.getElementById('btn-data').addEventListener('click',loadData);

function loadData(){
    // Create XHR Obj

    const xhr = new XMLHttpRequest();

    //OPEN function
    xhr.open('GET','data.txt', true);

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
    }

    // To Finalize Everything We Have To Use Send
    xhr.send();
}
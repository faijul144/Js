// Ajax = Asynchronous Javascript & XML

// XHR = XmlHttpRequest (XHR) Obj

//JSON = JavaScript Object Notation

// Text Doc Check

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

// Get Employee From JSON

document.getElementById('btn-1').addEventListener('click',loadEmployee);

function loadEmployee(e){

    const xhr = new XMLHttpRequest();

    xhr.open('GET','employee.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);
            const employee = JSON.parse(this.responseText);

            const output = `
                <ul class="list-group mt-4">
                    <li class="list-group-item">ID : ${employee.id}</li>
                    <li class="list-group-item">Name : ${employee.name}</li>
                    <li class="list-group-item">Company : ${employee.company}</li>
                    <li class="list-group-item">Phone Number : ${employee.phone_no}</li>
                </ul>
            `;
            document.getElementById('employee').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}


// Get Employees From JSON

document.getElementById('btn-2').addEventListener('click',loadEmployees);

function loadEmployees(e){

    const xhr = new XMLHttpRequest();

    xhr.open('GET','employees.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);
            const employees = JSON.parse(this.responseText);

            let output = '';


            employees.forEach(function(employee) {
                output += `
                <ul class="list-group mt-4">
                    <li class="list-group-item">ID : ${employee.id}</li>
                    <li class="list-group-item">Name : ${employee.name}</li>
                    <li class="list-group-item">Company : ${employee.company}</li>
                    <li class="list-group-item">Phone Number : ${employee.phone_no}</li>
                </ul>
            `;

            });

            document.getElementById('employees').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}
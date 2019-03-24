const http = new EasyHTTP;

//Get User
// http.get('https://jsonplaceholder.typicode.com/users/2')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// Post Data
// const data = {
//     name: 'Faijul Islam',
//     username: 'Faijul',
//     email: 'f.faijulislam144@gmail.com'
//  }



//Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//Update User
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));
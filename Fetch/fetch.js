document.getElementById('text').addEventListener('click',getText);
document.getElementById('json').addEventListener('click',getJson);
document.getElementById('api').addEventListener('click',getAPI);

//Get Text Data

function getText(){
    fetch('test.txt')
    .then(function(res){
        return res.text()
    })
    .then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){
        console.log(err);
    })

}

//Get JSON Data
function getJson(){
    fetch('test.json')
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);

        let output = '';

        data.forEach(function(users){
            output+=`<li class="list-group-item">${users.id} : ${users.login}</li>`;
        })

        document.getElementById('output').innerHTML = `
                <ul class="list-group">${output}</ul>
        `;
    })
    .catch(function(err){
        console.log(err);
    })
}

//Get External API Data
function getAPI(){
    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);

        let output = '';

        data.forEach(function(users){
            output+=`<li class="list-group-item">${users.id} : <a href="${users.html_url}" target="_blank">${users.login}</a></li>`;
        })

        document.getElementById('output').innerHTML = `
                <ul class="list-group">${output}</ul>
        `;
    })
    .catch(function(err){
        console.log(err);
    })
}

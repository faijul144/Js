// Initialise Github Class

const git = new Github;

// Searh Input Field
const searhUser = document.getElementById('searchUser');

// Input Event

searhUser.addEventListener('keyup',(e) => {
// Get Text
const userInput = e.target.value;

if(userInput !== ''){
    // Make http call
    git.getUser(userInput)
    .then(data => {
        if(data.pro.message === 'Not Found'){
            // show alert
            // console.log('Not Found')
        }
        else{
            // show profile
            // console.log(data);
        }
    })
}else{
    //clear profile
}

})

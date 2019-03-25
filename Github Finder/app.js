// Initialise Github
const git = new Github;

// Initialise UI
const ui = new UI;

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
            ui.showAlert('User Not Found');
        }
        else{
            // show profile
            ui.showPro(data.pro)
            ui.showRepo(data.repo)
        }
    })
}else{
    //clear profile
    ui.clearPro();
}

})

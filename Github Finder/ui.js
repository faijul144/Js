class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showPro(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src='${user.avatar_url}' class="img-fluid mb-2" alt="${user.login}">
                        <a href="${user.html_url}" target="_blank" class=" btn btn-info btn-block">View Profile</a>

                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span>
                        <span class="badge badge-success">Followers : ${user.public_followers}</span>
                        <span class="badge badge-info">Following : ${user.public_following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company : ${user.company}</li>
                            <li class="list-group-item">Blog : ${user.blog}</li>
                            <li class="list-group-item">Location : ${user.location}</li>
                            <li class="list-group-item">Member Since : ${user.created_at}</li>
                        </ul>
                    </div>
                    <div class="col-md-12">
                    <h4 class="page-heading mb-3">Latest Repo</h4>
                    </div>
                    <div class="col-md-12">
                    <div id="repo"></div>
                    </div>

                </div>
            </div>
        `;
    }

    // Show User Repo
    showRepo(repos){
        let output = '';
        repos.forEach((repo) =>{
            output += `
                <div class="card card-body mb-2">
                    <div class = "row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                        <span class="badge badge-primary">Stars : ${repo.stargazers_cound}</span>
                        <span class="badge badge-secondary">Watchers : ${repo.watchers_count}</span>
                        <span class="badge badge-success">Forks : ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;
        })

        document.getElementById('repo').innerHTML = output;
    }

// Show Alert Message
    showAlert(message){
        const div = document.createElement('div');

        const container = document.querySelector('.searchContainer');

        const search = document.querySelector('.search');

        div.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade' ,'show');

        div.innerHTML = `
        <strong>${message}</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
        `;
        container.insertBefore(div,search);

        setTimeout(()=>{
            this.clearAlert();
        },3000)

    }
// Clear Alert
    clearAlert(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }

    clearPro(){
        this.profile.innerHTML = '';
    }
}
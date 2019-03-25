class Github{
    constructor(){
        this.client_id = "31974e9fc4ec90b9ab2e";
        this.client_secret = "7b3edaf19a4c0bf923222bfefc74d23314e268dd";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }
async getUser(user){
    const proRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoRes = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const pro = await proRes.json();
    const repo = await repoRes.json();

    return{
        pro,
        repo
    }
}

}

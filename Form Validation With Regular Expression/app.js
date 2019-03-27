class Validation{
    name(name,value){
        const re = /^[a-zA-z]{2,10}$/;
        if(!re.test(value)){
            name.classList.add('is-invalid');
        }else{
            name.classList.remove('is-invalid');
        }
    }

    zip(zip,value){
        const re = /^[0-9]{5}(-[0-9]{4})?$/;
        if(!re.test(value)){
            zip.classList.add('is-invalid');
        }else{
            zip.classList.remove('is-invalid');
        }
    }

    email(mail,value){
        const re = /^([a-zA-Z0-9_\.\-\~]+)@([a-zA-Z0-9_\.\-]+).([a-zA-Z]{2,6})$/;
        if(!re.test(value)){
            mail.classList.add('is-invalid');
        }else{
            mail.classList.remove('is-invalid');
        }
    }

    phone(phone,value){
        const re = /^\+?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
        if(!re.test(value)){
            phone.classList.add('is-invalid');
        }else{
            phone.classList.remove('is-invalid');
        }
    }


};

const valid = new Validation();

document.getElementById('name').addEventListener('blur',(e) =>{
    valid.name(e.target,e.target.value);
});

document.getElementById('zip').addEventListener('blur',(e) =>{
    valid.zip(e.target,e.target.value);
});

document.getElementById('email').addEventListener('blur',(e) =>{
    valid.email(e.target,e.target.value);
});

document.getElementById('phone').addEventListener('blur',(e) =>{
    valid.phone(e.target,e.target.value);
});

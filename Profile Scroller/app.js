const data = [
    {
        name: 'John Doe',
        age: '18',
        gender: 'male',
        lookingfor: 'female',
        location: 'Whitehouse',
        image: 'https://randomuser.me/api/portraits/men/65.jpg'
    },
    {
        name: 'Jane Doe',
        age: '18',
        gender: 'female',
        lookingfor: 'male',
        location: 'Whitehouse',
        image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
        name: 'John Doe Sr',
        age: '58',
        gender: 'male',
        lookingfor: 'female',
        location: 'Whitehouse',
        image: 'https://randomuser.me/api/portraits/men/85.jpg'
    }
];

const profiles = proIterator(data)

// Call To Show First Profile
nextPro();

// Event Listener For Displaying Data

document.getElementById('next').addEventListener('click',nextPro);

// Next Profile Display Function

function nextPro(){
    const currentPro = profiles.next().value;


if(currentPro !== undefined){
    document.getElementById('profileInfo').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentPro.name}</li>
            <li class="list-group-item">Name: ${currentPro.age}</li>
            <li class="list-group-item">Name: ${currentPro.gender}</li>
            <li class="list-group-item">Name: ${currentPro.lookingfor}</li>
            <li class="list-group-item">Name: ${currentPro.location}</li>
        </ul>
    `;

    document.getElementById('profileImage').innerHTML = `
        <img src = '${currentPro.image}' class='img-fluid'>
    `;
    }
    else{
        window.location.reload();
    }
}


//Profile Iteratior

function proIterator(profiles) {
    let nextPro = 0;
    return {
        next: () => {
            // We Use Ternary Oparator inster of if else exm: 'condition ? do_this : do_that'
            return nextPro < profiles.length ? { value: profiles[nextPro++], done: false } : { done: true }
        }
    }
}
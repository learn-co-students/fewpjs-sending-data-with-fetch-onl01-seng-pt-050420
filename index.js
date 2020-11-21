// Add your code here

function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(function(rsp) {
            return rsp.json();
        })

        .then (function(obj){
            addIdToPage(obj) 
        })
    
        .catch (function(error){
            addError(error) 
        })
}


function addIdToPage(obj){
    const div = document.getElementById('ids');
    const li = document.createElement('li');
    let id = obj.id;

    li.innerHTML = id;
    div.appendChild(li);
}

function addError(error){
    const div = document.getElementById('errors');
    const p = document.createElement('p');
    let msg = error.message;

    p.innerHTML = msg;
    div.appendChild(p);
}
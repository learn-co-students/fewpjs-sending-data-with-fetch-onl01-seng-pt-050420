// Add your code here
function submitData(userName, userEmail){
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json' 
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(response => response.json())
    .then(data => addMessage(data.id))
    .catch(error => addMessage(error));
};

function addMessage(data){
    let container = document.createElement('div');
    container.innerText = data;
    document.body.appendChild(container);
}

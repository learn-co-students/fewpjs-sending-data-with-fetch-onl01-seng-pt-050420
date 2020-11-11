function submitData(name, email) {
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }

    return fetch("http://localhost:3000/users", configObj)
        .then(resp => resp.json())
        .then(data => {
            let element = document.createElement('h1')
            element.innerHTML = data.id
            document.body.appendChild(element)
        })
        .catch(err => {
            let element = document.createElement('h1')
            element.innerHTML = err.message
            document.body.appendChild(element)
        })
}

// Add your code here
function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            console.log(object);
            appendText(object.id);
        })
        .catch(function(error) {
            alert(error.message);
            appendText(error.message);
        })
    ;

    function appendText(text) {
        let textElement = document.createElement("P");
        let body = document.getElementsByTagName("body")[0];
        textElement.textContent = text;
        console.log(textElement);
        body.appendChild(textElement);
    }
}
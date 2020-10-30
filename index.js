// Add your code here

function submitData(name, email) {
    let submitObj = {
        name: name,
        email: email
    }

    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(submitObj)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(res => res.json())
        .then(res => addIdToView(res))
        .catch(error => addErrorToView(error))
    
    function addIdToView(result) {
        document.querySelector("body").append(result.id);
    };

    function addErrorToView(error) {
        document.querySelector("body").append(error.message);
    };
  };
   
   
  
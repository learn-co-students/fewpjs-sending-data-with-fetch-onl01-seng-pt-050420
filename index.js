
function submitData(name, email){
let formData = {
    name: name,
    email: email
};

let configObject = {

    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
};

return fetch("http://localhost:3000/users", configObject)
.then(function(response) {
    return response.json();
  })
  .then(function(object) {
    //   let div = document.getElementById("users")
      let h1 = document.createElement("h1")
      h1.innerHTML =  object.id
      document.body.appendChild(h1)
    console.log(object);
  })
  .catch(function(error){
    let h3 = document.createElement('h3');
    h3.innerHTML = error.message;
    document.body.appendChild(h3);
      console.log(error.message)

  })


  
}

submitData()
 
// Add your code here
function submitData(name, email){
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
   
  fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      console.log(object);
      let body = document.querySelector('body');
      let p = document.createElement('p'); 
      p.innerText = object.id;   
    })
    .catch(function(error) {
      let body = document.querySelector('body');
      let p = document.createElement('p');
      p.innerText = error.message;
      console.log(error.message);
    });
}
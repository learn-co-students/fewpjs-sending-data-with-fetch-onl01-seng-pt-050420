// Add your code here
const obj = {
    name: 'Steve',
    email: 'steve@steve.com',
}
function submitData() {
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(obj)
      };
    return fetch('http://localhost:3000/users', configObj).then(function(response) {
        return response.json();
      })
      .then( function(obj) {
        document.body.innerHTML = obj.id
      } )
      .catch(function(err) {
        document.body.innerHTML = err.message
      } )
}
// function fetchDogs() {
//     return fetch('https://dog.ceo/api/breeds/image/random/4')
//     .then(function(response) {
//       return response.json();
//     }).then(function(json) {
//       renderDogImages(json.message);
//     });
//   }
  
//   function renderDogImages(images) {
//     const dogImageContainer = document.getElementById('dog-image-container')
//     images.forEach(image => {
//       const img = document.createElement('img')
//       img.src = image
//       dogImageContainer.appendChild(img)
//     })
//   }
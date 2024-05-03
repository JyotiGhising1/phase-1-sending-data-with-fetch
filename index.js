// Add your code here
function submitData(name, email){
   return fetch('http://localhost:3000/users', {
        method : 'POST',
        headers : {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
        name : name,
        email: email
        }),
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Error'+response.status);
        }
        else{
            return response.json();
        }
    })
    .then(data => {
        const newID = data.id;
        const idNode = document.createTextNode(newID);
        document.body.appendChild(idNode);
      })
    .catch(error => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = error.message;
        document.body.appendChild(errorMessage);
    });
};

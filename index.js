// Add your code here
const submitData = (name, email) =>{
    return fetch('http://localhost:3000/users', 
    {
        method: 'POST', 
        headers:{
            'Content-Type':'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            'name':name,
            'email':email
        })
    }).then(res => res.json())
    .then(obj => {
        document.body.append(document.createElement('p').textContent = obj.id)
    }).catch(function(message){
        document.body.append(document.createElement('p').textContent = message)

    })

}

submitData("John", "john@gmail.com")
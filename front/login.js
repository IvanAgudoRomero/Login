var iuser = document.getElementById("usr").value
var ipassword = document.getElementById("pass").value

var ierror = document.getElementById("errormsg")

function login(){
    iuser = document.getElementById("usr").value
    ipassword = document.getElementById("pass").value
    fetch("http://localhost:8080/login", {
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"            
        },
        method: 'POST',
        body: JSON.stringify({
            user: iuser,
            password: ipassword
        })        
    })
    .then(response => response.text())
    .then(result => notify(result)) 
}



function register(){
    iuser = document.getElementById("usr").value
    ipassword = document.getElementById("pass").value  
    fetch("http://localhost:8080/register",{
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            user: iuser,
            password: ipassword
        })
    })
    .then(response => response.text())
    .then(result => notify(result)) 
    
}

function notify(msg){
    document.getElementById("errormsg").innerHTML = msg
}

function todos(){
    fetch("http://localhost:8080/todos",{
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "GET",
        body: JSON.stringify({})        
    })
    .then(response => response.text())
    .then(result => console.log(result))     
}

function clean(){
    iuser.value = "",
    ipassword.value = ""
    notify("")
}
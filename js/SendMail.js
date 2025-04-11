console.log("SendMail.js loaded");

document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if(!name){
        alert("Please enter a valid name!");
        return;
    }

    if(!email){
        alert("Please enter a valid email address!");
        return;
    }

    if(!subject){
        alert("Please enter a valid subject!");
        return;
    }
    
    if(!message){
        if(!subject){
            alert("Please enter a valid message!");
            return;
        }
    }

    alert("Message sent successfully!");
});
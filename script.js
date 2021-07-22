AOS.init();


let send = document.getElementById('send');
let names = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let notifs = document.getElementById('notification');
let cancel = document.getElementById('cancel');
let head = document.getElementById('alert-head');
let alerts = document.getElementsByClassName('alert');
let nameLabel = document.getElementById('name-label')
let emailLabel = document.getElementById('email-label')
let messageLabel = document.getElementById('message-label')

cancel.addEventListener('click', hide = () => {
    notifs.style.display = 'none';
})

let sendR = send.addEventListener('click', validate = () => {
    if(names.value == ""){
        nameLabel.innerText = "Please enter your name";
        names.style.borderColor = "red";
    }else{
                nameLabel.innerText = "";
                names.style.borderColor = "#d6d9df";
            }
            
        
        
    

    if(message.value == ''){
        messageLabel.innerText = "Please enter some message here";
        message.style.borderColor = "red";
    }else if(message.value){
        messageLabel.innerText = "";
        message.style.borderColor = "#d6d9df";
    }
    if(email.value == ""){
        emailLabel.innerText = "Please enter your email";
        email.style.borderColor = "red";
    }else if(email.value){
        let eval = email.value;
        for (let j = 0; j <= 1; j++) {
            if(eval.includes('@') == false){
                emailLabel.innerText = "Please enter a valid email";
                email.style.borderColor = "red";
            }else{

                emailLabel.innerText = "";
                email.style.borderColor = "#d6d9df";
                notifs.style.display = 'flex';
                setTimeout(() => {
                    notifs.style.display = "none";
                }, 5000);               
                names.value = "";
                email.value = "";
                message.value = "";
            }
            
        }
    }

    
})


// console.log(sendR)

// if(sendR){
//     emailLabel.innerText = "";
//     nameLabel.innerText = "";
//     messageLabel.innerText = "";
//     email.style.borderColor = "#d6d9df";
//     names.style.borderColor = "#d6d9df";
//     message.style.borderColor = "#d6d9df";
//     names.value = "";
//     email.value = "";
//     message.value = "";
// }
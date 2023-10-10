const EmailInput=document.getElementById("email");
const AgeInput=document.getElementById("number");
const NameInput=document.getElementById("text");
const PasswordInput=document.getElementById("password");
const submitButton=document.getElementById("submit");



submitButton.addEventListener("mouseover",(button)=>{
    let Email=EmailInput.value;
    let password=PasswordInput.value;

    
    if (!Email || !password){
        button.target.classList.toggle("move");
        submitButton.style.background="red"

    } else{
        button.target.classList.toggle("stop");
        submitButton.style.background="green"
    }


   
})

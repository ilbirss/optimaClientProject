const email= document.getElementById("email");
const message = document.getElementById("mess");
const span = document.getElementsByTagName("span")

const $modal = document.getElementById("modal");
const $btnModal = document.getElementById("modal-btn");
const $bodyView = document.getElementById("body")
const $submit = document.getElementById("submit")

$btnModal.addEventListener("click", openModal)

function openModal(){
  $modal.classList.add("opened");
  $bodyView.style.overflow="hidden";
}

function closeModal(){
  $modal.classList.remove("opened")
  $bodyView.style.overflow="scroll"
}

function ValidateEmail()
{
  const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(mailformat.test(email.value))
  {
    alert("Valid email address!");
    return true;
  }
  else
  {
    alert("You have entered an invalid email address!");
    return false;
  }
}
/*email.onkeydown = function (){
  const regex =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(regex.test(email.value)){
    span[0].innerText= "your email is valid";
    span[0].style.color="black"
  } else{
    span[0].innerText= "your email is Invalid";
    span[0].style.color="red"
  }
}*/


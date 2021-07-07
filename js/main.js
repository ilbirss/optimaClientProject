const $email = document.getElementById("email");
const $title = document.getElementById("subject");
const $message = document.getElementById("text");


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

  if(mailformat.test($email.value) && $title.value && $message.value)
  {
    sendEmail()
    $modal.style.display="none"
    $bodyView.style.overflow="scroll"
    return true;
  }
  else
  {
    alert("You have entered an invalid email address!");
    return false;
  }
}


const sendEmail = () => {
  const requestOptions = {
    method: 'POST',
    /*mode: 'no-cors',*/
    body: JSON.stringify({email:$email.value, subject:$title.value, text:$message.value}),
    headers: { 'Content-Type': 'application/json; charset=UTF-8'},
  };
  fetch(`http://localhost:3000/send-mail`, requestOptions)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error))
}


/*const sendEmail = () => {
  return fetch(`https://secret-cove-76589.herokuapp.com/send-mail`, {
    method: 'POST',
    body: JSON.stringify(info),
    headers: { 'Content-Type': 'application/json; charset=UTF-8'}
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(err => console.log(err))
}*/


/*
då behöver man sätta  info i body: JSON.stringify
const info= {
  email : document.getElementById("email").value,
  subject: document.getElementById("subject").value,
  text: document.getElementById("text").value
};
*/






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


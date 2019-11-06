
let contactArr = [];

let name = document.getElementById('name').value;

let email = document.getElementById('email').value;

let textarea = document.getElementById('textarea').value;


let submitBtn = document.querySelector(".btn");

submitBtn.addEventListener('click', () =>{
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('textarea').value = "";
 
  var visibility= document.querySelector(".success");

  visibility.classList.remove("remove-visibility");


  setTimeout( () => {
    visibility.classList.add("remove-visibility");
    }, 3000);
});





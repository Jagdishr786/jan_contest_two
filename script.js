let fName = document.getElementById("fname");
let profession = document.getElementById("profession");
let age = document.getElementById("age");
let add_user = document.getElementById("user");

let form = document.getElementById("form")

let display = document.getElementsByClassName("display")
 add_user.addEventListener("click",addfunc());

 form.addEventListener('adduser', (e) => {
    if(fName.value == '' || profession.value == '' || age.value == ''){
        alert("Error : Please Make sure All the fields are filled before adding in an employee !")
    }
 })



function addfunc(){
    
        let arr=[{Name:fName.value,Profession:profession.value,Age:age.value}]
}



function MyFunction(){
    var a=20;
    document.getElementById("demo").innerHTML=a+a
}
function validate(e){
e.preventDefault();
const email=document.getElementById("email").value 
const password=document.getElementById("password").value 
const age=document.getElementById("age").value 
const msgbox=document.getElementById("msgbox")
let message="";
if (email===""){
message="Please enter an email"
msgbox.style.color="red"
}
else if (password===""){
    message="The password should be atleast of 8 numbers"
    msgbox.style.color="red"
} 
else if (age === '') {

message = 'Age must be between 12 and 50.';

msgbox.style.color = 'red';

}

else {

message = 'Login successful!';

msgbox.style.color = 'green';

}

msgbox.innerText = message;

}

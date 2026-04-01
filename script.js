let MyName = "ZenFlex Studio"; 
console.log(MyName); 
console.log(`Welcome to ${MyName} !`);
let MyAge = "2"; 
console.log(MyAge);
let IsStudio = true;
console.log(IsStudio); 
let Owner = true;
console.log(Owner);  
window.alert(`Welcome to ${MyName} !\nRead the information below.`);
if (IsStudio) {
    console.log("this is a studio")
} else if (Owner) {
    console.log("you are the owner")
} else {
    console.log("this is not a studio and you are not the owner")
} 
let UserName = window.prompt("What is your name?"); 
window.prompt("What is your name?");
window.alert(`Hello, ${UserName}! Welcome to ${MyName}.`);
let input;
document.getElementById("ButtonID").onclick = function() {
    input = document.getElementById("inputID").value;
    window.alert(`Hello, ${input}! Welcome to ${MyName}.`);
}

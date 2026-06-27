document.addEventListener("submit",async function(e){

if(e.target.id!=="order-form") return;

e.preventDefault();

document.getElementById("order-status").innerHTML="Sending...";

const form=new FormData(e.target);

const data=Object.fromEntries(form.entries());

console.log(data);

/*
Google Apps Script
will go here
*/

document.getElementById("order-status").innerHTML="✅ Order Submitted Successfully!";

});
const email=document.getElementById('email');
const button=document.getElementById('btn');
const name=document.getElementById('name');
const password=document.getElementById('password');

btn.addEventListener("click",(e)=>{
  e.preventDefault();
    console.log("Name:", name.value);
  console.log("Email:", email.value);
  console.log("Password:", password.value);
   students.innerHTML = `
    <h2>Student Details</h2>
    <p>Name: ${name.value}</p>
    <p>Email: ${email.value}</p>
    <p>Password: ${password.value}</p>
  `;

})
var userName="Samantha";//old way
userName="Alvin";
let age=99;//defining the var age
age=98;
age=97;
age=96;
const taxes=11;//it does not change the value


console.log(userName);
console.log(age);
console.log(taxes);

//document.write("<p> Name:" + userName + "</p><p>Age: " + age + "</p><p>Taxes: " + taxes + "</p>");

document.write(`
<p style="color:blue">Name: ${userName} </p>
<p>Age: ${age}</p>
<p>Taxes: ${taxes}</p>
`);

// ------ Ex 2 ----- 
let clientName="Daravy";
clientName=true;
let clientEmail="daravy@gmail.com";
let clientSalary=1000;
let annualSalary = clientSalary*12;

document.write(`
<p>Name: ${clientName}</p>
<p>Email: ${clientEmail}</p>
<p>Salary: ${annualSalary}</p>
`);

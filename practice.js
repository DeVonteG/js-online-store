// declaration of variables//
let userName=prompt("Enter Your Name");
let userEmail=prompt("Enter Your Email");
let monthlySalary=Number(prompt("Enter Your Monthly Salary"));

//calculate yearly salary
let yearlySalary= monthlySalary*12;

//display on html the information
document.write(`
    <div class="container">
        <p>Name: ${userName}</p>
        <p>Email: ${userEmail}</p>
        <p>Salary: ${yearlySalary}</p>
    </div>
`);
for(let i=0;i<=10;i++){ //this method is practical for developers
    console.log(i);
}
for(let i=0;i<=10;i++){
    let multi= i*2;
   
}
////// console.log(`${i}*2 = ${multi}`);
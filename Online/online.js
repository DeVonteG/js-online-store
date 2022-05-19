// declaration of variables//
let productName = prompt("Enter Requested Product Name");
let productPrice = Number(prompt("Enter the requested price"))
let productQuantity = Number(prompt("Enter Quantity of Item"));

let subTotal = productPrice * productQuantity
let tax = .04 * subTotal
let total = subTotal + tax

//if("this" == "that"){
    //console.log("true")
//}else{
   // console.log("false")
//}

document.write(`
    <p> Product:${productName}</p>
    <p> Total: ${productQuantity}</p>

    <p> Total: ${tax}</p>
    <p> Total: ${total}</p>
`)



//  array functions to look into:

// .includes or .findIndex 

//calculate quantity price//
//const products=[computer, phone, bedsheets, videogames];
//const prices=[1000, 500, 80, 60];

/////products//////
//Computer= 1000
//Phone= 500
//Bed Sheets = $80
//Video Games= 60
////////////

/////////////////////////////


//////////////////////////////////
///Total= quantity * constant///

//display info on HTML//
//document.write(`
//<div class="container">
//<p>Product: ${productName}</p>
//<p>Quantity: ${productQuantity}</p>
//</div>
//`);

// document.getElementById("cashout").style.display= "none";
// document.getElementById('Transaction-history').style.display = "none";
// document.getElementById("sendMoney").style.display = "none";

// document.getElementById("add-money-box").addEventListener("click",
//     function(){
//         handelToggle("addMoney","block");
//         handelToggle("cashout","none");

//         handelToggle ("Transaction-history","none");
//         // document.getElementById("addMoney").style.display="block";
//         // document.getElementById("cashout").style.display="none";

// })
// document.getElementById("cashout-box").addEventListener("click",
//     function(){
//         handelToggle("addMoney","none");
//         handelToggle("cashout","block");
//         handelToggle ("Transaction-history","none");
// });



// document.getElementById("send-money-box").addEventListener("click", function(){
//     handelToggle("addMoney", "none");
//     handelToggle("cashout", "none");
//     handelToggle("Transaction-history", "none");
//     handelToggle("sendMoney", "block");
// });

///....................................................................................................................

// // সব section শুরুতে hidden
// document.getElementById("cashout").style.display = "none";
// document.getElementById("Transaction-history").style.display = "none";
// document.getElementById("sendMoney").style.display = "none";
// document.getElementById("payBill").style.display = "none";
// document.getElementById("transferMoney").style.display = "none";

// // Add Money click
// document.getElementById("add-money-box").addEventListener("click", function(){
//     handelToggle("addMoney","block");
//     handelToggle("cashout","none");
//     handelToggle("Transaction-history","none");
//     handelToggle("sendMoney","none");
//     handelToggle("payBill","none");
//     handelToggle("transferMoney","none");
// });

// // Cash Out click
// document.getElementById("cashout-box").addEventListener("click", function(){
//     handelToggle("addMoney","none");
//     handelToggle("cashout","block");
//     handelToggle("Transaction-history","none");
//     handelToggle("sendMoney","none");
//     handelToggle("payBill","none");
//     handelToggle("transferMoney","none");
// });

// // Transaction History click
// document.getElementById("transaction-box").addEventListener("click", function(event){
//     event.preventDefault();
//     handelToggle("addMoney","none");
//     handelToggle("cashout","none");
//     handelToggle("Transaction-history","block");
//     handelToggle("sendMoney","none");
//     handelToggle("payBill","none");
//     handelToggle("transferMoney","none");
// });

// // Send Money click
// document.getElementById("send-money-box").addEventListener("click", function(){
//     handelToggle("addMoney","none");
//     handelToggle("cashout","none");
//     handelToggle("Transaction-history","none");
//     handelToggle("sendMoney","block");
//     handelToggle("payBill","none");
//     handelToggle("transferMoney","none");
// });

// // Pay Bill click
// document.getElementById("pay-bill-box").addEventListener("click", function(){
//     handelToggle("addMoney","none");
//     handelToggle("cashout","none");
//     handelToggle("Transaction-history","none");
//     handelToggle("sendMoney","none");
//     handelToggle("payBill","block");
//     handelToggle("transferMoney","none");
// });

// // Transfer Money click
// document.getElementById("transfer-money-box").addEventListener("click", function(){
//     handelToggle("addMoney","none");
//     handelToggle("cashout","none");
//     handelToggle("Transaction-history","none");
//     handelToggle("sendMoney","none");
//     handelToggle("payBill","none");
//     handelToggle("transferMoney","block");
// });


//..................................................................................................


// // Initially hide all sections except Add Money (optional)
// document.getElementById("addMoney").style.display = "none";
// document.getElementById("cashout").style.display = "none";
// document.getElementById("sendMoney").style.display = "none";
// document.getElementById("payBill").style.display = "none";
// document.getElementById("transferMoney").style.display = "none";
// document.getElementById("Transaction-history").style.display = "none";

// // Utility function to toggle display
// function handelToggle(id, status){
//     document.getElementById(id).style.display = status;
// }

// // Add Money Box
// document.getElementById("add-money-box").addEventListener("click", function(){
//     handelToggle("addMoney", "block");
//     handelToggle("cashout", "none");
//     handelToggle("sendMoney", "none");
//     handelToggle("payBill", "none");
//     handelToggle("transferMoney", "none");
//     handelToggle("Transaction-history", "none");
// });

// // Cash Out Box
// document.getElementById("cashout-box").addEventListener("click", function(){
//     handelToggle("addMoney", "none");
//     handelToggle("cashout", "block");
//     handelToggle("sendMoney", "none");
//     handelToggle("payBill", "none");
//     handelToggle("transferMoney", "none");
//     handelToggle("Transaction-history", "none");
// });

// // Send Money Box
// document.getElementById("sendMoney-box").addEventListener("click", function(){
//     handelToggle("addMoney", "none");
//     handelToggle("cashout", "none");
//     handelToggle("sendMoney", "block");
//     handelToggle("payBill", "none");
//     handelToggle("transferMoney", "none");
//     handelToggle("Transaction-history", "none");
// });

// // Pay Bill Box
// document.getElementById("paybill-box").addEventListener("click", function(){
//     handelToggle("addMoney", "none");
//     handelToggle("cashout", "none");
//     handelToggle("sendMoney", "none");
//     handelToggle("payBill", "block");
//     handelToggle("transferMoney", "none");
//     handelToggle("Transaction-history", "none");
// });

// // Transfer Money Box
// document.getElementById("transfermoney-box").addEventListener("click", function(){
//     handelToggle("addMoney", "none");
//     handelToggle("cashout", "none");
//     handelToggle("sendMoney", "none");
//     handelToggle("payBill", "none");
//     handelToggle("transferMoney", "block");
//     handelToggle("Transaction-history", "none");
// });

// // Transaction History Box
// document.getElementById("transaction-box").addEventListener("click", function(){
//     handelToggle("addMoney", "none");
//     handelToggle("cashout", "none");
//     handelToggle("sendMoney", "none");
//     handelToggle("payBill", "none");
//     handelToggle("transferMoney", "none");
//     handelToggle("Transaction-history", "block");
// });

//.........................................................................................



// Initially hide all sections
document.getElementById("addMoney").style.display = "none";
document.getElementById("cashout").style.display = "none";
document.getElementById("sendMoney").style.display = "none";
document.getElementById("payBill").style.display = "none";
document.getElementById("transferMoney").style.display = "none";
document.getElementById("Transaction-history").style.display = "none";

// Utility function
function handelToggle(id, status){
    document.getElementById(id).style.display = status;
}

// Add Money Box
document.getElementById("add-money-box").addEventListener("click", function(){
    handelToggle("addMoney", "block");
    handelToggle("cashout", "none");
    handelToggle("sendMoney", "none");
    handelToggle("payBill", "none");
    handelToggle("transferMoney", "none");
    handelToggle("Transaction-history", "none");
});

// Cash Out Box
document.getElementById("cashout-box").addEventListener("click", function(){
    handelToggle("addMoney", "none");
    handelToggle("cashout", "block");
    handelToggle("sendMoney", "none");
    handelToggle("payBill", "none");
    handelToggle("transferMoney", "none");
    handelToggle("Transaction-history", "none");
});

// Send Money Box
document.getElementById("send-money-box").addEventListener("click", function(){
    handelToggle("addMoney", "none");
    handelToggle("cashout", "none");
    handelToggle("sendMoney", "block");
    handelToggle("payBill", "none");
    handelToggle("transferMoney", "none");
    handelToggle("Transaction-history", "none");
});

// Pay Bill Box
document.getElementById("pay-bill-box").addEventListener("click", function(){
    handelToggle("addMoney", "none");
    handelToggle("cashout", "none");
    handelToggle("sendMoney", "none");
    handelToggle("payBill", "block");
    handelToggle("transferMoney", "none");
    handelToggle("Transaction-history", "none");
});

// Transfer Money Box
document.getElementById("transfer-money-box").addEventListener("click", function(){
    handelToggle("addMoney", "none");
    handelToggle("cashout", "none");
    handelToggle("sendMoney", "none");
    handelToggle("payBill", "none");
    handelToggle("transferMoney", "block");
    handelToggle("Transaction-history", "none");
});

// Transaction History Box
document.getElementById("transaction-box").addEventListener("click", function(){
    handelToggle("addMoney", "none");
    handelToggle("cashout", "none");
    handelToggle("sendMoney", "none");
    handelToggle("payBill", "none");
    handelToggle("transferMoney", "none");
    handelToggle("Transaction-history", "block");
});


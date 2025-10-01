

   document.getElementById("cashout").style.display= "none";

document.getElementById('add-money-box').addEventListener("click",function(){
    document.getElementById("cashout").style.display= "none";
     document.getElementById("addMoney").style.display= "block";
});


document.getElementById('cashout-box').addEventListener("click",function(){
    document.getElementById("cashout").style.display= "block";
     document.getElementById("addMoney").style.display= "none";
});






document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = document.getElementById('amount-number').value;
        const convertedAmount = parseFloat(amount);
        const pin = document.getElementById('pin-number').value;
        const convertedPin = parseInt(pin);
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        const accountNumber = document.getElementById('account-number').value;

        if (amount) {
            if (accountNumber.length === 11) {


                if (convertedPin == 1234) {
                    const sum = convertedMainBalance + convertedAmount;
                    document.getElementById('main-balance').innerText = sum;

                }
                else {
                    alert('Enter Valid Pin')
                }
            }
            else {
                alert('Invalid Account Number')
            }
        }
        else {
            alert('Enter Your Amount')
        }
    });

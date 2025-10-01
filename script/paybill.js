
document.getElementById("btn-pay-bill").addEventListener("click", function(event){
    event.preventDefault();

    const biller = document.getElementById("bill-biller").value;
    const account = document.getElementById("bill-account-number").value;
    const pin = getInputValueById("bill-pin");
    const amount = getInputValueById("bill-amount");
    const mainBalance = getInnerTextById("main-balance");

    // Validation
    if(!biller){
        alert("Select a Biller");
        return;
    }
    if(account.length !== 11){
        alert("Invalid Account Number");
        return;
    }
    if(pin !== 1234){
        alert("Invalid PIN");
        return;
    }
    if(isNaN(amount) || amount <= 0){
        alert("Enter a valid amount");
        return;
    }
    if(amount > mainBalance){
        alert("Insufficient Balance");
        return;
    }

    // Update Balance
    const newBalance = mainBalance - amount;
    setInnerTextByIdAndValue("main-balance", newBalance);

    // Add to Transaction History
    const transactionContainer = document.getElementById("transaction-container");
    const div = document.createElement("div");
    div.classList.add("bg-gray-300","border","border-gray-200","rounded-xl","shadow-md","p-4","mb-3","transition","hover:shadow-lg");

    div.innerHTML = `
        <div class="bg-white border border-gray-200 rounded-xl shadow-md p-4 mb-3 transition hover:shadow-lg">
            <div class="flex items-center justify-between">
                <h1 class="text-lg font-bold text-orange-700">Pay ${biller} Bill</h1>
                <span class="text-sm text-gray-500">${new Date().toLocaleString()}</span>
            </div>
            <p class="text-gray-700 mt-1">Account: <span class="font-mono">${account}</span></p>
            <p class="text-orange-600 font-semibold mt-1">- ${amount} ৳</p>
            <p class="text-gray-600 text-sm mt-1">Remaining Balance: <span class="font-bold">${newBalance} ৳</span></p>
        </div>
    `;
    transactionContainer.appendChild(div);

    // Clear inputs
    document.getElementById("bill-biller").value = "";
    document.getElementById("bill-account-number").value = "";
    document.getElementById("bill-pin").value = "";
    document.getElementById("bill-amount").value = "";
});

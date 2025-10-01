
document.getElementById("btn-transfer-money").addEventListener("click", function(event){
    event.preventDefault();

    const bank = document.getElementById("transfer-bank").value;
    const recipient = document.getElementById("transfer-recipient-name").value;
    const account = document.getElementById("transfer-account-number").value;
    const pin = getInputValueById("transfer-pin");
    const amount = getInputValueById("transfer-amount");
    const note = document.getElementById("transfer-note").value || "-";
    const mainBalance = getInnerTextById("main-balance");

    // Validation
    if(!bank){
        alert("Select Bank");
        return;
    }
    if(!recipient){
        alert("Enter Recipient Name");
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
    if(amount < 10){
        alert("Minimum transfer amount is 10 ৳");
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
                <h1 class="text-lg font-bold text-purple-700">Transfer to ${recipient}</h1>
                <span class="text-sm text-gray-500">${new Date().toLocaleString()}</span>
            </div>
            <p class="text-gray-700 mt-1">Bank: <span class="font-mono">${bank}</span></p>
            <p class="text-gray-700 mt-1">Account: <span class="font-mono">${account}</span></p>
            <p class="text-purple-600 font-semibold mt-1">- ${amount} ৳</p>
            <p class="text-gray-700 mt-1">Note: <span class="font-mono">${note}</span></p>
            <p class="text-gray-600 text-sm mt-1">Remaining Balance: <span class="font-bold">${newBalance} ৳</span></p>
        </div>
    `;
    transactionContainer.appendChild(div);

    // Clear inputs
    document.getElementById("transfer-bank").value = "";
    document.getElementById("transfer-recipient-name").value = "";
    document.getElementById("transfer-account-number").value = "";
    document.getElementById("transfer-pin").value = "";
    document.getElementById("transfer-amount").value = "";
    document.getElementById("transfer-note").value = "";
});

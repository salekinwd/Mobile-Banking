
document.getElementById("btn-send-money").addEventListener("click", function(event){
    event.preventDefault();

    const account = document.getElementById("send-account-number").value;
    const pin = getInputValueById("send-pin");
    const amount = getInputValueById("send-amount");
    const mainBalance = getInnerTextById("main-balance");

    // Validation
    if(account.length !== 11){
        alert("Invalid Recipient Account Number");
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
                <h1 class="text-lg font-bold text-purple-700">Send Money</h1>
                <span class="text-sm text-gray-500">${new Date().toLocaleString()}</span>
            </div>
            <p class="text-gray-700 mt-1">Recipient Account: <span class="font-mono">${account}</span></p>
            <p class="text-purple-600 font-semibold mt-1">- ${amount} ৳</p>
            <p class="text-gray-600 text-sm mt-1">Remaining Balance: <span class="font-bold">${newBalance} ৳</span></p>
        </div>
    `;
    transactionContainer.appendChild(div);

    // Clear inputs
    document.getElementById("send-account-number").value = "";
    document.getElementById("send-pin").value = "";
    document.getElementById("send-amount").value = "";
});



document.getElementById("btn-add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const amount = getInputValueById("amount-number");
        const pin = getInputValueById("pin-number");
        const account = document.getElementById("account-number").value;
        const mainBalance = getInnerTextById("main-balance");
        const selectedBank = document.getElementById("all-bank").value;

        // Validation: Positive and Integer
        if (isNaN(amount) || amount <= 0) {
            alert("Please! Enter a positive number");
            return;
        }

        if (!Number.isInteger(amount)) {
            alert("Please! Enter an integer amount");
            return;
        }

        // Account validation
        if (account.length === 11) {
            if (pin === 1234) {
                const sum = mainBalance + amount;
                setInnerTextByIdAndValue("main-balance", sum);

                const transactionContainer = document.getElementById("transaction-container");
                const div = document.createElement("div");
                div.classList.add(
                    "bg-gray-300", "border", "border-gray-200", "rounded-xl",
                    "shadow-md", "p-4", "mb-3", "transition", "hover:shadow-lg"
                );

                div.innerHTML = `
                    <div class="bg-white border border-gray-200 rounded-xl shadow-md p-4 mb-3 transition hover:shadow-lg">
                        <div class="flex items-center justify-between">
                            <h1 class="text-lg font-bold text-blue-700">${selectedBank.toUpperCase()}</h1>
                            <span class="text-sm text-gray-500">${new Date().toLocaleString()}</span>
                        </div>
                        <p class="text-gray-700 mt-1">Account: <span class="font-mono">${account}</span></p>
                        <p class="text-green-700 font-semibold mt-1">+ ${amount} ৳</p>
                        <p class="text-gray-600 text-sm mt-1">New Balance: <span class="font-bold">${sum} ৳</span></p>
                    </div>
                `;

                transactionContainer.appendChild(div);
            } else {
                alert("Invalid Pin Number");
            }
        } else {
            alert("Invalid Account Number");
        }
    });

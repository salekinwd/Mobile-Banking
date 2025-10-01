
        document.getElementById("btn-cash-out").addEventListener("click",
    function(event){
        event.preventDefault()
        const accountNumber = document.getElementById("cashout-account-number").value;
        
        const amount = getInputValueById("cashOut-amount");
        
        const pinNumber =getInputValueById("cashout-pin");
        const mainBalance = getInnerTextById("main-balance");
        if(amount>mainBalance || amount<0){
            alert("Invalid Amount");
            return;
        }

        if(accountNumber.length===11){
          
            if(pinNumber===1234){
                const sum = mainBalance - amount;
                setInnerTextByIdAndValue("main-balance",sum)


                const transactionContainer = document.getElementById("transaction-container");

  // Create styled card div
  const div = document.createElement("div");
  div.classList.add("bg-gray-300","border","border-gray-200","rounded-xl","shadow-md","p-4","mb-3","transition","hover:shadow-lg");

  div.innerHTML = `
    <div class=" bg-white border border-gray-200 rounded-xl shadow-md p-4 mb-3 transition hover:shadow-lg">
      <div class="flex items-center justify-between">
          <h1 class="text-lg font-bold text-red-700"> Cash Out</h1>
        <span class="text-sm text-gray-500">${new Date().toLocaleString()}</span>      
       </div>  
   
    <p class="text-gray-700 mt-1">Account: <span class="font-mono">${accountNumber}</span></p>
    <p class="text-red-600 font-semibold mt-1">- ${amount} ৳</p>
    <p class="text-gray-600 text-sm mt-1">Remaining Balance: <span class="font-bold">${sum} ৳</span></p>
    </div>
  `;


  // Append to transaction history
  transactionContainer.appendChild(div);







            } 
            else{
                alert("Invalid Pin Number")
            }
        }
        else{
            alert("Invalid Account Number")
        }


    })
    
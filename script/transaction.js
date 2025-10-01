
document.getElementById("transaction-box").addEventListener("click",
    function(event){
        event.preventDefault();
        handelToggle("addMoney","none")
        handelToggle("cashout","none")
        handelToggle ("Transaction-history","block")
    }
)
let incomeBtn = document.getElementById("incomeBtn");
let expenseBtn = document.getElementById("expenseBtn");
let incomeList = document.getElementById("incomeList");
let expenseList = document.getElementById("expenseList");
let desc = document.getElementById("desc");
let amount = document.getElementById("amount");
let balance = document.getElementById("balance");

incomeBtn.addEventListener("click" , function(){
     if (desc.value == ""){
        alert ("ogiltig beskrivning")
    } else {   
        if (isNaN(parseInt(amount.value)) || parseInt(amount.value) < 0 || amount.value == ""){
            alert ("ogiltigt belopp")
        } else {  
            let incomeListItem = document.createElement("li");
            incomeListItem.textContent = desc.value +" - "+ amount.value +" kr (Inkomst)";
            incomeList.appendChild(incomeListItem);
            balance.textContent = parseInt(amount.value) + parseInt(balance.textContent);
            
            // empty input fields
            desc.value = "";
            amount.value = "";
        }
    } 
});
expenseBtn.addEventListener("click" , function(){
     if (desc.value == ""){
        alert ("ogiltig beskrivning")
    } else {   
        if (isNaN(parseInt(amount.value)) || parseInt(amount.value) < 0 || amount.value == ""){
            alert ("ogiltigt belopp")
        } else {
            let expenseListItem = document.createElement("li");
            expenseListItem.textContent = desc.value +" - "+ amount.value +" kr (Utgift)";
            expenseList.appendChild(expenseListItem);
            balance.textContent = parseInt(balance.textContent) - parseInt(amount.value);

            // empty input fields
            desc.value = "";
            amount.value = "";
            console.log(balance.value)
        }
    } 
});
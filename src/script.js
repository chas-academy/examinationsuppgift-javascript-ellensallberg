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
            incomeListItem.innerText = desc.value +" - "+ amount.value +" kr";
            incomeList.appendChild(incomeListItem);
            balance.innerHTML = parseInt(amount.value) + parseInt(balance.innerHTML);
            
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
            expenseListItem.innerText = desc.value +" - "+ amount.value +" kr";
            expenseList.appendChild(expenseListItem);
            balance.innerHTML = parseInt(balance.innerHTML) - parseInt(amount.value);
            
            // empty input fields
            desc.value = "";
            amount.value = "";
        }
    } 
});
// document.getElementById("desc")
// document.getElementById("amount");

// document.getElementById("incomeBtn");
// incomeBtn.addEventListener("click" , function(){
//     document.getElementById("incomeList").innerHTML += "<li></li>";
// })

let incomeBtn = document.getElementById("incomeBtn");
let incomeList = document.getElementById("incomeList");
let desc = document.getElementById("desc");
let amount = document.getElementById("amount");
let balance = document.getElementById("balance");

incomeBtn.addEventListener("click" , function(){
    if (isNaN(parseInt(amount.value)) || parseInt(amount.value) < 0){
        alert ("invalid input")
    } else {
        console.log(!isNaN(parseInt(amount.value)))
        let IncomeListItem = document.createElement("li");
        IncomeListItem.innerText = amount.value +" "+ desc.value;
        incomeList.appendChild(IncomeListItem);
        balance.innerHTML = parseInt(amount.value) + parseInt(balance.innerHTML);
    }
    
});
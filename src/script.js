// document.getElementById("desc")
// document.getElementById("amount");

// document.getElementById("incomeBtn");
// incomeBtn.addEventListener("click" , function(){
//     document.getElementById("incomeList").innerHTML += "<li></li>";
// })

document.getElementById("incomeBtn");
document.getElementById("incomelist");
document.getElementById("desc");
document.getElementById("amount");

incomeBtn.addEventListener("click" , function(){

    let newIncomeListItem = document.createElement("li");
    newIncomeListItem.innerText = desc.value, amount.value;
    incomeList.appendChild(newIncomeListItem);
});
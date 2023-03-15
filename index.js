(function (){
const budgetSubmit = document.getElementById("budget-submit");
const budgetInput = document.getElementById("budget-input");
const budgetDisplay = document.getElementById("budget-display");
const budgetDisplayText = document.getElementById("budget-display-text");
let runningTotal = 0
let noMoney = 1
console.log(runningTotal);

budgetSubmit.addEventListener("click", (e) =>{
    e.preventDefault()
    runningTotal = budgetInput.value
    budgetDisplayText.innerText = "Total: $" + runningTotal
    console.log(runningTotal);
    noMoney = runningTotal;
    if (noMoney < 1) {
        alert("You have no money.");
    }
    /* budgetDisplay.appendChild(budgetDisplayText);   */
})

const productNameE = document.getElementById("product-name-e");
const productPriceE = document.getElementById("product-price-e");
const entertainmentSubmit = document.getElementById("entertainment-submit");

entertainmentSubmit.addEventListener("click", (e) =>{
    e.preventDefault()
    runningTotal -= productPriceE.value;
    budgetDisplayText.innerText = (`$${runningTotal}`);
    console.log(runningTotal); 
    noMoney = runningTotal;
    if (noMoney < 1) {
        alert("You have no money.");
    }
})

const productNameF = document.getElementById("product-name-f");
const productPriceF = document.getElementById("product-price-f");
const foodSubmit = document.getElementById("food-submit");

foodSubmit.addEventListener("click", (e) =>{
    e.preventDefault()
    runningTotal -= productPriceF.value;
    budgetDisplayText.innerText = (`$${runningTotal}`);
    console.log(runningTotal); 
    noMoney = runningTotal;
    if (noMoney < 1) {
        alert("You have no money.");
    }
})

const productNameC = document.getElementById("product-name-c");
const productPriceC = document.getElementById("product-price-c");
const clothingSubmit = document.getElementById("clothing-submit");

clothingSubmit.addEventListener("click", (e) =>{
    e.preventDefault()
    runningTotal -= productPriceC.value;
    budgetDisplayText.innerText = (`$${runningTotal}`);
    console.log(runningTotal); 
    noMoney = runningTotal;
    if (noMoney < 1) {
        alert("You have no money.");
    }
})

const productNameB = document.getElementById("product-name-b");
const productPriceB = document.getElementById("product-price-b");
const billsSubmit = document.getElementById("bills-submit");

billsSubmit.addEventListener("click", (e) =>{
    e.preventDefault()
    runningTotal -= productPriceB.value;
    budgetDisplayText.innerText = (`$${runningTotal}`);
    console.log(runningTotal);
    noMoney = runningTotal; 
    if (noMoney < 1) {
        alert("You have no money.");
    }
})



console.log(`money: ${noMoney}`);

}());   
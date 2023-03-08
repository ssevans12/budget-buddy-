(function (){
const budgetSubmit = document.getElementById("budget-submit");
const budgetInput = document.getElementById("budget-input");
const budgetDisplay = document.getElementById("budget-display");

budgetSubmit.addEventListener("click", (e) =>{
    e.preventDefault()
    let budgetDisplayText = document.createElement("h2");
    budgetDisplayText.innerText= "$" + budgetInput.value 
    budgetDisplay.appendChild(budgetDisplayText);  
})


}());   
const descInput = document.getElementById('desc');
const amountInput = document.getElementById('amount');
const incomeBtn = document.getElementById('incomeBtn');
const expensesBtn = document.getElementById('expensesBtn');
const expenseList = document.getElementById('expenseList');
const incomeList = document.getElementById('incomeList');
const balance = document.getElementById('balance');

incomeBtn.addEventListener('click', function() {
    const amountValue = amountInput.value;
    const amount = Number(amountValue);
    console.log("User inputted an income of", amount);

    if (amountValue === "" || isNaN(amount)) {
        console.warn("Something went wrong. Check if the amount field is correctly filled in")
    }

});
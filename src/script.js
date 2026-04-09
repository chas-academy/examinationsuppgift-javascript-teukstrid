const descInput = document.getElementById('desc');
const amountInput = document.getElementById('amount');
const incomeBtn = document.getElementById('incomeBtn');
const expenseBtn = document.getElementById('expenseBtn');
const expenseList = document.getElementById('expenseList');
const incomeList = document.getElementById('incomeList');
const balance = document.getElementById('balance');
let totalAmount = 0;

incomeBtn.addEventListener('click', function() {
    const description = descInput.value;
    const amountValue = amountInput.value;
    const amount = Number(amountValue);

    let errorList = []

    if (description === "") {
        errorList.push("Missing description");
    }
    if (amountValue === "") {
        errorList.push("Missing amount");
    } else if (isNaN(amount)) {
        errorList.push("Invalid amount(Only use numbers)");
    }
    if (errorList.length > 0) {
        console.warn("Invalid user input. Errors: " + errorList.join(", "));
        return;
    }

    const li = document.createElement('li');
    li.textContent = `${description} - ${amount} kr (Inkomst)`;
    incomeList.appendChild(li);

    descInput.value = "";
    amountInput.value = "";

    totalAmount += amount;
    balance.textContent = totalAmount;
});

expenseBtn.addEventListener('click', function() {
    const description = descInput.value;
    const amountValue = amountInput.value;
    const amount = Number(amountValue);

    let errorList = []

    if (description === "") {
        errorList.push("Missing description");
    }
    if (amountValue === "") {
        errorList.push("Missing amount");
    } else if (isNaN(amount)) {
        errorList.push("Invalid amount(Only use numbers)");
    }
    if (errorList.length > 0) {
        console.warn("Invalid user input. Errors: " + errorList.join(", "));
        return;
    }

    const li = document.createElement('li');
    li.textContent = `${description} - ${amount} kr (Utgift)`;
    expenseList.appendChild(li);

    descInput.value = "";
    amountInput.value = "";

    totalAmount -= amount;
    balance.textContent = totalAmount;
});
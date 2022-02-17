// input value function 
function getInputAmount(input) {
    let amountValue = document.getElementById(input + '-input').value;
    if (amountValue == '') {
        return amountValue = '0';
    }
    else {
        return amountValue;
    }
}
// cost calculate function 
function getTotalCost() {
    const foodCost = parseInt(getInputAmount('food'));
    const rentCost = parseInt(getInputAmount('rent'));
    const clothesCost = parseInt(getInputAmount('clothes'));
    if (foodCost >= 0 && rentCost >= 0 && clothesCost >= 0) {
        if (isNaN(foodCost) && isNaN(rentCost) && isNaN(clothesCost)) {
            return alert('please enter a valid number!');
        }
        else {
            const totalCost = foodCost + rentCost + clothesCost;
            return totalCost;
        }
    }
    else {
        return alert('please enter a valid number!');
    }
}
// costing and saving button 
document.getElementById('cost-button').addEventListener('click', function () {
    const incomeAmount = getInputAmount('income');
    const incomeValue = parseInt(incomeAmount);
    if (isNaN(incomeValue)) {
        return alert('please enter a valid number!');
    }
    const totalExpensesAmount = document.getElementById('total-expenses');
    const totalCostInner = totalExpensesAmount.innerText;
    const balance = document.getElementById('balance');
    const balanceAmount = balance.innerText;
    const cost = getTotalCost();
    if (incomeValue < cost) {
        return alert('you spend to much money!');
    }
    // error handelin and balance amount calculate 
    if (cost != undefined) {
        totalExpensesAmount.innerText = cost;
        if (isNaN(incomeValue)) {
            balance.innerText = balanceAmount;
        }
        else {
            const totalBalance = incomeAmount - cost;
            balance.innerText = totalBalance;
        }
    }
    else {
        totalExpensesAmount.innerText = totalCostInner;
        balance.innerText = balanceAmount;
    }
})
// saving and remainig button 
document.getElementById('saving-calculate').addEventListener('click', function () {
    const incomeIntiger = parseInt(getInputAmount('income'));
    const percent = parseInt(getInputAmount('percent'));
    if (percent < 0) {
        return alert('please enter a valid number!');
    }
    if (isNaN(percent)) {
        return alert('pleese enter a valid number!');
    }
    const savingBalance = document.getElementById('saving');
    const savingInner = savingBalance.innerText;

    if (isNaN(incomeIntiger)) {
        savingBalance.innerText = savingInner;
    }
    else {
        const savingAmount = incomeIntiger * percent / 100;
        savingBalance.innerText = savingAmount;
        // remaining balance calculate 
        const remainingBalance = document.getElementById('remaining');
        const cost = getTotalCost();
        const balance = incomeIntiger - cost;
        if (savingAmount > balance) {
            return alert('you can not save money');
        }
        else {
            const remainingAmount = balance - savingAmount;
            remainingBalance.innerText = remainingAmount;
        }
    }
})
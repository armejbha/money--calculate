// const calculate 
function getInputAmount(inputId) {
    const amount = document.getElementById(inputId).value;
    const amountValue = parseInt(amount);
    if (isNaN(amountValue)) {
        alert('please a valid number');
    }
    else {
        return amountValue;
    }
}
function totalCostAmount() {
    const foodCost = getInputAmount('food-input');
    const rentCost = getInputAmount('rent-input');
    const clothesCost = getInputAmount('clothes-input');
    const totalCost = foodCost + rentCost + clothesCost;
    return totalCost;
}
function getBalance() {
    const incomeAmount = getInputAmount('income-input');
    if (totalCostAmount() > incomeAmount) {
        alert('please decreae your cost');
    }
    else {
        const totalBalance = incomeAmount - totalCostAmount();
        return totalBalance;
    }
}
// const calculate button 
document.getElementById('cost-button').addEventListener('click', function () {
    document.getElementById('total-expenses').innerText = totalCostAmount();
    document.getElementById('balance').innerText = getBalance();
})

// saving calculate 

// saving calculate botton 
document.getElementById('saving-calculate').addEventListener('click', function () {
    const percent = getInputAmount('percent-input');
    let incomeAmount = getInputAmount('income-input');
    const savingAmount = incomeAmount * percent / 100;
    document.getElementById('saving').innerText = parseInt(savingAmount);
    if (getBalance() < savingAmount) {
        alert('Oop! you can not save money');
        document.getElementById('saving').innerText = '';
    }
    else {
        const remainingAmount = getBalance() - savingAmount;
        document.getElementById('remaining').innerText = parseInt(remainingAmount);
    }
})
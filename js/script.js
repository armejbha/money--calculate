// const calculate 
function getInputAmount(input) {
    let amountValue = document.getElementById(input + '-input').value;
    if (amountValue == '') {
        return amountValue = '0';
    }
    else {
        return amountValue;
    }
    // if (isNaN(amountValue)) {
    //     alert('please a valid number');
    // }
    // else {
    // return amountValue;
    // }
}
function getTotalCost() {
    const foodCost = parseInt(getInputAmount('food'));
    const rentCost = parseInt(getInputAmount('rent'));
    const clothesCost = parseInt(getInputAmount('clothes'));
    if (foodCost < 0 || rentCost < 0 || clothesCost < 0) {
        return alert('please enter a positive number');
    }
    else {
        if (isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost)) {
            return alert('please enter a valid number');
        }
        else {
            const totalCost = foodCost + rentCost + clothesCost;
            return totalCost;
        }
    }
    // if (isNaN(foodCost)) {
    //     alert('please enter a valid food cost number');
    // }
    // else if (isNaN(rentCost)) {
    //     alert('please enter a valid rent cost number');
    // }
    // else if (isNaN(clothesCost)) {
    //     alert('please enter a valid clothes cost number');
    // }
    // else {
    //     const totalCost = foodCost + rentCost + clothesCost;
    //     return totalCost;
    // }

}
// function getBalance() {
//     const incomeAmount = getInputAmount('income-input');
//     if (totalCostAmount() > incomeAmount) {
//         alert('please decreae your cost');
//     }
//     else {
//         const totalBalance = incomeAmount - totalCostAmount();
//         return totalBalance;
//     }
// }
// cost calculate button 
document.getElementById('cost-button').addEventListener('click', function () {
    // consting 
    const cost = getTotalCost();
    // console.log(cost); 
    const totalExpensesAmount = document.getElementById('total-expenses');
    const oldTotalCostInner = totalExpensesAmount.innerText;
    // console.log(totalCostInner);
    totalExpensesAmount.innerText = cost;
    const totalCostInner = totalExpensesAmount.innerText;
    // incomeAmount 
    const incomeAmount = parseInt(getInputAmount('income'));
    if (incomeAmount < 0) {
        alert('please enter a valid number');
    }
    if (incomeAmount < cost) {
        alert('you spend to much money!');
    }
    // balance 
    const balance = document.getElementById('balance');
    const balanceAmount = balance.innerText;

    // console.log(cost);
    // console.log(totalCostInner);
    if (totalCostInner != 'undefined') {
        totalExpensesAmount.innerText = cost;
        if (isNaN(incomeAmount)) {
            balance.innerText = balanceAmount;
        }
        else {
            const totalBalance = incomeAmount - cost;
            balance.innerText = totalBalance;
        }
        // const totalBalance = incomeAmount - getTotalCost();
        // balance.innerText = totalBalance;
    }
    else {
        totalExpensesAmount.innerText = oldTotalCostInner;
        balance.innerText = balanceAmount;
    }
    // document.getElementById('balance').innerText = getBalance();
})

// saving calculate 

// saving calculate botton 
document.getElementById('saving-calculate').addEventListener('click', function () {
    const incomeAmount = parseInt(getInputAmount('income'));
    const percent = parseInt(getInputAmount('percent'));
    if (isNaN(percent)) {
        return alert('please enter a valid number');
    }
    const savingBalance = document.getElementById('saving');
    const savingAmount = incomeAmount * percent / 100;
    savingBalance.innerText = savingAmount;
    const cost = getTotalCost();
    const balance = incomeAmount - cost;
    const remainingBalance = document.getElementById('remaining');
    if (savingAmount > balance) {
        return alert('you can not save money');
    }
    else {
        const remainingAmount = balance - savingAmount;
        remainingBalance.innerText = remainingAmount;
    }
    // if (getBalance() < savingAmount) {
    //     alert('Oop! you can not save money');
    //     document.getElementById('saving').innerText = '';
    // }
    // else {
    //     const remainingAmount = getBalance() - savingAmount;
    //     document.getElementById('remaining').innerText = parseInt(remainingAmount);
    // }
})
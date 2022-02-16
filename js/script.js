// const calculate 
function getInputAmount(inputId) {
    const amount = document.getElementById(inputId).value;
    const amountValue = parseInt(amount);
    if (isNaN(amountValue)) {
        alert('please a number');
    }
    return amountValue;
}
function totalCostAmount() {
    const foodCost = getInputAmount('food-input');
    const rentCost = getInputAmount('rent-input');
    const clothesCost = getInputAmount('clothes-input');
    const totalCost = foodCost + rentCost + clothesCost;
    const totalCostInner = document.getElementById('total-expenses').innerText = totalCost;
    return totalCost;
}
document.getElementById('cost-button').addEventListener('click', function () {
    const incomeAmount = getInputAmount('income-input');
    if (totalCostAmount() > incomeAmount) {
        alert('please decreae your cost');
    }
    else {
        const totalBalance = incomeAmount - totalCostAmount();
        const balance = document.getElementById('balance').innerText = totalBalance;
    }
})
// saving calculate 
document.getElementById('saving-calculate').addEventListener('click', function () {

})
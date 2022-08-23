document.getElementById('btn-calculate').addEventListener('click', function () {
    playerCostTotalById();
})

document.getElementById('total-cost').addEventListener('click', function () {

    const managerField = document.getElementById('manager-price');
    const managerValueString = managerField.value;
    const managerValue = parseInt(managerValueString);
    managerField.value = '';


    const coachField = document.getElementById('coach-price');
    const coachValueString = coachField.value;
    const coachValue = parseInt(coachValueString);
    coachField.value = '';

    const totalPlayerCostElement = document.getElementById('total-player-cost');
    const totalPlayerCostValueString = totalPlayerCostElement.innerText;
    const totalPlayerCostValue = parseInt(totalPlayerCostValueString);

    const totalCost = managerValue + coachValue + totalPlayerCostValue;

    const totalCostElement = document.getElementById('all-cost');
    totalCostElement.innerText = totalCost;
})


document.getElementById('btn-calculate').addEventListener('click', function () {
    playerCostTotalById();
})

document.getElementById('total-cost').addEventListener('click', function () {

    const playerPriceField = document.getElementById('player-price');
    const playerPriceValueString = playerPriceField.value;
    const playerPriceValue = parseInt(playerPriceValueString);
    playerPriceField.value = '';
    if (isNaN(playerPriceValue)) {
        alert("Please Enter a Valid Data");
        return;
    }

    const totalPlayerCost = playerPriceValue * 5;

    const totalPlayerCostElement = document.getElementById('total-player-cost');
    totalPlayerCostElement.innerText = totalPlayerCost;

    const managerField = document.getElementById('manager-price');
    const managerValueString = managerField.value;
    const managerValue = parseInt(managerValueString);
    managerField.value = '';

    if (isNaN(playerPriceValue)) {
        alert("Please Enter a Valid Data");
        return;
    }

    const coachField = document.getElementById('coach-price');
    const coachValueString = coachField.value;
    const coachValue = parseInt(coachValueString);
    coachField.value = '';

    if (isNaN(playerPriceValue)) {
        alert("Please Enter a Valid Data");
        return;
    }


    const totalCost = totalPlayerCost + managerValue + coachValue;

    const totalCostElement = document.getElementById('all-cost');
    totalCostElement.innerText = totalCost;
})


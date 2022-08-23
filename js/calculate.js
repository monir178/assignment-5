document.getElementById('btn-calculate').addEventListener('click', function () {
    const playerPriceField = document.getElementById('player-price');
    const playerPriceValueString = playerPriceField.value;
    const playerPriceValue = parseInt(playerPriceValueString);

    const totalPlayerCost = playerPriceValue * 5;

    const totalPlayerCostElement = document.getElementById('total-player-cost');
    totalPlayerCostElement.innerText = totalPlayerCost;

})

document.getElementById('total-cost').addEventListener('click', function () {
    const managerField = document.getElementById('')
})


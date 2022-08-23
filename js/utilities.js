function selectPlayerById(playerNameId, playerBtnId) {

    const addSelected = document.getElementById('list-container');
    const name = document.getElementById(playerNameId);
    const li = document.createElement('li');
    li.innerText = name.innerText;

    const btnName = document.getElementById(playerBtnId);
    btnName.setAttribute('disabled', true);


    li.classList.add('item');
    addSelected.appendChild(li);

    let parents = document.querySelectorAll(".item");
    let parentsLength = parents.length;

    if (parentsLength === 6) {
        alert('You can not add more than 5 players');

        const remove = document.querySelector(".item")
        // remove.lastChild.style.display = 'none';
        remove.parentNode.removeChild(remove);

    }


}

function playerCostTotalById() {
    const playerPriceField = document.getElementById('player-price');
    const playerPriceValueString = playerPriceField.value;
    const playerPriceValue = parseInt(playerPriceValueString);
    playerPriceField.value = '';

    if (isNaN(playerPriceValue)) {
        alert("Please Enter a Valid Data");
        return;
    }

    let parentsList = document.querySelectorAll(".item");
    let parentsLength = parentsList.length;
    const totalPlayerCost = (parentsLength) * playerPriceValue;



    const totalPlayerCostElement = document.getElementById('total-player-cost');
    totalPlayerCostElement.innerText = totalPlayerCost;
}
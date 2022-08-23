function selectPlayerById(playerNameId, playerBtnId) {
    const addSelected = document.getElementById('list-container');
    const name = document.getElementById(playerNameId);
    const li = document.createElement('li');


    li.innerText = name.innerText;
    li.classList.add('item');
    addSelected.appendChild(li);



    const btnName = document.getElementById(playerBtnId);
    btnName.setAttribute('disabled', true);


}
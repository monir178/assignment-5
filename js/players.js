
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

document.getElementById('messi-btn').addEventListener('click', function () {
    selectPlayerById('messi-name', 'messi-btn');
})
document.getElementById('sanches-btn').addEventListener('click', function () {
    selectPlayerById('sanches-name', 'sanches-btn');
})
document.getElementById('vitor-btn').addEventListener('click', function () {
    selectPlayerById('vitor-name', 'vitor-btn');
})
document.getElementById('mbappe-btn').addEventListener('click', function () {
    selectPlayerById('mbappe-name', 'mbappe-btn');
})
document.getElementById('neymar-btn').addEventListener('click', function () {
    selectPlayerById('neymar-name', 'neymar-btn');
})
document.getElementById('ramos-btn').addEventListener('click', function () {
    selectPlayerById('ramos-name', 'ramos-btn');
})
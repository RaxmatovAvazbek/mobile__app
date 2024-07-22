const btnclick = document.querySelector('#xChechbox'),
btn = document.querySelector('.save-button');

btnclick.addEventListener('click', () => {
    if (btnclick.checked == true) {
        btn.style.backgroundColor = '#eb2b2b';
    }
    else{
        btn.style.backgroundColor = '#505050';
    }
});
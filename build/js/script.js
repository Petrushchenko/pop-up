'use strict';

window.onload = () => {
    const parent = document.querySelector('.wrapper');
    const btn = parent.querySelector('.wrapper__btn');

    createPopUp(parent);

    btn.addEventListener('click', () => openPopUp('.modal'));

}
function createPopUp (parent){

    let mod = document.createElement('div');
    mod.classList = 'modal';

    let bg = document.createElement('div');
    bg.classList = 'modal__background';

    let alert = document.createElement('div');
    alert.classList = 'modal__alert';

    let btnModalClose = document.createElement('span');
    btnModalClose.classList = "modal__close";

    let imgWrapper = document.createElement("div");
    imgWrapper.classList = "modal__warning";

    let buttonsWrapper = document.createElement('div');
    buttonsWrapper.classList = "modal__buttons buttons";

    let image  = document.createElement('img');
    image.setAttribute("src","images/icon-warning_notify-red.svg");


    let text = document.createElement('p');
    text.textContent = `Are you sure you want to install the Shazam app`;

    imgWrapper.append(image, text);

    let btnCancel = document.createElement('button');
    btnCancel.classList = "buttons__cancel";
    btnCancel.textContent = "cancel";
    btnCancel.setAttribute('type', 'button');

    let alternativeBtn = document.createElement('button');
    alternativeBtn.classList = "buttons__alt";
    alternativeBtn.textContent = 'install';
    alternativeBtn.setAttribute('type', 'button');

    buttonsWrapper.append(btnCancel, alternativeBtn);

    alert.append(btnModalClose, imgWrapper, buttonsWrapper);
    mod.append(bg, alert);
    mod.addEventListener('click', closePopUp);

    let fragment = document.createDocumentFragment();
    fragment.append(mod);
    
    parent.append(fragment);
}
function openPopUp(selector) {
    let popup = document.querySelector(selector);
       
        popup.classList.add("opened");
}
   
function closePopUp(event) {
        
    switch (event.target.className) {
        case 'modal__close':
        case "buttons__cancel":
        case 'modal__background':
            this.classList.remove("opened");
            break;
        case 'buttons__alt':
            this.classList.remove("opened");
            setTimeout(() => alert('DONE'), 300);
            break;
    }
}








    

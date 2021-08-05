import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
  }
  open(newCard) {
    const imgCard = this._selectorPopup.querySelector(".popup__container-img");
    const textCard = this._selectorPopup.querySelector(".popup__image-text");
    const imgBigCard = newCard.querySelector(".element__img");
    const imgBigTitle = newCard.querySelector(".element__name");

    imgCard.src = imgBigCard.src;
    imgCard.textContent = imgBigCard.alt;
    textCard.textContent = imgBigTitle.textContent;
    super.open();
  };
}

/*
import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    openPopup(cardElement) {
        const imagePopupCard = this._popup.querySelector('.form-image__image');
        const titlePopupCard = this._popup.querySelector('.form-image__text');
        const cardImage = cardElement.querySelector('.element__image');
        const cardTitle = cardElement.querySelector('.element__text');

        imagePopupCard.src = cardImage.src;
        imagePopupCard.textContent = cardTitle.alt;
        titlePopupCard.textContent = cardTitle.textContent;
        super.openPopup();
    };
}
*/

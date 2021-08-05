/*
import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selectorPopup, formSubmitAll) {
    super(selectorPopup)
    this._formSubmitAll = formSubmitAll;
  }
  close() {
    this._selectorPopup.querySelector('.form_type_add-place').reset();
    super.close();
  }
  _getInputValues() {
    let inputPopup = Array.from(this._selectorPopup.querySelectorAll('.form'));

    const inputElement = inputPopup.forEach((input) => {
      const inputfield = {};
      input.name = input.value
    });
    return inputElement



  }
}
export class UserInfo {
  constructor({ name, profession }) {
      this._name = document.querySelector(name);
      this._profession = document.querySelector(profession);
  }
*/



getInputValues = () => {
  const inputForms = Array.from(document.querySelectorAll('.form__style'));
  let inputField = {};
  const inputFields = inputForms.forEach((elem) => {
    inputField[elem.name] = elem.value;
  });

  return console.log(inputField);
}

getInputValues()
/*
import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector)
        this._submitForm = submitForm;
    }
    _getInputValues() {
        let inputElements = this._popup.querySelectorAll('.form__input');
        let inputElement = {};
        for (let i = 0; i < inputElements.length; i++) {
            const item = inputElements.item(i);
            inputElement[item.name] = item.value;
        }

        return inputElement
    }
    setEventListeners() {
        this._data = this._getInputValues;
        this._popup.querySelector('.form').addEventListener('submit', (evt) => { this._submitForm(evt, this._data()) });
        super.setEventListeners();
    }
    closePopup() {
        this._popup.querySelector('.form').reset();
        super.closePopup();
    }
}*/

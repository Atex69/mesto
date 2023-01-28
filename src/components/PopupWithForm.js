import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, submitHandler) {
    super(popup);
    this._form = this._popup.querySelector(".popup__form");
    this._submitHandler = submitHandler;
    this._inputList = this._form.querySelectorAll(".popup__input");
    this._submitButton = this._form.querySelector(".popup__submit");
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setSubmitButtonSaveText() {
    this._submitButton.textContent = 'Сохранение...';
  }

  resetSubmitButtonText() {
    this._submitButton.textContent = this._submitButtonText;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      if (this._submitButton.classList.contains("popup__submit_disabled")) {
        return false;
      } else {
        e.preventDefault();
        this._submitHandler(this._getInputValues());
        this.closePopup();
      }
    });
  }

  openPopup(...inputValues) {
    if (arguments.length > 0) {
      inputValues.forEach((value, i) => {
        if (this._inputList[i] !== undefined) this._inputList[i].value = value;
      });
    }//очень мало времени, нужно следующую работу уже сдать до конца недели, а так согласен с вами полностью!
    super.openPopup();
  }

  closePopup() {
    super.closePopup();
    this._form.reset();
  }
}

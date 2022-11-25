const showInputError = (formElement, inputElement, errorMessage, params) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(params.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(params.errorClass);
};

const hideInputError = (formElement, inputElement, params) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(params.inputErrorClass);
    errorElement.classList.remove(params.errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, params) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, params);
    } else {
        hideInputError(formElement, inputElement, params);
    }
};

const toggleButtonState = (inputList, buttonElement, params) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(params.inactiveButtonClass);
    } else {
        buttonElement.classList.remove(params.inactiveButtonClass);
    }
}
const setEventListeners = (formElement, params) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__submit');
    toggleButtonState(inputList, buttonElement, params);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            toggleButtonState(inputList, buttonElement, params);
            checkInputValidity(formElement, inputElement, params);
        });
    });
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

const enableValidation = params => {
    const formList = Array.from(document.querySelectorAll(params.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        setEventListeners(formElement, params);
    });
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
});
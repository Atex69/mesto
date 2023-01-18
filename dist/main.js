/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/Card.js":
/*!*************************!*\
  !*** ./scripts/Card.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\nclass Card {\r\n    constructor(data, openPopupImage) {\r\n        this._data = data;\r\n        this._openPopupImage = openPopupImage;\r\n    }\r\n\r\n    _getTemplate = () => {\r\n        return document.querySelector('.card-template').content.querySelector('.element').cloneNode(true);\r\n    }\r\n\r\n    _handleLikeClick = (event) => {\r\n        event.target.classList.toggle('element__like_active')\r\n    }\r\n\r\n    _deleteCard = (event) => {\r\n        event.currentTarget.closest('.element').remove()\r\n    }\r\n\r\n    render = () => {\r\n        const cardTemplate = this._getTemplate();\r\n        cardTemplate.querySelector('.element__title').textContent = this._data.name;\r\n        const image = cardTemplate.querySelector('.element__image');\r\n        image.alt = this._data.name;\r\n        image.src = this._data.link;\r\n        image.addEventListener('click', () => this._openPopupImage(this._data))\r\n        cardTemplate.querySelector('.element__like').addEventListener('click', this._handleLikeClick)\r\n        cardTemplate.querySelector('.element__delete-card').addEventListener('click', this._deleteCard)\r\n        return cardTemplate;\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://yandex_praktikum/./scripts/Card.js?");

/***/ }),

/***/ "./scripts/FormValidator.js":
/*!**********************************!*\
  !*** ./scripts/FormValidator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FormValidator)\n/* harmony export */ });\nclass FormValidator {\r\n\r\n    constructor(data, formElement) {\r\n        this._formElement = formElement;\r\n        this._inputSelector = data.inputSelector;\r\n        this._submitSelector = data.submitSelector;\r\n        this._inputErrorClass = data.inputErrorClass;\r\n        this._errorClass = data.errorClass;\r\n        this._inactiveButtonClass = data.inactiveButtonClass;\r\n\r\n        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));\r\n        this._buttonElement = this._formElement.querySelector(this._submitSelector);\r\n    }\r\n\r\n    _showInputError = (inputElement, errorMessage) => {\r\n        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);\r\n        inputElement.classList.add(this._inputErrorClass);\r\n        errorElement.textContent = errorMessage;\r\n        errorElement.classList.add(this._errorClass);\r\n    };\r\n\r\n    _hideInputError = (inputElement) => {\r\n        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);\r\n        inputElement.classList.remove(this._inputErrorClass);\r\n        errorElement.classList.remove(this._errorClass);\r\n        errorElement.textContent = '';\r\n    };\r\n\r\n    _checkInputValidity = (inputElement) => {\r\n        if (!inputElement.validity.valid) {\r\n            this._showInputError(inputElement, inputElement.validationMessage);\r\n        } else {\r\n            this._hideInputError(inputElement);\r\n        }\r\n    };\r\n\r\n    _setButtonDisabled() {\r\n        this._buttonElement.classList.add(this._inactiveButtonClass);\r\n        this._buttonElement.setAttribute(\"disabled\", \"disabled\");\r\n    }\r\n\r\n\r\n    _setButtonEnabled() {\r\n        this._buttonElement.classList.remove(this._inactiveButtonClass);\r\n        this._buttonElement.removeAttribute(\"disabled\");\r\n    }\r\n\r\n\r\n    toggleButtonState = () => {\r\n        if (this._hasInvalidInput(this._inputList)) {\r\n            this._setButtonDisabled(this._buttonElement);\r\n        } else {\r\n            this._setButtonEnabled(this._buttonElement);\r\n        }\r\n    }\r\n\r\n    _setEventListeners = () => {\r\n        this.toggleButtonState();\r\n        this._inputList.forEach((inputElement) => {\r\n            inputElement.addEventListener('input', () => {\r\n                this.toggleButtonState();\r\n                this._checkInputValidity(inputElement);\r\n            });\r\n        });\r\n    };\r\n\r\n    _hasInvalidInput = (inputList) => {\r\n        return inputList.some((inputElement) => {\r\n            return !inputElement.validity.valid;\r\n        });\r\n    }\r\n\r\n    enableValidation = () => {\r\n        this._setEventListeners();\r\n    }\r\n\r\n\r\n};\n\n//# sourceURL=webpack://yandex_praktikum/./scripts/FormValidator.js?");

/***/ }),

/***/ "./scripts/cards.js":
/*!**************************!*\
  !*** ./scripts/cards.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formParameters\": () => (/* binding */ formParameters),\n/* harmony export */   \"initialCards\": () => (/* binding */ initialCards)\n/* harmony export */ });\n const initialCards = [\r\n    {\r\n        name: 'Архыз',\r\n        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'\r\n    },\r\n    {\r\n        name: 'Челябинская область',\r\n        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'\r\n    },\r\n    {\r\n        name: 'Иваново',\r\n        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'\r\n    },\r\n    {\r\n        name: 'Камчатка',\r\n        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'\r\n    },\r\n    {\r\n        name: 'Сочи',\r\n        link: 'https://images.unsplash.com/photo-1668889495576-bbd35db21a66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'\r\n    },\r\n    {\r\n        name: 'Байкал',\r\n        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'\r\n    }\r\n];\r\n\r\nconst formParameters = {\r\n    formSelector: '.popup__form',\r\n    inputSelector: '.popup__input',\r\n    inactiveButtonClass: 'popup__submit_disabled',\r\n    inputErrorClass: 'popup__input_type_error',\r\n    errorClass: 'popup__error_active',\r\n    submitSelector: '.popup__submit'\r\n}\r\n\r\n\n\n//# sourceURL=webpack://yandex_praktikum/./scripts/cards.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/FormValidator.js */ \"./scripts/FormValidator.js\");\n/* harmony import */ var _scripts_cards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/cards.js */ \"./scripts/cards.js\");\n/* harmony import */ var _scripts_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/Card.js */ \"./scripts/Card.js\");\n\r\n\r\n\r\n\r\nfunction openPopup(popup) {\r\n    popup.classList.add('popup_opened');\r\n    document.addEventListener('keydown', keyHandler);\r\n    popup.addEventListener('mousedown', outsideClickHandler);\r\n}\r\n\r\nfunction closePopup(popup) {\r\n    popup.classList.remove('popup_opened');\r\n    document.removeEventListener('keydown', keyHandler);\r\n    popup.removeEventListener('mousedown', outsideClickHandler);\r\n}\r\n\r\nfunction keyHandler(evt) {\r\n    if (evt.key === 'Escape') {\r\n        const popup = document.querySelector('.popup_opened');\r\n        closePopup(popup);\r\n    }\r\n}\r\n\r\nconst outsideClickHandler = (e) => {\r\n    if (e.target.classList.contains('popup_opened')) {\r\n        closePopup(e.target);\r\n    }\r\n};\r\n\r\n//редактирование профиля\r\nconst popupUserQuerySelector = '.popup_type_user';\r\nconst popupUser = document.querySelector(popupUserQuerySelector);\r\nconst popupCloseButtonUser = document.querySelector('.popup__close_type_user');\r\nconst titleProfile = document.querySelector('.profile__info-title');\r\nconst subtitleProfile = document.querySelector('.profile__info-subtitle');\r\nconst userFormValidator = new _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_scripts_cards_js__WEBPACK_IMPORTED_MODULE_1__.formParameters, popupUser);\r\nuserFormValidator.enableValidation();\r\n\r\n\r\nfunction handleProfileFormSubmit(evt) {\r\n    evt.preventDefault();\r\n    titleProfile.textContent = nameInput.value;\r\n    subtitleProfile.textContent = jobInput.value;\r\n    closePopup(popupUser);\r\n}\r\n\r\nconst formElementUser = document.querySelector('.popup__form_type_user');\r\nformElementUser.addEventListener('submit', handleProfileFormSubmit);\r\n\r\nconst nameInput = document.querySelector('.popup__input_type_name');\r\nconst jobInput = document.querySelector('.popup__input_type_description');\r\nformElementUser.querySelector(\".popup__submit_type_user\");\r\nfunction openPopupProfile() {\r\n    openPopup(popupUser);\r\n    nameInput.value = titleProfile.textContent;\r\n    jobInput.value = subtitleProfile.textContent;\r\n    userFormValidator.toggleButtonState();\r\n}\r\n\r\nconst closePopupProfile = () => closePopup(popupUser);\r\n\r\nconst buttonEditProfile = document.querySelector('.profile__info-edit-button');\r\nconst buttonOpenCardPopup = document.querySelector('.profile__add-button');\r\nbuttonEditProfile.addEventListener('click', openPopupProfile);\r\nbuttonOpenCardPopup.addEventListener('click', openPopupPlace);\r\npopupCloseButtonUser.addEventListener('click', closePopupProfile);\r\n\r\n//редактирование фотографий\r\nconst popupPlaceQuerySelector = '.popup_type_place';\r\nconst popupPlace = document.querySelector(popupPlaceQuerySelector);\r\nconst popupCloseButtonPlace = document.querySelector('.popup__close_type_place');\r\nconst placeTitleInput = document.querySelector('.popup__input_type_title');\r\nconst placeLinkInput = document.querySelector('.popup__input_type_link');\r\nconst placeFormValidator = new _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_scripts_cards_js__WEBPACK_IMPORTED_MODULE_1__.formParameters, popupPlace);\r\nplaceFormValidator.enableValidation();\r\n\r\n\r\nconst closePopupPlace = () => closePopup(popupPlace);\r\n\r\npopupCloseButtonPlace.addEventListener('click', closePopupPlace);\r\n\r\nfunction handlePlaceFormSubmit(evt) {\r\n    evt.preventDefault();\r\n    createCard({\"name\": placeTitleInput.value, \"link\": placeLinkInput.value});\r\n    closePopupPlace();\r\n}\r\n\r\nconst formElementPlace = document.querySelector('.popup__form_type_place');\r\nformElementPlace.addEventListener('submit', handlePlaceFormSubmit);\r\nformElementPlace.querySelector(\".popup__submit_type_place\");\r\nfunction openPopupPlace() {\r\n    openPopup(popupPlace);\r\n    formElementPlace.reset();\r\n    placeFormValidator.toggleButtonState();\r\n}\r\nconsole.log('Hello, World!')\r\n\r\n\r\n//открытие попапа фото\r\nconst popupImageQuerySelector = '.popup_type_image';\r\nconst popupImage = document.querySelector(popupImageQuerySelector);\r\nconst popupImageCaption = document.querySelector(\".popup__caption\");\r\nconst popupCloseButtonImage = document.querySelector('.popup__close_type_image');\r\nconst popupImageElement = document.querySelector('.popup__image');\r\n\r\nconst closePopupImage = () => closePopup(popupImage);\r\n\r\nconst openPopupImage = (cardData) => {\r\n    popupImageElement.src = cardData.link;\r\n    popupImageCaption.textContent = cardData.name;\r\n    popupImageElement.alt = cardData.name;\r\n    openPopup(popupImage);\r\n}\r\n\r\npopupCloseButtonImage.addEventListener('click', closePopupImage);\r\n\r\n//загрузка карточек\r\n\r\n\r\nconst createCard = (item) => {\r\n    const card = new _scripts_Card_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](item, openPopupImage,'.card-template')\r\n    const rendered = card.render();\r\n    return rendered;\r\n}\r\n\r\nfunction renderInitialCards() {\r\n    _scripts_cards_js__WEBPACK_IMPORTED_MODULE_1__.initialCards.forEach (item =>{\r\n        const cardsContainer = document.querySelector('.elements__container');\r\n        const card = createCard(item);\r\n        cardsContainer.prepend(card);\r\n    });\r\n\r\n}\r\n\r\n\r\nrenderInitialCards()\r\n\n\n//# sourceURL=webpack://yandex_praktikum/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
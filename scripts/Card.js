export default class Card {
    constructor(data, openPopupImage, cardSelector) {
        this._data = data;
        this._openPopupImage = openPopupImage;
        this._cardSelector = cardSelector;
    }

    _getTemplate = () => {
        return document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    }

    _handleLikeClick = (event) => {
        event.target.classList.toggle('element__like_active')
    }

    _deleteCard = () => {
        this._cardTemplate.remove()
    }

    _setEventListeners = () => {
        this._image.addEventListener('click', () => this._openPopupImage(this._data))
        this._cardTemplate.querySelector('.element__like').addEventListener('click', this._handleLikeClick)
        this._cardTemplate.querySelector('.element__delete-card').addEventListener('click', this._deleteCard)
    }

    render = () => {
        this._cardTemplate = this._getTemplate();
        this._cardTemplate.querySelector('.element__title').textContent = this._data.name;
        this._image = this._cardTemplate.querySelector('.element__image');
        this._image.alt = this._data.name;
        this._image.src = this._data.link;
        this._setEventListeners();
        return this._cardTemplate;
    }
}
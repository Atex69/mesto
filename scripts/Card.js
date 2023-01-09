export default class Card {
    constructor(data, openPopupImage) {
        this._data = data;
        this._openPopupImage = openPopupImage;
    }

    _getTemplate = () => {
        return document.querySelector('.card-template').content.querySelector('.element').cloneNode(true);
    }

    _handleLikeClick = (event) => {
        event.target.classList.toggle('element__like_active')
    }

    _deleteCard = (event) => {
        event.currentTarget.closest('.element').remove()
    }

    render = () => {
        const cardTemplate = this._getTemplate();
        cardTemplate.querySelector('.element__title').textContent = this._data.name;
        const image = cardTemplate.querySelector('.element__image');
        image.alt = this._data.name;
        image.src = this._data.link;
        image.addEventListener('click', () => this._openPopupImage(this._data))
        cardTemplate.querySelector('.element__like').addEventListener('click', this._handleLikeClick)
        cardTemplate.querySelector('.element__delete-card').addEventListener('click', this._deleteCard)
        return cardTemplate;
    }






}
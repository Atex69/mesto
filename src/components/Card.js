export default class Card {
  constructor(data, openPopupImage, cardTemplateSelector) {
    this._data = data;
    this._openPopupImage = openPopupImage;
    this._cardTemplateSelector = cardTemplateSelector;
  }

  _getTemplate = () => {
    return document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
  };

  _handleLikeClick = () => {
    this._buttonLike.classList.toggle('element__like_active')
  };

  _deleteCard = () => {
    this._cardElement.remove()
  };


  render = () => {
    this._cardElement = this._getTemplate();
    this._buttonLike = this._cardElement.querySelector('.element__like')
    this._cardElement.querySelector(".element__title").textContent =
      this._data.name;
    const image = this._cardElement.querySelector(".element__image");
    image.alt = this._data.name;
    image.src = this._data.link;
    image.addEventListener("click", () => this._openPopupImage(this._data));
    this._cardElement
      .querySelector(".element__like")
      .addEventListener("click", this._handleLikeClick);
    this._cardElement
      .querySelector(".element__delete-card")
      .addEventListener("click", this._deleteCard);
    return this._cardElement;
  };
}

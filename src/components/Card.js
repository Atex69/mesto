export default class Card {
    constructor(data, cardTemplateSelector, userId, authorData, handlers) {
        this._data = data
        this._cardTemplateSelector = cardTemplateSelector;

        this._userId = userId;
        this._cardId = authorData.cardId;
        this._authorId = authorData.authorId;

        this._openPopupImageHandler = handlers.handleOpenPopupImage;
        this._deleteHandler = handlers.handleDelete;
        this._likeHandler = handlers.handleLike;
        this._removeLikeHandler = handlers.handleCardDeleteLike;
    }

    _getTemplate = () => {
        return document
            .querySelector(this._cardTemplateSelector)
            .content.querySelector(".element")
            .cloneNode(true);
    };

    _isCardLikedByuser = () => { return this._likeData.find(like => like._id === this._userId);}

    _handleLikeClick = () => {
        if (this._isCardLikedByuser()) {
            this._removeLikeHandler(this._cardId);
        } else {
            this._likeHandler(this._cardId);
        }
    };

    deleteCard = () => {
        this._cardElement.remove()
    };

    renderLike = (data) => {
        this._likeData = data.likes;
        if (this._likeData.length === 0) {
            this._likeCount.textContent = '';
        } else {
            this._likeCount.textContent = this._likeData.length;
        }
        if (this._isCardLikedByuser()) {
            this._buttonLike.classList.add('element__like_active');
        } else {
            this._buttonLike.classList.remove('element__like_active');
        }
    }

    render = () => {
        this._cardElement = this._getTemplate();
        this._buttonLike = this._cardElement.querySelector('.element__like');
        this._likeCount = this._cardElement.querySelector('.element__like-count');
        this._deleteButton = this._cardElement.querySelector('.element__delete-card');
        this._cardElement.querySelector(".element__title").textContent = this._data.name;
        this._image = this._cardElement.querySelector(".element__image");
        this._image.alt = this._data.name;
        this._image.src = this._data.link;
        this.renderLike(this._data);
        this._addEventListeners();
        return this._cardElement;
    };

    _addEventListeners = () => {
        this._buttonLike.addEventListener("click", this._handleLikeClick);
        this._image.addEventListener("click", () => this._openPopupImageHandler(this._data));
        if (this._userId === this._authorId) {
            this._deleteButton.addEventListener("click", () => this._deleteHandler(this, this._cardId));
        } else {
            this._deleteButton.remove();
        }
    }
}

export default class Api {
    constructor({url, headers}) {
        this._url = url;
        this._headers = headers;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`ошибки: ${res.status}`);
    }

    getInitialCards() {
        return fetch(`${this._url}cards`, {
            headers: this._headers
        })
            .then(res => {
                return this._handleResponse(res);
            })
    }

    addNewCard({name, link}) {
        return fetch(`${this._url}cards`, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify({name, link})
        })
            .then(res => {
                return this._handleResponse(res);
            })
    }

    deleteCard(cardId) {
        return fetch(`${this._url}cards/${cardId}`, {
            headers: this._headers,
            method: 'DELETE',
        })
            .then(res => {
                return this._handleResponse(res);
            })
    }

    getUserData() {
        return fetch(`${this._url}users/me`, {
            headers: this._headers
        })
            .then(res => {
                return this._handleResponse(res);
            })
    }

    saveUserData(data) {
        return fetch(`${this._url}users/me`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({name: data.name, about: data.description})
        })
            .then(res => {
                return this._handleResponse(res);
            })
    }

    sendAvatar(avatar) {
        return fetch(`${this._url}users/me/avatar`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({avatar: avatar.avatar})
        })
            .then(res => {
                return this._handleResponse(res);
            })
    }

    addLike(cardId) {
        return fetch(`${this._url}cards/${cardId}/likes`, {
            headers: this._headers,
            method: 'PUT',
        })
            .then(res => {
                return this._handleResponse(res);
            })
    }

    deleteLike(cardId) {
        return fetch(`${this._url}cards/${cardId}/likes`, {
            headers: this._headers,
            method: 'DELETE',
        })
            .then(res => {
                return this._handleResponse(res);
            })
    }
}

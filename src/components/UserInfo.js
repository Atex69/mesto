export default class UserInfo {
  constructor({ nameSelector, infoSelector, avatarSelector }) {
    this._profileName = document.querySelector(nameSelector);
    this._profileInfo = document.querySelector(infoSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      profileName: this._profileName.textContent,
      profileInfo: this._profileInfo.textContent,
    };
  }

  setUserInfo({ profileName, profileInfo }) {
    this._profileName.textContent = profileName;
    this._profileInfo.textContent = profileInfo;
  }

  setAvatar(avatarLink) {
    this._avatar.src = avatarLink;
  }
}

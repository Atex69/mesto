export default class UserInfo {
    constructor({nameSelector, infoSelector}) {
        this._profileName = document.querySelector(nameSelector)
        this._profileInfo = document.querySelector(infoSelector)
    }

    getUserInfo() {
        return {
            profileName: this._profileName.textContent,
            profileInfo: this._profileInfo.textContent
        };
    }

    setUserInfo({profileName, profileInfo}) {
        this._profileName.textContent = profileName;
        this._profileInfo.textContent = profileInfo;
    }
}
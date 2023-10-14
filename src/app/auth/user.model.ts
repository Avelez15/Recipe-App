export class User {
  constructor(
    public email: string,
    id: string,
    private _token: string,
    private _tokenExpirationDate: Date,
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }

  getExpirationDuration() {
    return new Date(this._tokenExpirationDate).getTime() - new Date().getTime();
  }

  static fromString(str: string): User {
    try {
      const userData = JSON.parse(str);
      if (!userData) {
        return;
      }
      return new User(
        userData.email,
        userData.id,
        userData._token,
        new Date(userData._tokenExpirationDate),
      );
    } catch (e) {
      throw e;
    }
  }
}

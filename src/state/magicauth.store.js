import { observable, decorate, action } from "mobx";

class MagicAuth {
  token = null;
  accepted = false;
  declined = false;
  checkedToken = false;
  expiredToken = false;

  // validate and checks if token is expired
  validateToken = token => {
    if (token == 3000) {
      this.checkedToken = true;
    } else {
      this.expiredToken = true;
    }

    // this.checkedToken = true;
  };

  extractToken = url => {
    // extracts the token thats passed in
    // from the auth component
    var j = url.match(/\d+/g);

    const m = j.join();
    const n = parseInt(m);

    this.token = n;
    this.validateToken(this.token);
  };

  acceptInvite = () => {
    this.accepted = true;
    this.declined = false;
  };

  declineInvite = () => {
    this.declined = true;
  };

  AuthUser = () => {
    this.authenticated = true;

    this.welcomed = true;
  };
}

const DecoratedMagicAuth = decorate(MagicAuth, {
  //observables
  accepted: observable,
  declined: observable,
  token: observable,
  checkedToken: observable,
  expiredToken: observable,

  //actions
  extractToken: action,
  declineInvite: action,
  acceptInvite: action,
  AuthUser: action,
  validateToken: action
});

const store = new DecoratedMagicAuth();

export default store;

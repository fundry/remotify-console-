import { observable, decorate, action } from "mobx";

class MagicAuth {
  accepted = false;
  declined = false;

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

  //actions
  declineInvite: action,
  acceptInvite: action,
  AuthUser: action
});

const store = new DecoratedMagicAuth();

export default store;

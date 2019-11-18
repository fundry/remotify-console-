import { observable, decorate, action } from 'mobx';
// import { create, persist } from 'mobx-persist';
//
// const hydrate = create({
//   storage: localStorage,
//   jsonify: true,
// });

class AuthStore {
  authenticated = false;

  openWelcomeModal = () => {
    this.welcomed = true;
  };

  closeWelcomeModal = () => {
    this.welcomed = false;
  };

  AuthUser = () => {
    this.authenticated = true;

    this.welcomed = true;
  };

  UnAuthUser = () => {
    this.authenticated = false;
  };
}

const DecoratedAuthStore = decorate(AuthStore, {
  //observables
  authenticated:  observable,
  welcomed: observable,

  //actions
  AuthUser: action,
  UnAuthUser: action,
});

const store = new DecoratedAuthStore();

export default store;

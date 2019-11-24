import { observable, decorate, action } from "mobx";

class DepartmentStore {
  showTeam = false;

  openTeam = () => {
    this.showTeam = true;
  };

  closeTeam = () => {
    this.showTeam = false;
  };
}

const DecoratedDepartmentStore = decorate(DepartmentStore, {
  //observables
  showTeam: observable,

  //----actions
  openTeam: action,
  closeTeam: action
});

const store = new DecoratedDepartmentStore();

export default store;

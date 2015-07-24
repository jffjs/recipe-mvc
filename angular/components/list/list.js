import {module} from 'angular';

export default module('recipes.list', []).controller('ListController', [ListCtrl]);

function ListCtrl() {
  this.msg = "Welcome to ListCtrl";
}

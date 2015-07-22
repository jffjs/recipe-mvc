import {module} from 'angular';
import ngNewRouter from 'angular-new-router';
import listComponent from './components/list/list';

module('recipes', [
  'ngNewRouter',
  'recipes.list'
]).controller('AppCtrl', ['$router', function($router) {
  this.hello = "Hello world";
  $router.config([
    { path: '/', component: 'list' }
  ]);
}]);

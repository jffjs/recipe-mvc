import {module} from 'angular';
import localforage from 'localforage';

export default module('recipes.service.store').service('store', Store);

class Store {
  save(recipe) {
    localforage.getItem('recipes').then(function(recipes) {
      recipes = recipes || [];
      recipes.push(recipe);
      return localforage.setItem('recipes', recipes);
    });
  }
}

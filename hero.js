const _ = require('lodash');


const Hero = function(name, health,favouriteFood,tasksToComplete){
  this.name= name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasksToComplet = [];

}

module.exports = Hero;

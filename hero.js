const _ = require('lodash');


const Hero = function(name, health,favouriteFood){
  this.name= name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasksToComplete = [];

}

Hero.prototype.countTasks= function(){
   return this.tasksToComplete.lenght;

}
module.exports = Hero;

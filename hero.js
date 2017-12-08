const _ = require('lodash');


const Hero = function(name, health,favouriteFood){
  this.name= name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasksToComplete = [];

}

Hero.prototype.countTasks= function(){
   return this.tasksToComplete.length;

}

Hero.prototype.addTask = function(task){
    this.tasksToComplete.push(task);

}

Hero.prototype.eatFood = function(itemToEat){
    this.health += itemToEat.replenishment;

}

module.exports = Hero;

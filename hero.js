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
  if(itemToEat.name === this.favouriteFood){
    this.health += itemToEat.replenishment*1.5
  }else{
    this.health += itemToEat.replenishment;
  }
}

Hero.prototype.sortTasksByDifficulty = function(){
  return this.tasksToComplete.sort(function(a,b) {
    return (a.difficultyLevel)-(b.difficultyLevel);
});
}


Hero.prototype.sortTasksByUrgency = function(){
  return this.tasksToComplete.sort(function(a,b) {
    return (a.urgencyLevel)-(b.urgencyLevel);
});
}

Hero.prototype.sortTasksByReward = function(){
  return this.tasksToComplete.sort(function(a,b) {
    return (a.reward)-(b.reward);
});
}


module.exports = Hero;

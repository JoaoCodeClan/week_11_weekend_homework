const Hero = require("../hero.js");
const Task = require("../task.js");
const Food = require("../food.js");
const Rat = require("../rat.js");
const UrgencyLevel = require("../urgencyLevel.js");
const DifficultyLevel = require("../difficultyLevel.js");
const assert = require("assert");

describe("Hero", function(){
 let task1;
 let task2;
 let task3;
 let task4;
 let food;
 let food1;
 let rat;
 let hero;

 beforeEach(function(){
   task1= new Task(DifficultyLevel.Easy, UrgencyLevel.NotUrgent, 10, true);
   task2= new Task(DifficultyLevel.Medium, UrgencyLevel.Urgent, 20, true);
   task3= new Task(DifficultyLevel.Hard, UrgencyLevel.Emergency, 30, false);
   task4= new Task(DifficultyLevel.Very_Hard, UrgencyLevel.ForYesterday, 50, false);
   food = new Food("cheese", 10, false);
   food1 = new Food("Pizza", 50, false);
   rat = new Rat();
   hero = new Hero("Groot", 200,"Pizza");
 });

 it("should be able to have a name", function(){
   assert.strictEqual(hero.name, "Groot");

 });

 it("should be able to have a value for health ", function(){
   assert.strictEqual(hero.health, 200);

 });
 it("should be able to have a favourite food", function(){
   assert.strictEqual(hero.favouriteFood, "Pizza");

 });

 it("tasksToComplete should start empty", function(){
   assert.strictEqual(hero.countTasks(),0);

 });

 it("should be able to add tasks to taskstocomplete", function(){
   hero.addTask(task1);
   assert.strictEqual(hero.countTasks(),1);

 });

 it("hero should be able to eat food, and health should go up by the replenishment value", function(){
   hero.eatFood(food);
   assert.strictEqual(hero.health,210);

 });

 it("If the food is their favourite food, their health should go up by 1.5 * value.", function(){
   hero.eatFood(food1);
   assert.strictEqual(hero.health,275);

 });

 it("A hero should be able to sort their tasks by difficulty", function(){
   hero.addTask(task3);
   hero.addTask(task1);
   hero.addTask(task2);
   hero.addTask(task4);
   assert.deepStrictEqual(hero.sortTasksByDifficulty(),[task1, task2, task3, task4]);
 });

 // it("A hero should be able to sort their tasks by  urgency ", function(){
 //
 //
 // });
 //
 // it("A hero should be able to sort their tasks by reward.", function(){
 //
 //
 // });

})

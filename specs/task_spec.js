const Task = require("../task.js");
const UrgencyLevel = require("../urgencyLevel.js");
const DifficultyLevel = require("../difficultyLevel.js");
const assert = require("assert");

describe("Task", function(){

let task1;
let task2;
let task3;
let task4;

 beforeEach(function(){
   task1= new Task(DifficultyLevel.Easy, UrgencyLevel.NotUrgent, 10, true);
   task2= new Task(DifficultyLevel.Medium, UrgencyLevel.Urgent, 20, true);
   task3= new Task(DifficultyLevel.Hard, UrgencyLevel.Emergency, 30, false);
   task4= new Task(DifficultyLevel.Very_Hard, UrgencyLevel.ForYesterday, 50, false);
 });

 it("should be able to have a difficulty level value", function(){
   assert.strictEqual(task1.difficultyLevel, 1);

 })

 it("should be able to have an urgency level value", function(){
   assert.strictEqual(task2.urgencyLevel, 2);

 })

 it("should be able to have a value for reward", function(){
   assert.strictEqual(task3.reward, 30);

 })

 it("should be able to return boolean for iscomplete", function(){
   assert.strictEqual(task1.iscomplete, true);

 })

})

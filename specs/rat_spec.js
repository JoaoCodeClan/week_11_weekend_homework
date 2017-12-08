const Rat = require("../rat.js");
const Food = require("../food.js");
const assert = require("assert");

describe("rat", function(){

let rat;
let food;
 beforeEach(function(){
   rat = new Rat();
   food = new Food("pasta", 10, false);

 });


 it("should be able to Poison an item", function(){
   rat.poisonItem(food);
   assert.strictEqual(food.isPoisoned, true);

 })






})

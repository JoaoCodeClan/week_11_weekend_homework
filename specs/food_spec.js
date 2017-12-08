const Food = require("../food.js");
const assert = require("assert");

describe("Food ", function(){

let food ;

beforeEach(function(){

  food = new Food("pasta", 10, false);

});

it("food should have a name", function(){
  assert.strictEqual(food.name, "pasta");
})

it("food should have a replenishment value", function(){
  assert.strictEqual(food.replenishment, 10);
})

it("food should be able to check if its poisoned", function(){
  assert.strictEqual(food.isPoisoned, false)
})

})

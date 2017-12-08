const Food = require("../food.js");
const assert = require("assert");

describe("Food ", function(){

let food ;

beforeEach(function(){

  food = new Food("pasta", 10, "notPoisoned");

});

it("food should have a name", function(){
  assert.strictEqual("pasta", food.name);
})

it("food should have a replenishment value", function(){
  assert.strictEqual(10, food.replenishment);
})

it("food should be able to check if its poisoned", function(){
  assert.strictEqual(10, food.replenishment);
})

})

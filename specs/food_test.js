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


})

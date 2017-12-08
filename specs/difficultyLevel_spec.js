const DifficultyLevel = require("../difficultyLevel.js");
const assert = require("assert");

describe("DifficultyLevel", function(){

let dif;
let dif1;
let dif2;
let dif3;

 beforeEach(function(){
   dif= DifficultyLevel.Easy;
   dif1= DifficultyLevel.Medium;
   dif2= DifficultyLevel.Hard;
   dif3 = DifficultyLevel.Very_Hard;

 });


 it("should be able to get a value for difficulty level easy", function(){

   assert.strictEqual(0,dif);

 })
 it("should be able to get a value for difficulty level medium", function(){

   assert.strictEqual(1,dif1);

 })

 it("should be able to get a value for difficulty level hard", function(){

   assert.strictEqual(2,dif2);

 })
})

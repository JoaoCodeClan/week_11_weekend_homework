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


 it("should be able to get a value  of 0 for difficulty level easy", function(){

   assert.strictEqual(dif, 1);

 })
 it("should be able to get a value of 1 for difficulty level medium", function(){

   assert.strictEqual(dif1, 2);

 })

 it("should be able to get a value of 2 for difficulty level hard", function(){

   assert.strictEqual(dif2, 3);

 })
 it("should be able to get a value of 3 for difficulty very hard", function(){

   assert.strictEqual(dif3, 4);

 })


})

const UrgencyLevel = require("../urgencyLevel.js");
const assert = require("assert");

describe("UrgencyLevel", function(){

let noturg;
let urg;
let emer;
let foryest;

 beforeEach(function(){
   noturg= UrgencyLevel.NotUrgent;
   urg= UrgencyLevel.Urgent;
   emer= UrgencyLevel.Emergency;
   foryest = UrgencyLevel.ForYesterday;

 });


 it("should be able to get a value  of 0 for not urgent", function(){

   assert.strictEqual(1,noturg);

 })
 it("should be able to get a value  of 1 for urgent", function(){

   assert.strictEqual(2,urg);

 })
 it("should be able to get a value  of 2 for emergency", function(){

   assert.strictEqual(3,emer);

 })

 it("should be able to get a value  of 3 for Foryesterday", function(){

   assert.strictEqual(4,foryest);

 })


})

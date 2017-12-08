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


 it("should be able to get a value  of 1 for not urgent", function(){

   assert.strictEqual(noturg, 1);

 })
 it("should be able to get a value  of 2 for urgent", function(){

   assert.strictEqual(urg, 2);

 })
 it("should be able to get a value  of 3 for emergency", function(){

   assert.strictEqual(emer, 3);

 })

 it("should be able to get a value  of 4 for Foryesterday", function(){

   assert.strictEqual(foryest, 4);

 })


})

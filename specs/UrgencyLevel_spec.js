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

   assert.strictEqual(0,noturg);

 })
 it("should be able to get a value  of 1 for urgent", function(){

   assert.strictEqual(1,urg);

 })


})

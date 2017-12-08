const _ = require('lodash');

const Rat = function(){

}

Rat.prototype.poisonItem = function(item){
  item.isPoisoned = true; 
}

module.exports = Rat;

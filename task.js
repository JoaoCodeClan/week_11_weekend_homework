const _ = require('lodash');


const Task = function(difficultyLevel, urgencyLevel, reward, iscomplete){
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.iscomplete = iscomplete;

}

module.exports = Task;

// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
var GameScore = AV.Object.extend("GameScore");
var gameScore = new GameScore();
gameScore.set("score", 1337);
gameScore.set("playerName", "Sean Plott");
gameScore.set("cheatMode", false);
gameScore.save(null, {
  success: function(gameScore) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + gameScore.id);
  },
  error: function(gameScore, error) {
    // Execute any logic that should take place if the save fails.
    // error is a AV.Error with an error code and description.
    alert('Failed to create new object, with error code: ' + error.description);
  }
});
  response.success("Hello world From ZYB!");
});

AV.Cloud.define("GetEnemy",function(request,response) {
	var Enemy = AV.Object.extend("Enemy");
	var enemy = Enemy();
	var query = new AV.Query(Enemy);
	var errorMsg = "";
	query.first({
 	 success: function(object) {
   	 // Successfully retrieved the object.
  },
  error: function(error) {
    errorMsg = "Error: " + error.code + " " + error.message;
  }
});
	response.success("Hello world From ZYB!" + errorMsg);
});

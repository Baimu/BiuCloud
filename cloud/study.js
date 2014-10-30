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
    errorMsg = "Error1: " + error.code + " " + error.message;
  }
});
	response.success("Hello world From ZYB!" + errorMsg);
});

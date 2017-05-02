var Twitter = require('twitter-node-client').Twitter;
var fs = require('fs');

var config = {
    	"consumerKey": "2WU2jItt980lnapbbBRduhQBB",
    	"consumerSecret": "bkMVHE8JGRveqnFl8g1GyOHh9rVOKtboSAQxBxrvNhM4RAHaaC",
    	"accessToken": "2574387926-gejKNOghqubr9JVu50Ssk19LYqVuPg5wClu38a6",
    	"accessTokenSecret": "AiFYCZ3mXoh5GpxBSzJ0gYkXO30XleK6biCi3eulk1179",
};

var twitter = new Twitter(config);

let error = function(){
  console.log("Oops");
};

let success = function(body){
  json_data = JSON.parse(body);
  fs.writeFile('solution.json', JSON.stringify(json_data.statuses, null, 3), function(err){
      console.log('File successfully written! - Check your project directory for the solution.json file');
  });
};

let tes = twitter.getSearch({'q':'jambi '}, error, success);

var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {

        var newDude = req.body;

        // comparing scores here
        var scoreDiffs = [];
        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                diff += Math.abs(friends[i].scores[j] - parseInt(newDude.scores[j]));
            }
            scoreDiffs.push(diff);
        };

        // calculating the best match
        var matchIndex = scoreDiffs.indexOf(Math.min(...scoreDiffs));
        var match = friends[matchIndex];

        // adding new dude's stuff
        friends.push(newDude);
        
        // give them their match!
        return res.json(match);
    });
};

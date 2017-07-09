var tile = require("Tile");
var entities = require("Entities");
var relations = require("Relations");

var utils = {

    pickRandom : function(set) {
        if(set instanceof Array) {
            return set[Math.floor(Math.random() * set.length)];
        } else if(typeof(set) == "object") {
            var keys = Object.keys(set);
            return set[keys[Math.floor(Math.random() * keys.length)]];
        } else {
            return set;
        }
    },

    randomTile : function() {
        var a = utils.pickRandom(entities);
        var b = utils.pickRandom(entities);
        while(a == b) b = utils.pickRandom(entities);
        return tile(a, b, utils.pickRandom(relations));
    }
}

module.exports = utils;

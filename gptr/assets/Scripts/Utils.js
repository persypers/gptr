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
        return tile(utils.pickRandom(entities), utils.pickRandom(entities), utils.pickRandom(relations));
    }
}

module.exports = utils;

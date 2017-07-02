var utils = require("Utils");

var model = {

    tiles : [],
    gold : 100,
    rating : 10,

    init : function() {
        for(var i = 0; i < 30; i++) {
            this.tiles.push(utils.randomTile());
        }
    }

}

model.init();

module.exports = model;
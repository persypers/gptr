cc.Class({
    extends: cc.Component,

    properties: {
        tilePrefab : cc.Prefab,
    },

    // use this for initialization
    onLoad: function () {
        this.tiles = [];
    },

    addTile : function(tile) {
        
    },

    setSkill : function(skill) {
        for(var i = 0; i < skill.inputLength; i++) {
            var tile = this.tiles[i];
            if(tile) {
                tile.active = true;
            }
        }
    },

    
});

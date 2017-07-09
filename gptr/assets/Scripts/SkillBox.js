cc.Class({
    extends: cc.Component,

    properties: {
        tilePrefab : cc.Prefab,
        skillLabel : cc.Label,
    },

    // use this for initialization
    onLoad: function () {
        this.setSkill();
    },

    addTile : function(tile) {
        var tileViews = this.node.getComponentsInChildren("TileView");
        for(var i = 0; i < tileViews.length; i++) {
            if(! tileViews[i].tile) {
                tileViews[i].set(tile);
                return;
            }
        }
        tileViews[tileViews.length - 1].set(tile);
    },

    getTiles : function() {
        var res = [];
        var tileViews = this.node.getComponentsInChildren("TileView");
        for(var i = 0; i < tileViews.length; i++) {
            if(tileViews[i].tile) res.push(tileViews[i].tile);
        }
        return res;
    },

    setTileCount : function(numberOfTiles) {
        var tileViews = this.node.getComponentsInChildren("TileView");
        for(var i = tileViews.length; i < numberOfTiles; i++) {
            var tile = cc.instantiate(this.tilePrefab);
            tile.parent = this.node;
            tile.setLocalZOrder(-1);
        }
        for(var i = numberOfTiles; i < tileViews.length; i++) {
            tileViews[i].node.destroy();
        }
    },

    setSkill : function(skill) {
        if(!skill) {
            this.skillLabel.string = "Choose skill!";
            this.setTileCount(1);
        } else {
            this.setTileCount(skill.inputLength);
            this.skill = skill;
            this.skillLabel.string = skill.text;
        }
    }
});

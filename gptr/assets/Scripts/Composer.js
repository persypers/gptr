var utils = require("Utils");
var model = require("Model");

cc.Class({
    extends: cc.Component,

    properties: {
        tilePrefab : cc.Prefab,
        skillBoxPrefab : cc.Prefab,
        chainContent : cc.Node,
        tileSelectorRoot : cc.Node,
        tileSelectorContent : cc.Node,
        skillSelectorRoot : cc.Node,
        skillSelectorContent : cc.Node,
    },

    // use this for initialization
    start: function () {
        cc.scene = this;
        model.init();

        var trendTile = utils.randomTile();
        this.nextSkill(trendTile);
    },

    nextSkill : function(firstTile) {
        var skillBox = cc.instantiate(this.skillBoxPrefab).getComponent("SkillBox");
        skillBox.node.parent = this.chainContent;
        this.skillBox = skillBox;
        skillBox.addTile(firstTile);

        this.tileSelectorRoot.active = false;
        this.skillSelectorRoot.active = true;
    },

    onSkillSelected : function(event, customData) {
        console.log(event, customData);
        var skill = require("Skills")[customData];
        this.skillBox.setSkill(skill);
        if(this.checkSkillBox()) return;
        this.openTileSelection();
    },

    onTileSelected : function(event) {
        console.log(event);
        var tile = event.target.getComponent("TileView").tile;
        this.skillBox.addTile(tile);
        if(this.checkSkillBox()) return;
        this.openTileSelection();
    },

    openTileSelection : function() {
        //clear prev filter screen
        var tiles = this.tileSelectorContent.children;
        for(var i = tiles.length - 1; i >= 0; i--) {
            tiles[i].destroy();
        }

        tiles = [];
        var skill = this.skillBox.skill;
        var skillTiles = this.skillBox.getTiles();
        for(var i = 0; i < model.tiles.length; i++) {
            var predictedRes = (skill.apply(skillTiles[0], model.tiles[i])) 
            model.tiles[i].modelRes = predictedRes;
            if(predictedRes) {
                tiles.push(model.tiles[i]);
            }
        }
        for(var i = 0; i < tiles.length; i++) {
            var tileView = cc.instantiate(this.tilePrefab);
            tileView.getComponent("TileView").set(tiles[i]);
            tileView.parent = this.tileSelectorContent;
            tileView.on(cc.Node.EventType.TOUCH_START, this.onTileSelected.bind(this));
        }
        this.tileSelectorRoot.active = true;
        this.skillSelectorRoot.active = false;
    },

    checkSkillBox : function() {
        var skill = this.skillBox.skill;
        var skillTiles = this.skillBox.getTiles();
        if(skillTiles.length == skill.inputLength) {
            var res = skill.apply(skillTiles);
            for(var i = 0; i < skillTiles.length; i++){
                console.log(skillTiles[i].modelRes);
            }
            console.log(res);
            this.nextSkill(res);
            return true;
        }
    }




});

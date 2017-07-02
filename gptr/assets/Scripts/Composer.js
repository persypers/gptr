var utils = require("Utils");

cc.Class({
    extends: cc.Component,

    properties: {
        tilePrefab : cc.Prefab,
        skillPrefab : cc.Prefab,
        chainContent : cc.Node,
        tileSelectorRoot : cc.Node,
        tileSelectorContent : cc.Node,
        skillSelectorRoot : cc.Node,
        skillSelectorContent : cc.Node,
    },

    // use this for initialization
    start: function () {
        var tile = utils.randomTile();
        var tileView = cc.instantiate(this.tilePrefab);
        tileView.getComponent("TileView").set(tile);
        tileView.parent = chainContent;
    },

    begin: function(tile) {
        this.tile = tile;
        this.skill = null;
        for(var i = this.chainContent.children.length - 1; i >=0; i--) {
            this.chainContent.children[i].destroy();
        }
        var firstTileView = cc.instantiate(this.tilePrefab);
        firstTileView.getComponent("TileView").set(tile);
        firstTileView.parent = this.chainContent;
    },

    onSelectSkill : function() {
        var availableSkills = [];
        var tile = this.tile;
        for(var k in Skills) {
            var skill = Skills[k];
            var subset = skill.rule[tile];
            if(subset instanceof Array || Tiles[subset]) {
                availableSkills.push(skill);
            }
        }
        for(var i = this.skillSelectorContent.children.length - 1; i >=0; i--) {
            this.skillSelectorContent.children[i].destroy();
        }

        for(var i = 0; i < availableSkills.length; i++) {
            var skillView = cc.instantiate(this.skillPrefab);
            skillView.getComponent("SkillView").set(availableSkills[i]);
            skillView.parent = this.skillSelectorContent;
        }
        this.skillSelectorRoot.active = true;
    },

    onSkillSelected : function(skill) {
        this.skill = skill;
        var moreTiles = skill.inputLength - 1;
        for(var i = 0; i < moreTiles; i++) {
            var tileView = cc.instantiate(this.tilePrefab);
            tileView.parent = this.chainContent;
        }
        var skillView = cc.instantiate(this.skillPrefab);
        skillView.getComponent("SkillView").set(skill);
        skillView.parent = this.skillSelectorContent;
        if(moreTiles == 0) {
            this.applySkill;
        }
    },

    applySkill: function() {
        var chainLength = this.chainContent.children.length;
        var skillView = this.chainContent.children[chainLength - 1];
        var skill = skillView.skill;
        cc.assert(skillView.skill == this.skill);
        var tiles = [];
        for(var i = skill.inputLength; i > 0; i--) {
            tiles.push(this.chainContent.children[chainLength - i - 1].tile);
        }
        var result = skill.rule;
        for(var i = 0; i < tiles.length - 1; i ++) {
            var nextTile = tiles[i];
            result = result[nextTile.id];
        }
        cc.assert(Tiles[result]);
        this.tile = result = Tiles[result];
        var lastTileView = cc.instantiate(this.tilePrefab);
        lastTileView.getComponent("TileView").set(result);
        lastTileView.parent = this.chainContent;
    },

    onSelectFact : function() {

    }
});

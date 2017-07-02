cc.Class({
    extends: cc.Component,

    properties: {
        iconA : cc.Sprite,
        iconB : cc.Sprite,
        iconOp : cc.Sprite,
    },

    // use this for initialization
    onLoad: function () {

    },

    set : function(tile) {
        this.node.tile = this.tile = tile;
        var self = this;
        var spriteFrames = [tile.a.icon, tile.b.icon, tile.op.icon];
        cc.loader.loadResArray(res, cc.SpriteFrame, function(data) {
            self.iconA.spriteFrame = data[0];
            self.iconB.spriteFrame = data[1];
            self.iconOp.spriteFrame = data[2];
        });
    }
});

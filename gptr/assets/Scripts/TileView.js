cc.Class({
    extends: cc.Component,

    properties: {
        iconA : cc.Sprite,
        iconB : cc.Sprite,
        iconOp : cc.Sprite,
        text : cc.Label,
    },

    // use this for initialization
    onLoad: function () {

    },

    set : function(tile) {
        this.node.tile = this.tile = tile;
        if(tile) {
            var self = this;
            var spriteFrames = [tile.a.icon, tile.b.icon, tile.op.icon];
            cc.loader.loadResArray(spriteFrames, cc.SpriteFrame, function(err, data) {
                self.iconA.spriteFrame = data[0];
                self.iconB.spriteFrame = data[1];
                self.iconOp.spriteFrame = data[2];
            });
            this.text.string = tile.a.text + ' ' + tile.op.text + ' ' + tile.b.text;
        } else {
            this.iconA.spriteFrame = null;
            this.iconB.spriteFrame = null;
            this.iconOp.spriteFrame = null;
            this.text.string = "Choose tile!";
        }
    }
});

cc.Class({
    extends: cc.Component,

    properties: {
        text : cc.Label,
        icon : cc.Sprite,
    },

    // use this for initialization
    onLoad: function () {

    },

    set: function(skill) {
        this.skill = this.node.skill = skill;
    }
});

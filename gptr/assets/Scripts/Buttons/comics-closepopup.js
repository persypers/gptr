cc.Class({
    extends: cc.Component,

    properties: {
        popupNode: cc.Node,
    },

    // use this for initialization
    onLoad: function () {

    },

    onClick: function () {
      this.popupNode.active = false;  
    },
});

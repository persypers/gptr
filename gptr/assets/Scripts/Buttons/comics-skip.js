cc.Class({
    extends: cc.Component,

    properties: {
        popupNode: cc.Node,
    },

    // use this for initialization
    onLoad: function () {

    },

//ставим на картинку последний тайл и открываем попап с результатами
    onClick: function () {
      this.popupNode.active = true;  
    },
});

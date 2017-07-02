cc.Class({
    extends: cc.Component,

    properties: {
        popupNode: cc.Node,
    },

    // use this for initialization
    onLoad: function () {

    },

//кнопка листает подряд все кадры (большие тайлы)
//на последнем кадре меняет своё название на "Готово!" и открывает попап с результатами
    onClick: function () {
      this.popupNode.active = true;  
    },
});

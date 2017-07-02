cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {

    },

    //open Compose scene
    onClick: function () {
        cc.director.loadScene("Compose");
    }

});

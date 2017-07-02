cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {

    },

//open Compose scene
//первым тайлом ставим тайл из попапа
//на верхнюю панель к рейтингу, настроению, деньгам добавляем целевое значение, которое надо набрать (0\120)
    onClick: function () {
        cc.director.loadScene("Compose");
    }

});

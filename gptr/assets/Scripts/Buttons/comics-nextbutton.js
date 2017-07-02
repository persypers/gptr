cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {

    },

//переходим на главный экран
//увеличиваем все счетчики (деньги, рейтинг, настроение) на главном экране на величину, указанную в попапе в результатах
    onClick: function () {
      cc.director.loadScene("Main-screen");  
    },
});

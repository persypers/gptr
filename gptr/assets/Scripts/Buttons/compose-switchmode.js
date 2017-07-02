var VideoModeOn = true;
var videotext = "Редактировать";
var boostertext = "Бустеры";

cc.Class({
    extends: cc.Component,

    properties: {
        boostersNode : cc.Node,
        chooseVideo : cc.Node,
        buttonLabel : cc.Label,
    },


    // use this for initialization
    onLoad: function () {
        this.boostersNode.active = false;
        this.chooseVideo.active = true;
        this.VideoModeOn = true;

        this.buttonLabel.getComponent(cc.Label).string = boostertext;
    },
    
    
//переключаем по клику две ноды: с выбором бустеров и с выбором видео
    onClick: function () {
        var label = this.buttonLabel.getComponent(cc.Label);


        if (VideoModeOn) {
            //переходим в режим бустеров
            //все кнопки на таймлайне становятся неактивными
            this.buttonLabel.getComponent(cc.Label).string = videotext;

            this.chooseVideo.active = false;
            this.boostersNode.active = true;
            VideoModeOn = false;

        } else {
            //переходим в режим редактированияv
            this.buttonLabel.getComponent(cc.Label).string = boostertext;

            this.chooseVideo.active = true;
            this.boostersNode.active = false;
            VideoModeOn = true;
        }
    },

});

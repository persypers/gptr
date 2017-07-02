var SkillChooseEnabled = false;

cc.Class({
    extends: cc.Component,

    properties: {
        skillNode: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        this.skillNode.active = false;
        SkillChooseEnabled = false;
    },

//открываем-закрываем попапчик со скилами
//работает и на выбранном скиле тоже -- можем поменять скил
    onClick: function () {
        
       if (SkillChooseEnabled) {
           this.skillNode.active = false;
           SkillChooseEnabled = false;
       } else {
           this.skillNode.active = true;
           SkillChooseEnabled = true;
       }
       
    },
});

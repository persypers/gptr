var Entities = [
    {
        text : "aliens",
        icon : "Sprites/aliens.png"
    },
    {
        text : "gay",
        icon : "Sprites/gay.png"
    },
    {
        text : "Ivan Grozny",
        icon : "Sprites/ivan.png"
    },
    {
        text : "Putin",
        icon : "Sprites/putin.png"
    },
    {
        text : "Kaluga",
        icon : "Sprites/kaluga.png"
    }
];

for(var i = 0; i < Entities.length; i++) {
    Entities[i].id = i;
}

module.exports = Entities;
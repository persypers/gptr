var Relations = require("Relations");
var is = Relations.is;
var not = Relations.not;
var love = Relations.love;
var hate = Relations.hate;

var Tile = require("Tile");
var tile = Tile.create;

var Skills = {

imply : {
    text : "->",
    icon : "Sprites/imply.png",
    inputLength : 2,
    apply : function(p, q) { 
    
    if(p instanceof Array) {
        q = p[1];
        p = p[0];
    }
    // (A+B)(A+C) = (A+C) 
    // (p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b) 
    if( 
        p.op == is 
        && q.op == is 
        && p.a == q.a 
        && p.b != q.b 
        ) { 
    return tile(p.a, q.b, is); 
    } 

    //(AISB)(ANOTC)=(BNOTC) 
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == is
        && q.op == not
        && p.a == q.a
        && p.b != q.b
        ) {
    return tile(p.b, q.b, not);
    }

    //(AISB)(CNOTA)=(BNOTC) 
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == is
        && q.op == not
        && p.a == q.b
        && p.b != q.a
        ) {
    return tile(p.b, q.a, not);
    }

    //(AISB)(CNOTA)=(BNOTC) 
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == is
        && q.op == not
        && p.a == q.b
        && p.b != q.a
        ) {
    return tile(p.b, q.a, not);
    }

    //(ANOTB)(CNOTA)=(BISC) 
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == not
        && q.op == not
        && p.a == q.b
        && p.b != q.a
        ) {
    return tile(p.b, q.a, is);
    }
    //(ANOTB)(ANOTC)=(BISC) 
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == not
        && q.op == not
        && p.a == q.a
        && p.b != q.b
        ) {
    return tile(p.b, q.b, is);
        }
    //(ALOVEB)(ALOVEC)=(BLOVEC) 
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == love
        && q.op == love
        && p.a == q.a
        && p.b != q.b
        ) {
    return tile(p.b, q.b, love);
        }
    //(ALOVEB)(AHATEC)=(BHATEC) 
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == love
        && q.op == hate
        && p.a == q.a
        && p.b != q.b
        ) {
        return tile(p.b, q.b, hate);
    }
    //(ALOVEB)(CHATEA)=(CNOTB)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == love
        && q.op == hate
        && p.a == q.b
        && p.b != q.a
        ) {
        return tile(p.b, q.a, not);
    }
    //(ALOVEB)(BHATEC)=(AHATEC)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == love
        && q.op == hate
        && p.b == q.a
        && p.a != q.b
        ) {
    return tile(p.a, q.b, hate);
        }
    //(AloveB)(ChateB)=(AhateC)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == love
        && q.op == hate
        && p.b == q.b
        && p.a != q.a
        ) {
    return tile(p.a, q.a, hate);
        }
    //(AhateB)(AhateC)=(BisC)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == hate
        && q.op == hate
        && p.a == q.a
        && p.b != q.b
        ) {
    return tile(p.b, q.b, is);
        }
    //(AhateB)(ChateA)=(BisC)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == hate
        && q.op == hate
        && p.a == q.b
        && p.b != q.a
        ) {
    return tile(p.b, q.a, is);
        }
    //(AhateB)(BhateC)=(AisC)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == hate
        && q.op == hate
        && p.b == q.a
        && p.b != q.b
        ) {
    return tile(p.a, q.b, is);
        }
    //(AhateB)(ChateB)=(AisC)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == hate
        && q.op == hate
        && p.b == q.b
        && p.a != q.a
        ) {
    return tile(p.a, q.a, is);
        }
    //(A+B)(AloveC)=(BloveC)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == is
        && q.op == love
        && p.a == q.a
        && p.b != q.b
        ) {
    return tile(p.b, q.b, love);
        }
    //(A+B)(BloveC)=(A+C)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == is
        && q.op == love
        && p.b == q.a
        && p.a != q.b
        ) {
    return tile(p.a, q.b, is);
        }
    //(A+B)(CloveA)=(CloveB)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == is
        && q.op == love
        && p.a == q.b
        && p.b != q.a
        ) {
    return tile(q.a, p.b, love);
        }
    //(A+B)(AhateC)=(B-C)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == is
        && q.op == hate
        && p.a == q.a
        && p.b != q.b
        ) {
    return tile(p.b, q.b, not);
        }
    //(A+B)(ChateA)=(ChateB)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == is
        && q.op == hate
        && p.a == q.b
        && p.b != q.a
        ) {
    return tile(q.a, p.b, hate);
        }
    //(A-B)(AloveC)=(BhateC)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == not
        && q.op == love
        && p.a == q.a
        && p.b != q.b
        ) {
    return tile(p.b, q.b, hate);
        }
    //(A-B)(BloveC)=(AhateC)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == not
        && q.op == love
        && p.b == q.a
        && p.a != q.b
        ) {
    return tile(p.a, q.b, hate);
        }
    //(A-B)(CloveA)=(ChateB)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == not
        && q.op == love
        && p.a == q.b
        && p.b != q.a
        ) {
    return tile(q.a, p.b, hate);
        }
    //(B-A)(CloveA)=(ChateB)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == not
        && q.op == love
        && p.b == q.b
        && p.a != q.a
        ) {
    return tile(q.a, p.a, hate);
        }
    //(A-B)(AhateC)=(B+C)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == not
        && q.op == hate
        && p.a == q.a
        && p.b != q.b
        ) {
    return tile(p.b, q.b, is);
        }
    //(A-B)(ChateA)=(CloveB)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == not
        && q.op == hate
        && p.a == q.b
        && p.b != q.a
        ) {
    return tile(q.a, p.b, love);
        }
    //(A+B)(BhateC)=(AloveC)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == is
        && q.op == hate
        && p.b == q.a
        && p.a != q.b
        ) {
    return tile(p.a, q.b, love);
        }
    //(A-B)(BhateC)=(CloveA)
    //(p.a p.op p.b) (q.a q.op q.b) = (res.a res.op res.b)
    if (
        p.op == not
        && q.op == hate
        && p.b == q.a
        && p.a != q.b
        ) {
    return tile(q.b, p.a, love);
        }

    }
    }
};

module.exports = Skills;
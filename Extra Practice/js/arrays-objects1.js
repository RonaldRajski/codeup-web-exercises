(function(){

    'use strict';

//1. Write a function that logs everything in an array.
    function logList(list) {
        return list.map(function (val) {
            return val;
        });
    }

//2. Write a function that logs the first and last item in an array.
    function logFirstAndLast(list) {
        var first = list[0];
        var last = list[list.length-1];
        return [first, last];
    }

//3. Write a function that returns each string in this array in all uppercase letters.
    function toUpperCase(list) {
        return list.map(function (val) {
            return val.toUpperCase();
        });
    }

//4. Write a function that returns each string in this array in all lowercase letters.
    function toLowerCase(list) {
        return list.map(function (val) {
            return val.toLowerCase();
        });
    }

//5. Write a function that accepts an array of objects and logs the color attribute of each.
    function getColors(list) {
        return list.map(function (obj) {
            return obj.color;
        });
    }

//6. Write a function that logs the object with the greatest strength attribute.
    function getStrongest(orcs) {
        var strongest = 0;
        return orcs.filter(function (obj) {
            if (obj.strength > strongest) {
                return (strongest = obj.strength);
            }
        });
    }

//7. Write a function that logs the object with the lowest strength attrubute.
    function getWeakest(orcs) {
        var weakest = orcs[0].strength;
        return orcs.filter(function (obj) {
            if (obj.strength < weakest) {
                return (weakest = obj.strength);
            }
        });
    }


//8. Write a function that lists the weapons for the Strongest Orc.
    function getStrongestWeapons(orcs) {
        var orcObj = getStrongest(orcs);
        var weapons = orcObj[0].weapons;
        return weapons;
    }


//9. Write a function that lists the Orc that has the most the weapons.
    function getMostWeapons(orcs) {
        var longest = 0;
        var longestOrcs = [];
        orcs.forEach(function(orc) {
            if (orc.weapons.length > longest) {
                longestOrcs = [orc];
                longest = orc.weapons.length;
            } else if (orc.weapons.length === longest) {
                longestOrcs.push(orc);
            }
        });
        return longestOrcs;
    }


    function getMostWeapons2(orcs) {
        return orcs.sort(function(a,b){
            a.weapons.length - b.weapons.length;
        }).filter(function(value,index,array){
            return value.weapons.length == array[0].weapons.length;
        });
    }

})();
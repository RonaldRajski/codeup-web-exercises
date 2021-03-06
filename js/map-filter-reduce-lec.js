"use strict";

$(document).ready(function() {

    /****************** MAP, FILTER, REDUCE ******************/

    // Array of MacBookPro{} objects
    var mbpModels = [
        {
            id: 'MA464LL/A',
            desc: 'Apple MacBook Pro 15-Inch "Core Duo" 2.0',
            model: 'A1150',
            year: '2006',
            price: 3199
        },
        {
            id: 'MB986LL/A',
            desc: 'Apple MacBook Pro 15-Inch "Core 2 Duo" 2.8',
            model: 'A1286',
            year: 'Mid-2009',
            price: 2799
        },
        {
            id: 'MD311LL/A ',
            desc: 'Apple MacBook Pro 17-Inch "Core i7" 2.4',
            model: 'A1297',
            year: 'Late-2011',
            price: 2399
        },
        {
            id: 'MGXA2LL/A',
            desc: 'Apple MacBook Pro 15-Inch "Core i7" 2.2',
            model: 'A1398',
            year: 'Mid-2014',
            price: 2299
        }
    ];

    // *****************   ******     ******************//
    // *****************  TODO: MAP() ******************//
    // *****************   ******     ******************//

    // Print a list of id's of the mbpModels array
    //  1. Use forEach()
    //  2. Use map()
    //  3. Use ES6

    let ids =[];
    mbpModels.forEach(function (mbp){
        ids.push(mbp.id)
    });

    /********************************* 1 *********************************/

    //  1. Using forEach()

    $("#forEach").html(createList(ids));
    /********************************* 2 *********************************/

    //  2. Using map()

    let idsMap = mbpModels.map(function (mbp){
        return mbp.id;
        })
    /********************************* 3 *********************************/
    //  3. Use ES6

    var idsES6 = mbpModels.map(mbp => mbp.id);
    // 1 line of code

    console.log("idsES6: ");
    console.log(idsES6);

    /**************************** createList() ***************************/
    /*********** creates an HTML list from an array of strings ***********/
    function createList(arr) {
        var html = '';
        arr.forEach(function (item) {
            html += '<li>' + item + '</li>';
        });
        return html;
    }

    // *****************   ******     ******************//
    // **************  TODO: FILTER() ******************//
    // *****************   ******     ******************//

    // Print a list of the models made in 2011 and later
    //  1. Use forEach()

    let forEach2011 = [];
    mbpModels.forEach(function (mbp){
        // get the current year
        let thisModelYear = getYear(mbp.year);

        if(thisModelYear >=2011){
            forEach2011.push(mbp.desc '<strong>(` +mbp.year + </strong>');
        }

    });
    $("#filterForEach"):html(createList(forEach2011));



    // var firstNames = instructors.filter(function (instructor){
    //    return instructor.first.length <= 6;
    //
    //    // es6
    //
    // var firstNames = instructors.filter(instructor=>instructor.first.length <=6);
    //
    //
    // })


    //  2. Use map()
    //  3. Use ES6



    /**************************** LEAVE IN FOR STUDENTS ***********************************/
    /*********************** function to get year from string *****************************/
    function getYear(yearString) {
        var yearArr = yearString.split('');
        var newArr = [];
        for(let i = yearArr.length - 4; i < yearArr.length; i++) {
            newArr.push(yearArr[i]);
        }
        return newArr.join('');
    }
    /********************* END function to get year from string ***************************/

    /********************************* 1 *********************************/
    //  1. Use forEach()

    /********************************* 2 *********************************/
    //  2. Use filter()

    let filter2011

    /********************************* 3 *********************************/
    //  3. Use ES6

    let es62011 = mpbModels.filter(mbp => getYear(mbp.year))

    // *****************   ******     ******************//
    // **************  TODO: REDUCE() ******************//
    // *****************   ******     ******************//

    // Determine the total value of all MacBook Pros together
    //  1. Use forEach()
    //  2. Use reduce()
    //  3. Use ES6

    /********************************* 1 *********************************/
    //  1. Use forEach()

    let totalValueFE = 0;
    mpbModels.forEach(function (mbp){
        totalValueFE += mbp.price;

    })
    console.log(commaThousands(totalValueFE);
    $("#reduceForEach").html(commaThousands(totalValueFE));



    /********************************* 2 *********************************/
    //  2. Use reduce()

    let totalValueReduce = mbpModels.reduce(function (total, mpb) {
            return total += mbp.price;
        },0);
    console.log("Total Value Reduced: " + totalValueReduce);

})




    /********************************* 3 *********************************/
    //  3. Use ES6

    let totalValueESG = mbpModels.reduce((total, mpb) => total +mpb.price, 0);




    /**************************** LEAVE IN FOR STUDENTS **(********************************/
    /*********************** function to get commas in number *****************************/
    function commaThousands(number) {
        var numArr = number.toString().split('');
        var startPos = numArr.length % 3;
        var initialLength = numArr.length;
        var first = true;
        var extra = 0;
        // add commas every third digit from the end
        if( numArr.length <= 3) {
            return number;
        } else {
            for(var i = 0; i < (numArr.length - numArr.length % 3) / 3; i++) {
                console.log('for iteration');
                console.log(i * 3 + extra + startPos);
                if(i*3+extra+startPos >= initialLength+extra) {
                    // console.log('stop');
                    break;
                } else {
                    if((startPos !== 0) && first) {
                        numArr.splice(startPos,0,',');
                        first = false;
                        extra++;
                    } else{
                        numArr.splice((i*3+extra),0,',');
                        extra++;
                    }
                }
            }
            // console.log(numArr.join(''));
            numArr.splice(0,0,'$');
            return numArr.join('');
        }
    }
    /**************************** DON'T WORRY HOW THIS FUNCTION WORKS **(********************************/

});
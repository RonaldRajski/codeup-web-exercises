// console.log(return());

// verify that we built a function called returnYellow
if (typeof returnYellow !== 'function') {
    console.error("It's not a function");
}

if (returnYellow() !== "yellow"){
    console.error("returnYellow does not return the string 'Yellow");
    console.error((returnYellow));
}

describe("returnYellow", function (){
    it('should be a defined function', function (){
        expect(typeof returnYellow).toBe('function');
    });

    it("should return 'yellow'", function (){
        expect(returnYellow()).toBe("yellow");
    })


});
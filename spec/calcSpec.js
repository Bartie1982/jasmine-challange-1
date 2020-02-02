  
describe("What can I drink", function() {

    beforeEach(function() {
        drink = new whatCanIDrink();
    }); 
         
    describe("Checks age", function() {
            it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });    

            
            it("Drink Toddy", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });
            it("Drink Coke", function() {
            var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });
            it("Drink Beer", function() {
            var result = whatCanIDrink(18)
            expect(result).toBe("Drink Beer");
        });
            it("Drink Beer", function() {
            var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        });
            it("Drink whisky", function() {
            var result = whatCanIDrink(30)
            expect(result).toBe("Drink Whisky");
        });
            it("No drink", function() {
            var result = whatCanIDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
            it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});

 
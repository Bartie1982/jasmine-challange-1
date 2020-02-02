  
describe("What can I drink", function() {

    beforeEach(function() {
        drink = new whatCanIDrink();
    }); 
         
    describe("Test age", function() {
            it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });    

            it("Cant tell", function() {
            age = 0;
            expect(age).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
            it("Drink Toddy", function() {
            age <= 14;
            expect(age).toBe("Drink Toddy");
        });
            it("Drink Coke", function() {
            age <= 18;
            expect(age).toBe("Drink Coke");
        });
            it("Drink Beer", function() {
            age <= 21;
            expect(age).toBe("Drink Beer");
        });
            it("Drink whiskey", function() {
            age <= 130;
            expect(age).toBe("Drink Whisky");
        });


    });
});

 
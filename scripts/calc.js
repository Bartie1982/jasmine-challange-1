whatCanIDrink = function() {
    this.value = 0;
};

whatCanIDrink= function(number) {
    if (number <= 0 ) {
        return("Sorry. I can’t tell what drink because that age is incorrect!");
    } 
    if (number <= 14 ) {
        return("Drink Toddy");
    } 
    if (number > 14 && number <= 18  ) {
        return("Drink Coke");
    } 
    if (number > 18 && number <= 21 ) {
        return("Drink Beer");
    } 
    if (number >18 && number <= 130 ) {
        return("Drink Whiskey");
    } else { 
        return("Sorry. I can’t tell what drink because that age is incorrect!");
    }     
};    
    
    
    
    

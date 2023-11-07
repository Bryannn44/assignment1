module.exports = {
    accounts : [1, 6, 10, 9, 43],

    PIN : 123456,

    // #1 PIN Code Authentication
    authenticatePinCode : function(i){
        if(i != this.PIN){
            return "Wrong PIN. Please try again!";
        }else{
            return "Successfully Login";
        }
    },

    // #2 Convert calculator
    convertCalculator : function(amount, country) {
        if(country == "Malaysia"){
            amount = amount * 3.48;
            return amount +"RM"
        }
        else if(country == "US"){
            amount = amount * 0.73;
            return amount +"USD"
        }
        else if(country == "Euro"){
            amount = amount * 0.69
            return amount +"€"
        }
    },

    // #3 Check the currency rate of the country 
    checkCurrRate : function(country) {
        if (country == "US"){
            return "US currency rate is 0.73"
        }
        else if(country == "Malaysia"){
            return "Malaysia currency rate is 3.48";
        }
        else if(country == "Euro"){
            return "Euro currency rate is 0.69";
        }
    },

    //#4 Deposit cash
    depositCash : function(cash, i) {
        if (cash > 0) {
          total = this.accounts[i] += cash;
          return "You just deposited $" + cash + " and your total is $" + total;
        } else{
          return "Invalid amount";
        }
      },

    //#5 Withdraw Cash
    withdrawCash : function(cash, i){
        if(cash < this.accounts[i]){
            balance = this.accounts[i] - cash;
            return "You have withdraw $" + cash + " and left with $" + balance + " in the bank"; 
        }
        else{
            return "You dont have that much money in this account"
        }
    },

}
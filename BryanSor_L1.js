module.exports = {
    accounts : [1, 6, 10, 9, 43],

    PIN : 123456,

    // #1 PIN Code Authentication
    authenticatePinCode : function(i){
        if(i != this.PIN){
            return "Wrong PIN. Please try again!";
        }else{
            return "Success";
        }
    },

    // #2 Convert calculator
    convertCalculator : function(a, i) {
        if(i == "Malaysia"){
            a = a * 3.48;
            return a +"RM"
        }
        else if(i == "US"){
            a = a * 0.73;
            return a +"USD"
        }
        else if(i == "Euro"){
            a = a * 0.69
            return a +"€"
        }
    },

    // #3 Check the currency rate of the country 
    checkCurrRate : function(a) {
        if (a == "US"){
            return "US currency rate is 0.73"
        }
        else if(a == "Malaysia"){
            return "Malaysia currency rate is 3.48";
        }
        else if(a == "Euro"){
            return "Euro currency rate is 0.69";
        }
    },

    //#4 Deposit cash
    depositCash : function(a, i) {
        if (a > 0) {
          this.accounts[i] += a;
          return "You just deposited $" + a + " and your total is $" + this.accounts[i];
        } else {
          return "Invalid amount";
        }
      },

    //#5 Withdraw Cash
    withdrawCash : function(a, i){
        if(a < this.accounts[i]){
            balance = this.accounts[i] - a;
            return "You have withdraw $" + a + " and left with $" + balance + " in the bank"; 
        }
        else{
            return "You dont have that much money in this account"
        }
    },

}
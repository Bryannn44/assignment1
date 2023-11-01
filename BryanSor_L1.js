module.exports = {
    accounts : [1, 6, 10, 9, 43],
    
    // #1 Convert SG to MY 
    convertToMY(a) {
        return a * 3.48;
    },

    // #2 Check the currency rate of the country 
    checkCurrRate(a) {
        if (a == "US"){
            return 0.73
        }
        else if(a == "Malaysia"){
            return 3.48;
        }
        else if(a == "Euro"){
            return 0.69;
        }
    },

    //#3 Deposit cash
    depositCash(a, i) {
        if (a > 0) {
          this.accounts[i] += a;
          return "You just deposited $" + a + " and your total is $" + this.accounts[i];
        } else {
          return "Invalid amount";
        }
      },

    //#4 Withdraw Cash
    withdrawCash(a){
        balance = 10

        if(a < balance){
            balance = balance - a;
            return "You have withdraw $" + a + " and is left with $" + balance + " in the bank"; 
        }
        else{
            return "You dont have that much money";
        }
    }


}
module.exports = {
    accounts : [1, 6, 10, 9, 43],
    
    // #1 Convert calculator
    convertCalculator(a, i) {
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

    // #2 Check the currency rate of the country 
    checkCurrRate(a) {
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
    withdrawCash(a, i){
        if(a < this.accounts[i]){
            balance = this.accounts[i] - a;
            return "You have withdraw $" + a + " and left with $" + balance + " in the bank"; 
        }
        else{
            return "You dont have that much money in this account"
        }
    },

    //#5 Delete account
    deleteAccount(i){
        delete this.accounts[i];
        console.log("Account deleted")
        return(this.accounts)
    }
}
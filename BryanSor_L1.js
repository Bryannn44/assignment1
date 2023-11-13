const accounts = {
    "A" : 1, 
    "B" : 6, 
    "C" : 10, 
    "D" : 9, 
    "E" : 43
};

PIN = 123456;

const countries = {
    "Argentine" :  256.49,
    "Australian" : 	1.16,
    "Bahraini" : 	0.28,
    "Botswana" :	9.95,
    "Brazilian" :	3.61,
    "British"  : 0.60,
    "Bruneian" 	:1.00,
    "Bulgarian" 	:1.35,
    "Canadian" 	:1.01,
    "Czech" :	16.87,
    "Danish" :	5.1,
    "Emirati" :	2.70,
    "Euro":	0.69,
    "Hong Kong" :	5.74,
    "Hungarian" :	259.55,
    "Icelandic" :	104.50,
    "Indian": 	61.23,
    "Israeli" :	2.84,
    "Japan" :	111.38,
    "Kazakhstani" :	343.88,
    "Kuwaiti" :	0.23,
    "Libyan" :	3.58,
    "Malaysia" :	3.45,
    "Mauritian" :	32.49,
    "Mexican" 	:12.97,
    "Nepalese" :	98.02,
    "New Zealand" :	1.25,
    "Norwegian" :	8.17,
    "Omani" :	0.28,
    "Pakistani" :	211.32,
    "Philippine": 	41.10,
    "Polish" :	3.05,
    "Qatari" :	2.68,
    "Romanian" : 	3.42,
    "Russian" :	67.89,
    "Saudi Arabian" :	2.76,
    "South African" :	13.76,
    "South Korean" :	970.15,
    "Sri Lankan" :	240.59,
    "Swedish" 	:8.0,
    "SwissFranc"	:0.66,
    "Taiwan"  	:23.79,
    "Thai" 	:26.39,
    "Trinidadian" 	:4.99,
    "Turkish" 	:20.99,
    "US" :	0.74,
};

module.exports = {

    // #1 PIN Code Authentication
    authenticatePinCode : function(i){
        if(i != PIN){
            return "Wrong PIN. Please try again!";
        }else{
            return "successfully Login";
        }
    },

    // #2 List of countries and their currency rate
    listOfRate : function(){
        return countries;
    },

    // #3 Convert calculator
    convertCalculator : function(amount, country) {
        if(countries[country]){
            return amount * countries[country]
        }
        else{
            return "Invalid Country"
        }
    },


    // #4 Check the currency rate of the country 
    checkCurrRate : function(country) {
        if (countries[country]) {
            return (countries[country]);
        } else {
            return "Invalid country";
        }
    },

    //#5 Show list of accounts and their amount
    listOfAccounts : function(){
        return accounts;
    },


    //#6 Deposit cash
    depositCash : function(cash, i) {
        if (cash > 0) {
          total = accounts[i] += cash;
          return "You just deposited $" + cash + " and your total is $" + total;
        } else{
          return "Invalid amount";
        }
      },

    //#7 Withdraw Cash
    withdrawCash : function(cash, i){
        if(cash < accounts[i]){
            balance = accounts[i] - cash;
            return "You have withdraw $" + cash + " and left with $" + balance + " in the bank"; 
        }
        else{
            return "You dont have that much money in this account"
        }
    },

}
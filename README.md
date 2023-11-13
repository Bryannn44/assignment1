# Assignment 1

Add this first before calling the functions: `Import const nodeModule = require("./BryanSor_WebAPIDevelopment.js");`


### **Function 1 : AuthenticatePinCode**

This function allows the user to enter their PIN code and if PIN code matches with the value set in the variable, the "Succuessfully login" text will appear else, it will show "Invalid PIN. Please try again!" 

Add this into your **app.js**: `console.log(nodeModule.authenticatePinCode(Your PIN code));`

#

### **Function 2 : List of all countries and their rates**


This function is to list out all the countries and their rates

Add this into your **app.js**: `console.log(nodeMoudle.listOfRate());`


#

### **Function 3 : Currency Calcaulator**

This function helps to calculate the amount from the country they have entered. If the amount is set to 2 and country is US, the amount will be converted the amount in US currency. 

Add this into your **app.js**: `console.log(nodeModule.convertCalculator(Your amount, The country you want));`

#

### **Function 4 : Currency Rate**

This function helps to check the currency of the country you input.

Add this into your **app.js**: `console.log (nodeModule.checkCurrRate(The country you want));`

# 

### **Function 5 : List of all Accounts**

This function will list out all the accounts and the amount they have

Add this into your **app.js**: `console.log(nodeMoudle.listOfAccounts());`


#

### **Function 6 : Deposit Cash** 

This function allows the user to depsoit any amount of cash into one of the accounts in the array. If amount is less than 0, "Invalid amount" text will appear. 

Add this into your **app.js**: `console.log(nodeModule.depositCash(cash, account you want to deposit to));`

# 

### **Function 7 : Withdraw Cash** 

This function allows the user to withdraw any amount of cash from one of the accounts in the array. If amount is more than the amount, "You dont have that much money in this account" text will appear. 

Add this into your **app.js**: `console.log(nodeModule.withdrawCash(amount, account you want to withdraw from);`

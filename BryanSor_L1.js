module.exports = {
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
            return 0.69
        }
    }

    
}
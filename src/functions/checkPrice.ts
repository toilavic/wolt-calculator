const checkTime = (date: any) => {
    var now = new Date(date),
        day = now.getDay(),
        hours = now.getHours(),
        mins = now.getMinutes()
    
    const NEWCOEFFICIENT: number = 1.1
    const FRIDAY = 5
    if (day === FRIDAY) {
        if (hours >= 15 && hours <= 19) {
            if(hours !== 19 || mins <= 0) return NEWCOEFFICIENT
        } 
    } 
    return 1;
}

const checkPrice = (cartValue: number, distance: number, items: number, date: any) => {

    var SURCHANGE: number = 0, COEFFICIENT: number = 1, DELIVERYFEE: number = 0, TOTAL: number = 0

    const BASEORDERVALUE = 10
    const STARTITEMTOSURCHARGE = 5
    const SURCHARGEPERORDERPRICE = 0.5
    const ISFREE = 0

    // CHECK ORDER PRICE
    if (cartValue >= 100) TOTAL = ISFREE;
    else {
        // CHECK PRICE => SURCHARGE
        if (cartValue > 0 && cartValue < BASEORDERVALUE) SURCHANGE += BASEORDERVALUE - cartValue

        // COUNT ITEMS => SURCHANGE
        if (items >= STARTITEMTOSURCHARGE) SURCHANGE += (items + 1 - STARTITEMTOSURCHARGE) * SURCHARGEPERORDERPRICE

        // CHECK DAYTIME => Coefficient
        COEFFICIENT = checkTime(date)!

        // CALCULATE DISTANCE => DELIVERYFEE
        const FIRST1000 = 1000, FIRST1000_FEE = 2
        const ADDITION500_FEE = 1
        const ADDITION_DIST = distance - FIRST1000
        const ROUNDED_COEF_500 = Math.ceil( ADDITION_DIST / 500 )

        if( ADDITION_DIST < 0 ) DELIVERYFEE = FIRST1000_FEE
        else DELIVERYFEE = FIRST1000_FEE + ROUNDED_COEF_500 * ADDITION500_FEE

        // DF vs SURCHANGE
        const CALCULATOR = DELIVERYFEE * COEFFICIENT + SURCHANGE
        const MAX_FEE = 15;

        CALCULATOR >= MAX_FEE ? TOTAL = MAX_FEE : TOTAL = CALCULATOR

        console.log("-------------------- INPUT --------------------")
        console.log(cartValue, distance, items, date)
        console.log("-------------------- OUTPUT -------------------")
        console.log("SURCHANGE:",SURCHANGE, "COEFFICIENT:",COEFFICIENT, "DELIVERYFEE:",DELIVERYFEE, "TOTAL FEE: ",TOTAL)
    }
}

export {
    checkPrice,
    checkTime
};

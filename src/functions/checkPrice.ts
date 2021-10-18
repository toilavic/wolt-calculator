const checkPrice = (cartValue: number, distance: number, items: number, date: any) => {

    var SURCHANGE: number = 0, COEFFICIENT: number = 1, DELIVERYFEE : number = 0;

    const BASEORDERVALUE = 10
    const STARTITEMTOSURCHARGE = 5
    const SURCHARGEPERORDERPRICE = 0.5
    
    // CHECK ORDER PRICE
    if( cartValue >= 100 ) DELIVERYFEE = 0;
    
    // CHECK PRICE => SURCHARGE
    
    if( cartValue > 0 && cartValue < BASEORDERVALUE ) SURCHANGE += BASEORDERVALUE - cartValue

    // COUNT ITEMS => SURCHANGE

    if ( items >= STARTITEMTOSURCHARGE ) SURCHANGE += ( items + 1 - STARTITEMTOSURCHARGE) / SURCHARGEPERORDERPRICE

    // CHECK DAYTIME => Coefficient
    // CALCULATE DISTANCE => DF
    // DF vs SURCHANGE

    console.log("-------------------- INPUT --------------------")
    console.log(cartValue, distance, items, date)
    console.log("-------------------- OUTPUT -------------------")
    console.log(SURCHANGE, COEFFICIENT, DELIVERYFEE)

} 

export default checkPrice;

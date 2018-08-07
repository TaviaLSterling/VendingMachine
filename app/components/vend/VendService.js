//PRIVATE PARTS

let total = 0

//dictionary - key value pairs
const currency = {
    quarter: .25,
    dime: .1,
    nickel: .05
}
//PUBLIC TO CONTROLLER
class VendService {
    constructor() {

    }
    //used to send money to service
    addMoney(coinStr) {
        console.log('service: ', coinStr)
        //confirm currency is acceptable
        if (currency[coinStr]) {
            total += currency[coinStr]
        }

        return total.toFixed(2)
    }
}
export default VendService
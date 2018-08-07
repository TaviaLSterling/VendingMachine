//vending machine
//PROPERTIES
//transactionTotal
//acceptable currency
//foodItems
    //image
    //price
    //quantity
//machineTotal


//METHODS
    //AddMoney
    //VEND
    //GIveChange


    //ChangePrice
    //AddItem
    class VendingMachine {
        constructor() {
            this.transactionTotal =  0 
            this.acceptedCurrency = {
                quarter: .25,
                dime: .1,
                nickel: .05
            }
            this.foodItems = [{
                id: 101
                img:' ',
                price: .75,
                quantity: 10
            },{
                id: 102
                img: '',
                price: 2.00,
                quantity: 1
            },{
                id:103
                img:'',
                price: .50,
                quantity: 15
            }]
            this.machineTotal = 10
        }
        addMoney(coin) {
            //validate coin
            //increase total
            //return total

        }
        Vend(foodId){
            //find item
            //if total >= item.price && item.quantity > 0
            //item.quantity--
            //transactionTotal -= item.price
            //machineTotal += item.price
            //return item.img
        }
        GiveChange() {
            //transactionTotal = 0
        }
    }
    export default VendingMachine
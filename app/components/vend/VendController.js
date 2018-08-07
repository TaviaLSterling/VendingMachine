import VendService from "./VendService.js"
//PRIVATE PARTS

const vendService = new VendService()

function draw(total) {
        //updates screen
        document.getElementById('total').innerText = total
    }



//PUBLIC PARTS
//Controllers are used for getting user input
//updating screen
//sending and reciving data from Service
class VendController {
    constructor() {

        
    }

    
    addMoney(cur) {
        console.log('controller: ', cur)
       let total = vendService.addMoney(cur)
        //used to send money to service
    }
}


export default VendController
// NOTE Template is not complete.  I just got the Add Money button working to add money to the balance. Next, need to... create items with ids, use templates to make their cards, give them an add to cart button, etc.  Using Harrison's tutor template as a helper.  

import { ProxyState } from "../AppState.js"
import { shoesService } from "../Services/ShoesService.js"


//Private
function _draw() {
  console.log('hello from function draw in shoescontroller')
  // let shoes = ProxyState.shoes
  //   let template = ''
  //   values.forEach(v => template += v.Template)
  //   document.getElementById("app").innerHTML = /*html*/`
  //   <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>  
  //   <div className="card-columns values">
  //       ${template}
  //   </div>
  //   `
}

function drawMoney() {
  document.getElementById('balance').innerText = ProxyState.balance
}

//Public
export default class ShoesController {
  constructor() {
    console.log('Hello from the ShoesController Class constructor');
    //   ProxyState.on("values", _draw);
    ProxyState.on('balance', drawMoney)
    _draw()
    drawMoney()
  }

  // addValue() {
  //   valuesService.addValue()
  // }

  addMoney() {
    console.log('add money button was clicked')
    shoesService.addMoney()
  }
}


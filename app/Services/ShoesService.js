import { ProxyState } from "../AppState.js";
import Value from "../Models/Shoe.js";

class ShoesService {
  addMoney() {
    console.log('Hello from ShoesService addMoney')
    ProxyState.balance += 10
    console.log('Balance is', ProxyState.balance)
    // ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  }
}

export const shoesService = new ShoesService();


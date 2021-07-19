// import ValuesController from "./Controllers/ValuesController.js";
import ShoesController from "./Controllers/ShoesController.js";

class App {
  // valuesController = new ValuesController();
  shoesController = new ShoesController();
}

window["app"] = new App();

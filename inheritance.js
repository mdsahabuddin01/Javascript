class Car {
    constructor(brand) {
      this.carname = brand;
    }
  
    rightnow() {
      return "i have a car called " + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
  
    display() {
      // Log to console
      console.log(this.rightnow() + " it's model is " + this.model);
  
      // Update <p id="demo"> in your HTML
      // document.getElementById("demo").innerHTML = this.rightnow() + ", its model is " + this.model;
    }
  }
  
  const Car1 = new Model("Mini", "Countryman");
  Car1.display();
  

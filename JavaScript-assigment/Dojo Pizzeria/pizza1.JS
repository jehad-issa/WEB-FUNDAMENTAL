function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = "deep dish";
    pizza.sauceType = "traditional";
    pizza.cheeses = "mozzarella";
    pizza.toppings = ["pepperoni", "sausage"];
    return pizza;
  }
  
  var pizza1 = pizzaOven("crustType", "sauceType", "cheeses", "toppings");
  console.log(pizza1);
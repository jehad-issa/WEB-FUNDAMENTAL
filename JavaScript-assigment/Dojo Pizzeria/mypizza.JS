function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = "thin";
    pizza.sauceType = "margherita";
    pizza.cheeses = ["mozzarella", "feta"];
    pizza.toppings = ["mushrooms", "rucola"];
    return pizza;
  }
  
  var mypizza = pizzaOven("crustType", "sauceType", "cheeses", "toppings");
  console.log(mypizza);
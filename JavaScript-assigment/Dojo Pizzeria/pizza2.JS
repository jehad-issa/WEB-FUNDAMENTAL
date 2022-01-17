function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = "hand tossed";
    pizza.sauceType = "marinara";
    pizza.cheeses = ["mozzarella", "feta"];
    pizza.toppings = ["mushrooms", "olives", "onions"];
    return pizza;
  }
  
  var pizza2 = pizzaOven("crustType", "sauceType", "cheeses", "toppings");
  console.log(pizza2);
function Pizza(pizzaSize, numberOfPizzas, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.numberOfPizzas = numberOfPizzas;
  this.pizzaTopping = pizzaTopping;
}

Pizza.prototype.totalCost = function() {
  var toppingChoices = this.pizzaTopping.split(" ");
  var toppingQuantity = toppingChoices.length;
  var toppingCost = (toppingQuantity * 2);
  var pizzaSizeCost = 0;

// radio button option for classic pizza choices for version 2.0

  if (this.pizzaSize === "large") {
    pizzaSizeCost = 20;
  } else if (this.pizzaSize === "medium") {
    pizzaSizeCost = 18;
  } else if (this.pizzaSize === "small") {
    pizzaSizeCost = 16;
  } else {
    pizzaSizeCost = 24;
  }

  var totalCost = toppingCost + (pizzaSizeCost * (parseInt(this.numberOfPizzas)));
  return totalCost;
};

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("select#size").val();
    var pizzaTopping = $("input#topping").val().toString();
    var numberOfPizzas = $("input#numberOfPizza").val();
    var newPizza = new Pizza(pizzaSize, numberOfPizzas, pizzaTopping);
    $("#totalCost").text("$" + newPizza.totalCost());
  });
});

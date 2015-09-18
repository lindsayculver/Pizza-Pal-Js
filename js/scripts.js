function Pizza(pizzaSize, pizzaQuantity, pizzaType) {
  this.pizzaSize = pizzaSize;
  this.pizzaQuantity = pizzaQuantity;
  this.pizzaType = pizzaType;
}

Pizza.prototype.totalCost = function() {
  var toppingType = this.pizzaType.split(" ");
  var toppingQuantity = toppingType.length;
  var toppingCost = (toppingQuantity * 2);
  var pizzaSizeCost = 0;

  if(this.pizzaSize === "large") {
    pizzaSizeCost = 20;
  } else if (this.pizzaSize === "medium") {
    pizzaSizeCost = 18;
  } else if (this.pizzaSize === "small") {
    pizzaSizeCost = 15;
  } else {
    pizzaSizeCost = 24;
  }

  var totalCost = toppingCost + (pizzaSizeCost * (parseInt(this.pizzaQuantity)));
  return totalCost;
};

$(documetnt).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();

    var pizzaType = $("input#type").val().toString();
    var pizzaSize = $("select#size").val();
    var pizzaQuantity = $("input#numberOfPizza").val();
    var newPizza = new Pizza(pizzaSize, pizzaQuantity, pizzaType);
    $("#totalCost").text("Your total is: $" + newPizza.totalCost());
  });
});

// function Pizza (pizzaQuantity, pizzaType, pizzaSize) {
//   this.pizzaQuantity = pizzaQuantity;
//   this.pizzaType = pizzaType;
//   this.pizzaSize = pizzaSize;
//   this.startPrice = 15;
// }
//
// Pizza.prototype.pizzaPrice = function() {
//   if(this.pizzaQuantity >= 2) {
//     this.startPrice
//   }
//
//
//   return this.startPrice;
// };
//
// function resetFields() {
//   $("input#quantity").val("");
//   $("input#optionsRadios1").attr('checked', false);
//   $("input#optionsRadios2").attr('checked', false);
//   $("input#optionsRadios3").attr('checked', false);
//   $("input#optionsRadios4").attr('checked', false);
//   $("input#optionsRadios5").attr('checked', false);
//   $("input#optionsRadios6").attr('checked', false);
//   $("input#optionsRadios7").attr('checked', false);
//   $("input#optionsRadios8").attr('checked', false);
// }
//
// $(document).ready(function() {
//   $("form#pizza").submit(function(event) {
//     event.preventDefault();
//
//      var inputtedPizzaQuantity = $("input#quantity").val();
//      var inputtedPizzaType = $("input[name=classic]:checked", "#pizza").val();
//      var inputtedPizzaSize = $("input[name=size]:checked", "#pizza").val();
//
//      var newPizza = new Pizza (inputtedPizzaQuantity, inputtedPizzaType, inputtedPizzaSize);
//      var newPizzaPrice = newPizza.pizzaPrice();
//      $("h2#show-price").append("<h2" + "Your Price: " + "$" + newPizzaPrice + "</h2>");
//   });
//   resetFields();
// });

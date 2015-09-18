function Pizza (pizzaQuantity, pizzaType, pizzaSize) {
  this.pizzaQuantity = pizzaQuantity;
  this.pizzaType = pizzaType;
  this.pizzaSize = pizzaSize;
  this.startPrice = 12;
}

Pizza.prototype.pizzaPrice = function() {
  if(this.pizzaQuantity === 1 && this.pizzaType === "classic" && this.pizzaSize === "large") {
    this.startPrice;
  }
  return this.startPrice;
};

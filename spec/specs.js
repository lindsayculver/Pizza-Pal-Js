describe('Pizza', function() {
  it("creates a new pizza based on user input", function() {
    var testPizza = new Pizza(2, "pepperoni", "large");
    expect(testPizza.pizzaQuantity).to.equal(2);
    expect(testPizza.pizzaType).to.equal("pepperoni");
    expect(testPizza.pizzaSize).to.equal("large");
  });
});

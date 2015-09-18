describe('Pizza', function() {
  it("creates a new pizza based on user input", function() {
    var testPizza = new Pizza("small", 2, "cheese");
    expect(testPizza.pizzaSize).to.equal("small");
    expect(testPizza.pizzaQuantity).to.equal(2);
    expect(testPizza.pizzaType).to.equal("cheese");
  });

  it("calculates the new pizza price based on user input", function() {
    var testPizza = new Pizza("small", 2, "cheese");
    expect(testPizza.totalCost()).to.equal(32);
  });
});

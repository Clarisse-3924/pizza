$(document).ready(function() {
    //form function to submit the users input, calculate total for the order, and prompt the user for some details
      $("#text-center").submit(function(event) {
        //functions to get user input from the forms
        function size() {
          var pizzaSize= $("input:radio[name=size]:checked").val();
          return parseInt(pizzaSize);
        }
        function crust() {
          var pizzaCrust = document.getElementById("crust").value;
          return parseInt(pizzaCrust);
        }
        function topping() {
          var pizzaTopping = document.getElementById("topping").value;
          return parseInt(pizzaTopping);
        }
        function number() {
          var pizzaNumber = document.getElementById("quantity").value;
          return parseInt(pizzaNumber);
        }
        function delivery() {
            var delivery = document.getElementById("delivery").value;
            return parseInt(delivery);
          }
    
        //a constructor to create objects/instances of a user's orders
        function Order( size, crust, topping, quantity,delivery) {
          this.newSize = size;
          this.newCrust = crust;
          this.newTopping = topping;
          this.newQuantity = quantity;
          this.newDelivery=delivery;
        }
    
        //an object/instance (of the above constructor) to save the users order
        var userInput = new Order(size(), crust(), topping(), number(),delivery());
    
        //a variable to store the total expenditure of the user
        var totalCost =(userInput.newSize +userInput.newCrust + userInput.newTopping+userInput.newDelivery) * userInput.newQuantity;
        //prompts for the user
        alert("Your charges for Pizza" + totalCost);
    prompt("enter your email address");
    prompt("enter your phone number");
    prompt("enter your location");
    alert("Your pizza will be delivered");
        
    
        //a method to reset the form after all operations have been completed
        $("#text-center").reset();
    
        event.preventDefault();
      });
    });

    
$(document).ready(function() {
      $("#text-center").submit(function(event) {
        function size() {
          var sizes= $("input:radio[name=size]:checked").val();
          return parseInt(sizes);
        }
        function crust() {
          var crusts= $("input:radio[name=crust]:checked").val();
          return parseInt(crusts);
        }
        function topping() {
          var toppings = document.getElementById("topping").value;
          return parseInt(toppings);
        }
        function number() {
          var pizzaNumber = document.getElementById("quantity").value;
          return parseInt(pizzaNumber);
        }
        function delivery() {
            var delivery = document.getElementById("delivery").value;
            return parseInt(delivery);
          }
        function myOrder( size, crust, topping, quantity,delivery) {
          this.newSize = size;
          this.newCrust = crust;
          this.newTopping = topping;
          this.newQuantity = quantity;
          this.newDelivery=delivery;
        }
        var userInput = new myOrder(size(), crust(), topping(), number(),delivery());
        var totalCost =(userInput.newSize +userInput.newCrust + userInput.newTopping+userInput.newDelivery) * userInput.newQuantity;
        alert("Your charges for Pizza" + totalCost);
    prompt("enter your email address");
    prompt("enter your phone number");
    prompt("enter your location");
    alert("Your pizza will be delivered");
       
    
      });
    });
    $(document).ready(function(){
      $("#form1").submit(function(){
        var name=$("input#name").val();
        alert(name+" " +"We have received your message");
         
      });
    })
    
    
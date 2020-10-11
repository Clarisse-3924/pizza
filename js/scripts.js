$(document).ready(function() {
  $("#form").submit(function(event){
      
    function size() {
      var sizes= $("input:radio[name=sizes]:checked").val();
      return parseInt(sizes);
    }
    function crust() {
      var crusts= $("input:radio[name=crusts]:checked").val();
      return parseInt(crusts);
    }
    function topping() {
      var toppings= $("input:radio[name=toppings]:checked").val();
      return parseInt(toppings);
    }
    function delivery() {
      var delivery1 = document.getElementById("delivery").value;
      return parseInt(delivery1);
    }
    function quantity() {
      var number = document.getElementById("inputNumber").value;
      return parseInt(number);
    }
    function myOrder(size, crust, topping, quantity,delivery) {
      this.mySize = size;
      this.myCrust = crust;
      this.myToppings = topping;
      this.myNumber = quantity;
      this.myDelivery = delivery;

    }
    var inputs = new myOrder(size(), crust(), topping(), quantity(),delivery());
    var totalCost =
      (inputs.mySize +
        inputs.myCrust+
        inputs.myDelivery+
        inputs.myToppings) *
        inputs.myNumber;

        prompt("enter your email address");
        prompt("enter your phone number");
        prompt("enter your location");
        alert("Your pizza will be delivered");
        
        $(".check").show();
        document.getElementById("Size").innerHTML=inputs.mySize + (" Rwf");
        document.getElementById("Crust").innerHTML= inputs.myCrust + (" Rwf");
        document.getElementById("Toppings").innerHTML=inputs.myToppings + (" Rwf");
        document.getElementById("Delivery").innerHTML=inputs.myDelivery + (" Rwf");
        document.getElementById("answer").innerHTML=totalCost+(" Rwf");
    event.preventDefault();
  });
});
    


    
    $(document).ready(function(){
      $("#form1").submit(function(){
        var name=$("input#name").val();
        alert(name+" " +"We have received your message");
         
      });
    })
    
    
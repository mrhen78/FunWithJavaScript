/*Open and close Left Behind Page*/

document
  .querySelector(".leftBehindButton")
  .addEventListener("click", function () {
    document.querySelector(".leftBehindContainer").classList.remove("hide");
  });

document
  .querySelector(".closeLeftBehindPage")
  .addEventListener("click", function () {
    document.querySelector(".leftBehindContainer").classList.add("hide");
  });

/*Open and close Holding Page*/

document.querySelector(".holdingButton").addEventListener("click", function () {
  document.querySelector(".holdingContainer").classList.remove("hide");
});

document
  .querySelector(".closeHoldingPage")
  .addEventListener("click", function () {
    document.querySelector(".holdingContainer").classList.add("hide");
  });

/*Open and close Server Page*/

document.querySelector(".serverButton").addEventListener("click", function () {
  document.querySelector(".serverContainer").classList.remove("hide");
});

document
  .querySelector(".closeServerPage")
  .addEventListener("click", function () {
    document.querySelector(".serverContainer").classList.add("hide");
  });

/*Open and close Thinker Page*/

document.querySelector(".thinkerButton").addEventListener("click", function () {
  document.querySelector(".thinkerContainer").classList.remove("hide");
});

document
  .querySelector(".closeThinkerPage")
  .addEventListener("click", function () {
    document.querySelector(".thinkerContainer").classList.add("hide");
  });

/*Open and close Shopping Cart*/

document
  .querySelector(".shoppingCartButton")
  .addEventListener("click", function () {
    document.querySelector(".shoppingCartContainer").classList.remove("hide");
  });

document
  .querySelector(".closeShoppingCartPage")
  .addEventListener("click", function () {
    document.querySelector(".shoppingCartContainer").classList.add("hide");
  });

var grandTotalOfItems = 0;
var price = 0;
var shipping = 0;

/*Add Left Behind to Cart*/

var numberOfLeftBehind = 10;
var numberOfLeftBehindInCart = 0;
var leftBehindQuantity = 0;

document
  .querySelector(".addToCartLeftBehind")
  .addEventListener("click", function () {
    if (numberOfLeftBehind === 10) {
      var leftBehindInCart = document.createElement("span");

      leftBehindInCart.innerHTML =
        "<img alt='sculpture of a green man with a large left hand' src='../assets/images/leftBehind.jpg'/>" +
        "<div class=' quantity'>" +
        "<p>" +
        "<span>" +
        "Left Behind Quantity:" +
        "<br/>" +
        "<br/>" +
        "<span/>" +
        "<a class='addSubtractButton subtractLeftBehind'>" +
        "-" +
        "</a>" +
        "<span class='leftBehindInCart'>" +
        "&nbsp;&nbsp;1&nbsp;&nbsp;" +
        "</span>" +
        "<a class='addSubtractButton addLeftBehind'>" +
        "+" +
        "</a>" +
        "</p>" +
        "</div>";

      document.querySelector(".cartItemsContainer").append(leftBehindInCart);
    }

    if (numberOfLeftBehind === 1) {
      grandTotalOfItems++;
      numberOfLeftBehind--;
      numberOfLeftBehindInCart++;
      leftBehindQuantity++;
      price += 199.99;
      shipping += 19.99;
      var calculatedTax = price * 0.0575;
      var grandTotalOfPrice = price + shipping + calculatedTax;
      document.querySelector(".leftBehindInCart").innerHTML =
        "&nbsp;&nbsp;" + numberOfLeftBehindInCart + "&nbsp;&nbsp;";
      document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
      document.querySelector(".shippingAmount").innerHTML = shipping.toFixed(2);
      document.querySelector(".taxAmount").innerHTML = calculatedTax.toFixed(2);
      document.querySelector(".total").innerHTML = grandTotalOfPrice.toFixed(2);
      document.querySelector(".leftBehindStockPage").innerHTML =
        "Currently out of stock.  Please check back at a later date.";
      document.querySelector(".leftBehindStockItems").innerHTML =
        "Currently out of stock.  Please check back at a later date.";
      document.querySelector(".grandTotal").innerHTML =
        "Your total is $" + grandTotalOfPrice.toFixed(2) + ". Please pay here.";
    }

    if (numberOfLeftBehind <= 10 && numberOfLeftBehind >= 2) {
      grandTotalOfItems++;
      numberOfLeftBehind--;
      numberOfLeftBehindInCart++;
      leftBehindQuantity++;
      price += 199.99;
      shipping += 19.99;
      var calculatedTax = price * 0.0575;
      var grandTotalOfPrice = price + shipping + calculatedTax;
      document.querySelector(".leftBehindStockPage").innerHTML =
        numberOfLeftBehind + " left in stock.  Order soon!";
      document.querySelector(".leftBehindStockItems").innerHTML =
        numberOfLeftBehind + " left in stock.  Order soon!";
      document.querySelector(".leftBehindInCart").innerHTML =
        "&nbsp;&nbsp;" + numberOfLeftBehindInCart + "&nbsp;&nbsp;";
      document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
      document.querySelector(".shippingAmount").innerHTML = shipping.toFixed(2);
      document.querySelector(".taxAmount").innerHTML = calculatedTax.toFixed(2);
      document.querySelector(".total").innerHTML = grandTotalOfPrice.toFixed(2);
      document.querySelector(".grandTotal").innerHTML =
        "Your total is $" + grandTotalOfPrice.toFixed(2) + ". Please pay here.";
    } else {
      document.querySelector(".leftBehindStockPage").innerHTML =
        "Currently out of stock.  Please check back at a later date.";
      document.querySelector(".leftBehindStockItems").innerHTML =
        "Currently out of stock.  Please check back at a later date.";
    }

    document
      .querySelector(".subtractLeftBehind")
      .addEventListener("click", function (event) {
        event.stopImmediatePropagation();
        if (numberOfLeftBehindInCart <= 1) {
          leftBehindInCart.remove();
        }
        if (leftBehindQuantity <= 10 && leftBehindQuantity >= 1) {
          numberOfLeftBehindInCart--;
          grandTotalOfItems--;
          numberOfLeftBehind++;
          leftBehindQuantity--;
          price -= 199.99;
          shipping -= 19.99;
          var calculatedTax = price * 0.0575;
          var grandTotalOfPrice = price + shipping + calculatedTax;
          document.querySelector(".leftBehindStockPage").innerHTML =
            numberOfLeftBehind + " left in stock.  Order soon!";
          document.querySelector(".leftBehindStockItems").innerHTML =
            numberOfLeftBehind + " left in stock.  Order soon!";

          document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
          document.querySelector(".shippingAmount").innerHTML =
            shipping.toFixed(2);
          document.querySelector(".taxAmount").innerHTML =
            calculatedTax.toFixed(2);
          document.querySelector(".total").innerHTML =
            grandTotalOfPrice.toFixed(2);
          document.querySelector(".shoppingCartNumber").innerHTML =
            grandTotalOfItems;
          document.querySelector(".leftBehindInCart").innerHTML =
            "&nbsp;&nbsp;" + numberOfLeftBehindInCart + "&nbsp;&nbsp;";
          document.querySelector(".amountLeftLeftBehindPage").innerHTML =
            numberOfLeftBehind;
          document.querySelector(".amountLeftLeftBehindItems").innerHTML =
            numberOfLeftBehind;
          document.querySelector(".grandTotal").innerHTML =
            "Your total is $" +
            grandTotalOfPrice.toFixed(2) +
            ". Please pay here.";
        } else {
          document.querySelector(".leftBehindStockPage").innerHTML =
            "Currently out of stock.  Please check back at a later date.";
          document.querySelector(".leftBehindStockItems").innerHTML =
            "Currently out of stock.  Please check back at a later date.";
        }
      });

    document
      .querySelector(".addLeftBehind")
      .addEventListener("click", function (event) {
        event.stopImmediatePropagation();

        if (leftBehindQuantity <= 9 && leftBehindQuantity >= 1) {
          numberOfLeftBehindInCart++;
          grandTotalOfItems++;
          numberOfLeftBehind--;
          leftBehindQuantity++;
          price += 199.99;
          shipping += 19.99;
          var calculatedTax = price * 0.0575;
          var grandTotalOfPrice = price + shipping + calculatedTax;
          document.querySelector(".leftBehindStockPage").innerHTML =
            numberOfLeftBehind + " left in stock.  Order soon!";
          document.querySelector(".leftBehindStockItems").innerHTML =
            numberOfLeftBehind + " left in stock.  Order soon!";

          document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
          document.querySelector(".shippingAmount").innerHTML =
            shipping.toFixed(2);
          document.querySelector(".taxAmount").innerHTML =
            calculatedTax.toFixed(2);
          document.querySelector(".total").innerHTML =
            grandTotalOfPrice.toFixed(2);
          document.querySelector(".shoppingCartNumber").innerHTML =
            grandTotalOfItems;
          document.querySelector(".leftBehindInCart").innerHTML =
            "&nbsp;&nbsp;" + numberOfLeftBehindInCart + "&nbsp;&nbsp;";
          document.querySelector(".amountLeftLeftBehindPage").innerHTML =
            numberOfLeftBehind;
          document.querySelector(".amountLeftLeftBehindItems").innerHTML =
            numberOfLeftBehind;
          document.querySelector(".grandTotal").innerHTML =
            "Your total is $" +
            grandTotalOfPrice.toFixed(2) +
            ". Please pay here.";
        } else {
          document.querySelector(".leftBehindStockPage").innerHTML =
            "Currently out of stock.  Please check back at a later date.";
          document.querySelector(".leftBehindStockItems").innerHTML =
            "Currently out of stock.  Please check back at a later date.";
        }
      });

    document.querySelector(".shoppingCartNumber").innerHTML = grandTotalOfItems;
    document.querySelector(".leftBehindInCart").innerHTML =
      "&nbsp;&nbsp;" + numberOfLeftBehindInCart + "&nbsp;&nbsp;";

    document.querySelector(".amountLeftLeftBehindPage").innerHTML =
      numberOfLeftBehind;
    document.querySelector(".amountLeftLeftBehindItems").innerHTML =
      numberOfLeftBehind;

    document.querySelector(".leftBehindStockPage").innerHTML =
      numberOfLeftBehind + " left in stock.  Order soon!";
    document.querySelector(".leftBehindStockItems").innerHTML =
      numberOfLeftBehind + " left in stock.  Order soon!";

    document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
    document.querySelector(".shippingAmount").innerHTML = shipping.toFixed(2);
    document.querySelector(".taxAmount").innerHTML = calculatedTax.toFixed(2);
    document.querySelector(".total").innerHTML = grandTotalOfPrice.toFixed(2);

    document.querySelector(".grandTotal").innerHTML =
      "Your total is $" + grandTotalOfPrice.toFixed(2) + ". Please pay here.";
  });

/*Add Holding To Cart*/

var numberOfHolding = 10;
var numberOfHoldingInCart = 0;
var holdingQuantity = 0;

document
  .querySelector(".addToCartHolding")
  .addEventListener("click", function () {
    if (numberOfHolding === 10) {
      var holdingInCart = document.createElement("span");

      holdingInCart.innerHTML =
        "<img alt='sculpture of a man holding a woman' src='../assets/images/holding.jpg'/>" +
        "<div class=' quantity'>" +
        "<p>" +
        "<span>" +
        "Holding Quantity:" +
        "<br/>" +
        "<br/>" +
        "<span/>" +
        "<a class='addSubtractButton subtractHolding'>" +
        "-" +
        "</a>" +
        "<span class='holdingInCart'>" +
        "&nbsp;&nbsp;1&nbsp;&nbsp;" +
        "</span>" +
        "<a class='addSubtractButton addHolding'>" +
        "+" +
        "</a>" +
        "</p>" +
        "</div>";

      document.querySelector(".cartItemsContainer").append(holdingInCart);
    }

    if (numberOfHolding === 1) {
      grandTotalOfItems++;
      numberOfHolding--;
      numberOfHoldingInCart++;
      holdingQuantity++;
      price += 99.99;
      shipping += 19.99;
      var calculatedTax = price * 0.0575;
      var grandTotalOfPrice = price + shipping + calculatedTax;
      document.querySelector(".holdingInCart").innerHTML =
        "&nbsp;&nbsp;" + numberOfHoldingInCart + "&nbsp;&nbsp;";
      document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
      document.querySelector(".shippingAmount").innerHTML = shipping.toFixed(2);
      document.querySelector(".taxAmount").innerHTML = calculatedTax.toFixed(2);
      document.querySelector(".total").innerHTML = grandTotalOfPrice.toFixed(2);
      document.querySelector(".holdingStockPage").innerHTML =
        "Currently out of stock.  Please check back at a later date.";
      document.querySelector(".holdingStockItems").innerHTML =
        "Currently out of stock.  Please check back at a later date.";
      document.querySelector(".grandTotal").innerHTML =
        "Your total is $" + grandTotalOfPrice.toFixed(2) + ". Please pay here.";
    }

    if (numberOfHolding <= 10 && numberOfHolding >= 2) {
      grandTotalOfItems++;
      numberOfHolding--;
      numberOfHoldingInCart++;
      holdingQuantity++;
      price += 99.99;
      shipping += 19.99;
      var calculatedTax = price * 0.0575;
      var grandTotalOfPrice = price + shipping + calculatedTax;
      document.querySelector(".holdingStockPage").innerHTML =
        numberOfHolding + " left in stock.  Order soon!";
      document.querySelector(".holdingStockItems").innerHTML =
        numberOfHolding + " left in stock.  Order soon!";
      document.querySelector(".holdingInCart").innerHTML =
        "&nbsp;&nbsp;" + numberOfHoldingInCart + "&nbsp;&nbsp;";
      document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
      document.querySelector(".shippingAmount").innerHTML = shipping.toFixed(2);
      document.querySelector(".taxAmount").innerHTML = calculatedTax.toFixed(2);
      document.querySelector(".total").innerHTML = grandTotalOfPrice.toFixed(2);
      document.querySelector(".grandTotal").innerHTML =
        "Your total is $" + grandTotalOfPrice.toFixed(2) + ". Please pay here.";
    }

    document
      .querySelector(".subtractHolding")
      .addEventListener("click", function (event) {
        event.stopImmediatePropagation();
        if (numberOfHoldingInCart <= 1) {
          holdingInCart.remove();
        }
        if (holdingQuantity <= 10 && holdingQuantity >= 1) {
          numberOfHoldingInCart--;
          grandTotalOfItems--;
          numberOfHolding++;
          holdingQuantity--;
          price -= 99.99;
          shipping -= 19.99;
          var calculatedTax = price * 0.0575;
          var grandTotalOfPrice = price + shipping + calculatedTax;
          document.querySelector(".holdingStockPage").innerHTML =
            numberOfHolding + " left in stock.  Order soon!";
          document.querySelector(".holdingStockItems").innerHTML =
            numberOfHolding + " left in stock.  Order soon!";

          document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
          document.querySelector(".shippingAmount").innerHTML =
            shipping.toFixed(2);
          document.querySelector(".taxAmount").innerHTML =
            calculatedTax.toFixed(2);
          document.querySelector(".total").innerHTML =
            grandTotalOfPrice.toFixed(2);
          document.querySelector(".shoppingCartNumber").innerHTML =
            grandTotalOfItems;
          document.querySelector(".holdingInCart").innerHTML =
            "&nbsp;&nbsp;" + numberOfHoldingInCart + "&nbsp;&nbsp;";
          document.querySelector(".amountLeftHoldingPage").innerHTML =
            numberOfHolding;
          document.querySelector(".amountLeftHoldingItems").innerHTML =
            numberOfHolding;
          document.querySelector(".grandTotal").innerHTML =
            "Your total is $" +
            grandTotalOfPrice.toFixed(2) +
            ". Please pay here.";
        } else {
          document.querySelector(".holdingStockPage").innerHTML =
            "Currently out of stock.  Please check back at a later date.";
          document.querySelector(".holdingStockItems").innerHTML =
            "Currently out of stock.  Please check back at a later date.";
        }
      });

    document
      .querySelector(".addHolding")
      .addEventListener("click", function (event) {
        event.stopImmediatePropagation();

        if (holdingQuantity <= 9 && holdingQuantity >= 1) {
          numberOfHoldingInCart++;
          grandTotalOfItems++;
          numberOfHolding--;
          holdingQuantity++;
          price += 99.99;
          shipping += 19.99;
          var calculatedTax = price * 0.0575;
          var grandTotalOfPrice = price + shipping + calculatedTax;
          document.querySelector(".holdingStockPage").innerHTML =
            numberOfHolding + " left in stock.  Order soon!";
          document.querySelector(".holdingStockItems").innerHTML =
            numberOfHolding + " left in stock.  Order soon!";

          document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
          document.querySelector(".shippingAmount").innerHTML =
            shipping.toFixed(2);
          document.querySelector(".taxAmount").innerHTML =
            calculatedTax.toFixed(2);
          document.querySelector(".total").innerHTML =
            grandTotalOfPrice.toFixed(2);
          document.querySelector(".shoppingCartNumber").innerHTML =
            grandTotalOfItems;
          document.querySelector(".holdingInCart").innerHTML =
            "&nbsp;&nbsp;" + numberOfHoldingInCart + "&nbsp;&nbsp;";
          document.querySelector(".amountLeftHoldingPage").innerHTML =
            numberOfHolding;
          document.querySelector(".amountLeftHoldingItems").innerHTML =
            numberOfHolding;
          document.querySelector(".grandTotal").innerHTML =
            "Your total is $" +
            grandTotalOfPrice.toFixed(2) +
            ". Please pay here.";
        } else {
          document.querySelector(".holdingStockPage").innerHTML =
            "Currently out of stock.  Please check back at a later date.";
          document.querySelector(".holdingStockItems").innerHTML =
            "Currently out of stock.  Please check back at a later date.";
        }
      });

    document.querySelector(".shoppingCartNumber").innerHTML = grandTotalOfItems;
    document.querySelector(".holdingInCart").innerHTML =
      "&nbsp;&nbsp;" + numberOfHoldingInCart + "&nbsp;&nbsp;";

    document.querySelector(".amountLefHoldingPage").innerHTML = numberOfHolding;
    document.querySelector(".amountLeftHoldingItems").innerHTML =
      numberOfHolding;

    document.querySelector(".holdingStockPage").innerHTML =
      numberOfHolding + " left in stock.  Order soon!";
    document.querySelector(".holdingStockItems").innerHTML =
      numberOfHolding + " left in stock.  Order soon!";

    document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
    document.querySelector(".shippingAmount").innerHTML = shipping.toFixed(2);
    document.querySelector(".taxAmount").innerHTML = calculatedTax.toFixed(2);
    document.querySelector(".total").innerHTML = grandTotalOfPrice.toFixed(2);

    document.querySelector(".grandTotal").innerHTML =
      "Your total is $" + grandTotalOfPrice.toFixed(2) + ". Please pay here.";
  });

/*Add Server to Cart*/

var numberOfServer = 5;
var numberOfServerInCart = 0;
var serverQuantity = 0;

document
  .querySelector(".addToCartServer")
  .addEventListener("click", function () {
    if (numberOfServer === 5) {
      var serverInCart = document.createElement("span");

      serverInCart.innerHTML =
        "<img alt='sculpture of a large server with small people on his back wearing theatre masks' src='../assets/images/server.jpg'/>" +
        "<div class=' quantity'>" +
        "<p>" +
        "<span>" +
        "Server Quantity:" +
        "<br/>" +
        "<br/>" +
        "<span/>" +
        "<a class='addSubtractButton subtractServer'>" +
        "-" +
        "</a>" +
        "<span class='serverInCart'>" +
        "&nbsp;&nbsp;1&nbsp;&nbsp;" +
        "</span>" +
        "<a class='addSubtractButton addServer'>" +
        "+" +
        "</a>" +
        "</p>" +
        "</div>";

      document.querySelector(".cartItemsContainer").append(serverInCart);
    }

    if (numberOfServer === 1) {
      grandTotalOfItems++;
      numberOfServer--;
      numberOfServerInCart++;
      serverQuantity++;
      price += 299.99;
      shipping += 29.99;
      var calculatedTax = price * 0.0575;
      var grandTotalOfPrice = price + shipping + calculatedTax;
      document.querySelector(".serverInCart").innerHTML =
        "&nbsp;&nbsp;" + numberOfServerInCart + "&nbsp;&nbsp;";
      document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
      document.querySelector(".shippingAmount").innerHTML = shipping.toFixed(2);
      document.querySelector(".taxAmount").innerHTML = calculatedTax.toFixed(2);
      document.querySelector(".total").innerHTML = grandTotalOfPrice.toFixed(2);
      document.querySelector(".serverStockPage").innerHTML =
        "Currently out of stock.  Please check back at a later date.";
      document.querySelector(".serverStockItems").innerHTML =
        "Currently out of stock.  Please check back at a later date.";
      document.querySelector(".grandTotal").innerHTML =
        "Your total is $" + grandTotalOfPrice.toFixed(2) + ". Please pay here.";
    }

    if (numberOfServer <= 5 && numberOfServer >= 2) {
      grandTotalOfItems++;
      numberOfServer--;
      numberOfServerInCart++;
      serverQuantity++;
      price += 299.99;
      shipping += 29.99;
      var calculatedTax = price * 0.0575;
      var grandTotalOfPrice = price + shipping + calculatedTax;
      document.querySelector(".serverStockPage").innerHTML =
        numberOfServer + " left in stock.  Order soon!";
      document.querySelector(".serverStockItems").innerHTML =
        numberOfServer + " left in stock.  Order soon!";
      document.querySelector(".serverInCart").innerHTML =
        "&nbsp;&nbsp;" + numberOfServerInCart + "&nbsp;&nbsp;";
      document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
      document.querySelector(".shippingAmount").innerHTML = shipping.toFixed(2);
      document.querySelector(".taxAmount").innerHTML = calculatedTax.toFixed(2);
      document.querySelector(".total").innerHTML = grandTotalOfPrice.toFixed(2);
      document.querySelector(".grandTotal").innerHTML =
        "Your total is $" + grandTotalOfPrice.toFixed(2) + ". Please pay here.";
    } else {
      document.querySelector(".serverStockPage").innerHTML =
        "Currently out of stock.  Please check back at a later date.";
      document.querySelector(".serverStockItems").innerHTML =
        "Currently out of stock.  Please check back at a later date.";
    }

    document
      .querySelector(".subtractServer")
      .addEventListener("click", function (event) {
        event.stopImmediatePropagation();
        if (numberOfServerInCart <= 1) {
          serverInCart.remove();
        }
        if (serverQuantity <= 10 && serverQuantity >= 1) {
          numberOfServerInCart--;
          grandTotalOfItems--;
          numberOfServer++;
          serverQuantity--;
          price -= 299.99;
          shipping -= 29.99;
          var calculatedTax = price * 0.0575;
          var grandTotalOfPrice = price + shipping + calculatedTax;
          document.querySelector(".serverStockPage").innerHTML =
            numberOfServer + " left in stock.  Order soon!";
          document.querySelector(".serverStockItems").innerHTML =
            numberOfServer + " left in stock.  Order soon!";

          document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
          document.querySelector(".shippingAmount").innerHTML =
            shipping.toFixed(2);
          document.querySelector(".taxAmount").innerHTML =
            calculatedTax.toFixed(2);
          document.querySelector(".total").innerHTML =
            grandTotalOfPrice.toFixed(2);
          document.querySelector(".shoppingCartNumber").innerHTML =
            grandTotalOfItems;
          document.querySelector(".serverInCart").innerHTML =
            "&nbsp;&nbsp;" + numberOfServerInCart + "&nbsp;&nbsp;";
          document.querySelector(".amountLeftServerPage").innerHTML =
            numberOfServer;
          document.querySelector(".amountLeftServerItems").innerHTML =
            numberOfServer;
          document.querySelector(".grandTotal").innerHTML =
            "Your total is $" +
            grandTotalOfPrice.toFixed(2) +
            ". Please pay here.";
        } else {
          document.querySelector(".serverStockPage").innerHTML =
            "Currently out of stock.  Please check back at a later date.";
          document.querySelector(".serverStockItems").innerHTML =
            "Currently out of stock.  Please check back at a later date.";
        }
      });

    document
      .querySelector(".addServer")
      .addEventListener("click", function (event) {
        event.stopImmediatePropagation();

        if (serverQuantity <= 4 && serverQuantity >= 1) {
          numberOfServerInCart++;
          grandTotalOfItems++;
          numberOfServer--;
          serverQuantity++;
          price += 299.99;
          shipping += 29.99;
          var calculatedTax = price * 0.0575;
          var grandTotalOfPrice = price + shipping + calculatedTax;
          document.querySelector(".serverStockPage").innerHTML =
            numberOfServer + " left in stock.  Order soon!";
          document.querySelector(".serverStockItems").innerHTML =
            numberOfServer + " left in stock.  Order soon!";

          document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
          document.querySelector(".shippingAmount").innerHTML =
            shipping.toFixed(2);
          document.querySelector(".taxAmount").innerHTML =
            calculatedTax.toFixed(2);
          document.querySelector(".total").innerHTML =
            grandTotalOfPrice.toFixed(2);
          document.querySelector(".shoppingCartNumber").innerHTML =
            grandTotalOfItems;
          document.querySelector(".serverInCart").innerHTML =
            "&nbsp;&nbsp;" + numberOfServerInCart + "&nbsp;&nbsp;";
          document.querySelector(".amountLeftServerPage").innerHTML =
            numberOfServer;
          document.querySelector(".amountLeftServerItems").innerHTML =
            numberOfServer;
          document.querySelector(".grandTotal").innerHTML =
            "Your total is $" + grandTotalOfPrice.toFixed(2);
          +". Please pay here.";
        } else {
          document.querySelector(".serverStockPage").innerHTML =
            "Currently out of stock.  Please check back at a later date.";
          document.querySelector(".serverStockItems").innerHTML =
            "Currently out of stock.  Please check back at a later date.";
        }
      });

    document.querySelector(".shoppingCartNumber").innerHTML = grandTotalOfItems;
    document.querySelector(".serverInCart").innerHTML =
      "&nbsp;&nbsp;" + numberOfServerInCart + "&nbsp;&nbsp;";

    document.querySelector(".amountLeftServerPage").innerHTML = numberOfServer;
    document.querySelector(".amountLeftServerItems").innerHTML = numberOfServer;

    document.querySelector(".serverStockPage").innerHTML =
      numberOfServer + " left in stock.  Order soon!";
    document.querySelector(".serverStockItems").innerHTML =
      numberOfServer + " left in stock.  Order soon!";

    document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
    document.querySelector(".shippingAmount").innerHTML = shipping.toFixed(2);
    document.querySelector(".taxAmount").innerHTML = calculatedTax.toFixed(2);
    document.querySelector(".total").innerHTML = grandTotalOfPrice.toFixed(2);

    document.querySelector(".grandTotal").innerHTML =
      "Your total is $" + grandTotalOfPrice.toFixed(2) + ". Please pay here.";
  });

/*Add Thinker to Cart*/

var numberOfThinker = 20;
var numberOfThinkerInCart = 0;
var thinkerQuantity = 0;

document
  .querySelector(".addToCartThinker")
  .addEventListener("click", function () {
    if (numberOfThinker === 20) {
      var thinkerInCart = document.createElement("span");

      thinkerInCart.innerHTML =
        "<img alt='sculpture of a head with a fist under its chin looking pensive' src='../assets/images/thinker.jpg'/>" +
        "<div class=' quantity'>" +
        "<p>" +
        "<span>" +
        "Thinker Quantity:" +
        "<br/>" +
        "<br/>" +
        "<span/>" +
        "<a class='addSubtractButton subtractThinker'>" +
        "-" +
        "</a>" +
        "<span class='thinkerInCart'>" +
        "&nbsp;&nbsp;1&nbsp;&nbsp;" +
        "</span>" +
        "<a class='addSubtractButton addThinker'>" +
        "+" +
        "</a>" +
        "</p>" +
        "</div>";

      document.querySelector(".cartItemsContainer").append(thinkerInCart);
    }

    if (numberOfThinker === 1) {
      grandTotalOfItems++;
      numberOfThinker--;
      numberOfThinkerInCart++;
      thinkerQuantity++;
      price += 89.99;
      shipping += 19.99;
      var calculatedTax = price * 0.0575;
      var grandTotalOfPrice = price + shipping + calculatedTax;
      document.querySelector(".thinkerInCart").innerHTML =
        "&nbsp;&nbsp;" + numberOfThinkerInCart + "&nbsp;&nbsp;";
      document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
      document.querySelector(".shippingAmount").innerHTML = shipping.toFixed(2);
      document.querySelector(".taxAmount").innerHTML = calculatedTax.toFixed(2);
      document.querySelector(".total").innerHTML = grandTotalOfPrice.toFixed(2);
      document.querySelector(".thinkerStockPage").innerHTML =
        "Currently out of stock.  Please check back at a later date.";
      document.querySelector(".thinkerStockItems").innerHTML =
        "Currently out of stock.  Please check back at a later date.";
      document.querySelector(".grandTotal").innerHTML =
        "Your total is $" + grandTotalOfPrice.toFixed(2) + ". Please pay here.";
    }

    if (numberOfThinker <= 20 && numberOfThinker >= 2) {
      grandTotalOfItems++;
      numberOfThinker--;
      numberOfThinkerInCart++;
      thinkerQuantity++;
      price += 89.99;
      shipping += 19.99;
      var calculatedTax = price * 0.0575;
      var grandTotalOfPrice = price + shipping + calculatedTax;
      document.querySelector(".thinkerStockPage").innerHTML =
        numberOfThinker + " left in stock.  Order soon!";
      document.querySelector(".thinkerStockItems").innerHTML =
        numberOfThinker + " left in stock.  Order soon!";
      document.querySelector(".thinkerInCart").innerHTML =
        "&nbsp;&nbsp;" + numberOfThinkerInCart + "&nbsp;&nbsp;";
      document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
      document.querySelector(".shippingAmount").innerHTML = shipping.toFixed(2);
      document.querySelector(".taxAmount").innerHTML = calculatedTax.toFixed(2);
      document.querySelector(".total").innerHTML = grandTotalOfPrice.toFixed(2);
      document.querySelector(".grandTotal").innerHTML =
        "Your total is $" + grandTotalOfPrice.toFixed(2) + ". Please pay here.";
    } else {
      document.querySelector(".thinkerStockPage").innerHTML =
        "Currently out of stock.  Please check back at a later date.";
      document.querySelector(".thinkerStockItems").innerHTML =
        "Currently out of stock.  Please check back at a later date.";
    }

    document
      .querySelector(".subtractThinker")
      .addEventListener("click", function (event) {
        event.stopImmediatePropagation();
        if (numberOfThinkerInCart <= 1) {
          thinkerInCart.remove();
        }
        if (thinkerQuantity <= 20 && thinkerQuantity >= 1) {
          numberOfThinkerInCart--;
          grandTotalOfItems--;
          numberOfThinker++;
          thinkerQuantity--;
          price -= 89.99;
          shipping -= 19.99;
          var calculatedTax = price * 0.0575;
          var grandTotalOfPrice = price + shipping + calculatedTax;
          document.querySelector(".thinkerStockPage").innerHTML =
            numberOfThinker + " left in stock.  Order soon!";
          document.querySelector(".thinkerStockItems").innerHTML =
            numberOfThinker + " left in stock.  Order soon!";

          document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
          document.querySelector(".shippingAmount").innerHTML =
            shipping.toFixed(2);
          document.querySelector(".taxAmount").innerHTML =
            calculatedTax.toFixed(2);
          document.querySelector(".total").innerHTML =
            grandTotalOfPrice.toFixed(2);
          document.querySelector(".shoppingCartNumber").innerHTML =
            grandTotalOfItems;
          document.querySelector(".thinkerInCart").innerHTML =
            "&nbsp;&nbsp;" + numberOfThinkerInCart + "&nbsp;&nbsp;";
          document.querySelector(".amountLeftThinkerPage").innerHTML =
            numberOfThinker;
          document.querySelector(".amountLeftThinkerItems").innerHTML =
            numberOfThinker;
          document.querySelector(".grandTotal").innerHTML =
            "Your total is $" +
            grandTotalOfPrice.toFixed(2) +
            ". Please pay here.";
        } else {
          document.querySelector(".thinkerStockPage").innerHTML =
            "Currently out of stock.  Please check back at a later date.";
          document.querySelector(".thinkerStockItems").innerHTML =
            "Currently out of stock.  Please check back at a later date.";
        }
      });

    document
      .querySelector(".addThinker")
      .addEventListener("click", function (event) {
        event.stopImmediatePropagation();

        if (thinkerQuantity <= 19 && thinkerQuantity >= 1) {
          numberOfThinkerInCart++;
          grandTotalOfItems++;
          numberOfThinker--;
          thinkerQuantity++;
          price += 89.99;
          shipping += 19.99;
          var calculatedTax = price * 0.0575;
          var grandTotalOfPrice = price + shipping + calculatedTax;
          document.querySelector(".thinkerStockPage").innerHTML =
            numberOfThinker + " left in stock.  Order soon!";
          document.querySelector(".thinkerStockItems").innerHTML =
            numberOfThinker + " left in stock.  Order soon!";

          document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
          document.querySelector(".shippingAmount").innerHTML =
            shipping.toFixed(2);
          document.querySelector(".taxAmount").innerHTML =
            calculatedTax.toFixed(2);
          document.querySelector(".total").innerHTML =
            grandTotalOfPrice.toFixed(2);
          document.querySelector(".shoppingCartNumber").innerHTML =
            grandTotalOfItems;
          document.querySelector(".thinkerInCart").innerHTML =
            "&nbsp;&nbsp;" + numberOfThinkerInCart + "&nbsp;&nbsp;";
          document.querySelector(".amountLeftThinkerPage").innerHTML =
            numberOfThinker;
          document.querySelector(".amountLeftThinkerItems").innerHTML =
            numberOfThinker;
          document.querySelector(".grandTotal").innerHTML =
            "Your total is $" +
            grandTotalOfPrice.toFixed(2) +
            ". Please pay here.";
        } else {
          document.querySelector(".thinkerStockPage").innerHTML =
            "Currently out of stock.  Please check back at a later date.";
          document.querySelector(".thinkerStockItems").innerHTML =
            "Currently out of stock.  Please check back at a later date.";
        }
      });

    document.querySelector(".shoppingCartNumber").innerHTML = grandTotalOfItems;
    document.querySelector(".thinknerInCart").innerHTML =
      "&nbsp;&nbsp;" + numberOfThinkerInCart + "&nbsp;&nbsp;";

    document.querySelector(".amountLeftThinkerPage").innerHTML =
      numberOfThinker;
    document.querySelector(".amountLeftThinkerItems").innerHTML =
      numberOfThinker;

    document.querySelector(".thinkerStockPage").innerHTML =
      numberOfThinker + " left in stock.  Order soon!";
    document.querySelector(".thinkerStockItems").innerHTML =
      numberOfThinker + " left in stock.  Order soon!";

    document.querySelector(".dollarAmount").innerHTML = price.toFixed(2);
    document.querySelector(".shippingAmount").innerHTML = shipping.toFixed(2);
    document.querySelector(".taxAmount").innerHTML = calculatedTax.toFixed(2);
    document.querySelector(".total").innerHTML = grandTotalOfPrice.toFixed(2);

    document.querySelector(".grandTotal").innerHTML =
      "Your total is $" + grandTotalOfPrice.toFixed(2) + ". Please pay here.";
  });

/*Checkout Button Open and Close*/

document
  .querySelector(".checkoutButton")
  .addEventListener("click", function () {
    document.querySelector(".checkoutContainer").classList.remove("hide");

    document
      .querySelector(".closeCheckoutPage")
      .addEventListener("click", function () {
        document.querySelector(".checkoutContainer").classList.add("hide");
      });
  });

/*Open Thank You Page*/

var orderNumber = 0;

document
  .querySelector(".submitPaymentButton")
  .addEventListener("click", function () {
    document.querySelector(".thankYouContainer").classList.remove("hide");
    document.querySelector(".thankYouContainer").classList.add("thankYouFlex");
    orderNumber++;
    document.querySelector(".thankYouParagraph").innerHTML =
      "Thank you for your order!  Your order number is " +
      orderNumber +
      "! Keep it for your records. Please refresh this page to start over.";
  });

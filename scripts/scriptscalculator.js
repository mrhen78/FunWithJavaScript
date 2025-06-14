/*Calculator Page*/


/*Caculations*/

/* Eval is Deprectated though this is the most efficient way to do it*/

/*


document.getElementById("equalsButton").addEventListener("click", function () {
  var calculatorExpression = document.getElementById("resultBox").value;
  var result;

  try {
    result = eval(calculatorExpression);
  } catch (error) {
    result = "Error";
  }

  document.getElementById("resultBox").value = result;
});

*/

/*The below method is also frowned Upon because it used constructor functions*/

/*

document.getElementById("equalsButton").addEventListener("click", function () {
  var calculatorExpression = document.getElementById("resultBox").value;
  var result;

  function equation(fn) {
    return new Function("return " + fn)();
  }

  try {
    result = equation(calculatorExpression);
  } catch (error) {
    result = "Error";
  }

  document.getElementById("resultBox").value = result;
});

*/
document.getElementById("equalsButton").addEventListener("click", function () {
  var calculatorExpression = document.getElementById("resultBox").value;
  var result;

  try {
    result = math.evaluate(calculatorExpression);
  } catch (error) {
    result = "Error";
  }

  document.getElementById("resultBox").value = result;
});

/*Equals Button as Enter*/

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    document.getElementById("equalsButton").click();
  }
});

/*Numnbers and Operators as Buttons*/

document.getElementById("button7").addEventListener("click", function () {
  document.getElementById("resultBox").value += "7";
});

document.getElementById("button8").addEventListener("click", function () {
  document.getElementById("resultBox").value += "8";
});

document.getElementById("button9").addEventListener("click", function () {
  document.getElementById("resultBox").value += "9";
});

document.getElementById("divideButton").addEventListener("click", function () {
  document.getElementById("resultBox").value += "/";
});

document.getElementById("button4").addEventListener("click", function () {
  document.getElementById("resultBox").value += "4";
});
document.getElementById("button5").addEventListener("click", function () {
  document.getElementById("resultBox").value += "5";
});
document.getElementById("button6").addEventListener("click", function () {
  document.getElementById("resultBox").value += "6";
});

document
  .getElementById("multiplyButton")
  .addEventListener("click", function () {
    document.getElementById("resultBox").value += "*";
  });

document.getElementById("button1").addEventListener("click", function () {
  document.getElementById("resultBox").value += "1";
});
document.getElementById("button2").addEventListener("click", function () {
  document.getElementById("resultBox").value += "2";
});
document.getElementById("button3").addEventListener("click", function () {
  document.getElementById("resultBox").value += "3";
});

document
  .getElementById("subtractButton")
  .addEventListener("click", function () {
    document.getElementById("resultBox").value += "-";
  });

document.getElementById("button0").addEventListener("click", function () {
  document.getElementById("resultBox").value += "0";
});

document
  .getElementById("doubleZeroButton")
  .addEventListener("click", function () {
    document.getElementById("resultBox").value += "00";
  });
document.getElementById("decimalButton").addEventListener("click", function () {
  document.getElementById("resultBox").value += ".";
});

document
  .getElementById("additionButton")
  .addEventListener("click", function () {
    document.getElementById("resultBox").value += "+";
  });

document
  .getElementById("leftBraceButton")
  .addEventListener("click", function () {
    document.getElementById("resultBox").value += "(";
  });

document
  .getElementById("rightBraceButton")
  .addEventListener("click", function () {
    document.getElementById("resultBox").value += ")";
  });

document.getElementById("clearButton").addEventListener("click", function () {
  document.getElementById("resultBox").value = "";
});

/*Common Code for all Calculator Buttons*/

var numberOfCalculatorButtons =
  document.querySelectorAll(".calculatorButton").length;

for (var i = 0; i < numberOfCalculatorButtons; i++) {
  document
    .querySelectorAll(".calculatorButton")
  [i].addEventListener("click", function () {
    document.getElementById("calculatorAudio").play();
  });
}

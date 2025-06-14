/*Rough Calculator Function*/

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

/*Rough Calculator If Else After Button Click*/

document
  .querySelector("#roughCalculatorButton")
  .addEventListener("click", function () {
    var firstNumber = Number(
      prompt(
        "Let's do some calculations!  What would you like the first number to be?"
      )
    );

    if (isNaN(firstNumber) === false) {
      var secondNumber = Number(
        prompt("What would you like your second number to be?")
      );
      if (isNaN(secondNumber) === false) {
        var thirdAnswer = prompt(
          "Do you want to add, subtract, multiply, or divide? Only write the one word, please"
        );

        /*
    var finalThirdAnswer = eval(thirdAnswer);//This has been deprecated
  	
    if (finalThirdAnswer === add || finalThirdAnswer === subtract || finalThirdAnswer === multiply || finalThirdAnswer === divide)
    	
    */
        if (thirdAnswer === "divide") {
          document.querySelector("#firstRoughCalculatorParagraph").innerHTML =
            calculator(firstNumber, secondNumber, divide);
          alert("Great! Check out your total!");
        } else if (thirdAnswer === "add") {
          document.querySelector("#firstRoughCalculatorParagraph").innerHTML =
            calculator(firstNumber, secondNumber, add);
          alert("Great! Check out your total!");
        } else if (thirdAnswer === "subtract") {
          document.querySelector("#firstRoughCalculatorParagraph").innerHTML =
            calculator(firstNumber, secondNumber, subtract);
          alert("Great! Check out your total!");
        } else if (thirdAnswer === "multiply") {
          document.querySelector("#firstRoughCalculatorParagraph").innerHTML =
            calculator(firstNumber, secondNumber, multiply);
          alert("Great! Check out your final score!");
        } else {
          alert(
            "There seems to be some confusion, here. Let's try again. Click the button again to start over."
          );
        }
      } else {
        alert(
          "There seems to be some confusion, here. Let's try again. Click the button again to start over."
        );
      }
    } else {
      alert(
        "There seems to be some confusion, here. Let's try again. Click the button again to start over."
      );
    }
  });

/*Used With the Deprecated Eval
    var finalCalculation = calculator (firstNumber, secondNumber, finalThirdAnswer);
    document.querySelector("#firstRoughCalculatorParagraph").innerHTML= finalCalculation;
    */

/*Rough Calculator With Inputs*/

document
  .querySelector("#roughCalculatorSubmit")
  .addEventListener("click", function () {
    var firstAnswerNumber = Number(document.getElementById("firstNumberInput").value);
    var secondAnswerNumber = Number(document.getElementById("secondNumberInput").value);
    var thirdQuestionAnswer = document.getElementById("operatorInput").value;

    if (thirdQuestionAnswer === "divide") {
      document.querySelector("#secondRoughCalculatorParagraph").innerHTML =
        calculator(firstAnswerNumber, secondAnswerNumber, divide);
    }
    if (thirdQuestionAnswer === "add") {
      document.querySelector("#secondRoughCalculatorParagraph").innerHTML =
        calculator(firstAnswerNumber, secondAnswerNumber, add);
    }
    if (thirdQuestionAnswer === "subtract") {
      document.querySelector("#secondRoughCalculatorParagraph").innerHTML =
        calculator(firstAnswerNumber, secondAnswerNumber, subtract);
    }
    if (thirdQuestionAnswer === "multiply") {
      document.querySelector("#secondRoughCalculatorParagraph").innerHTML =
        calculator(firstAnswerNumber, secondAnswerNumber, multiply);
    }
  });

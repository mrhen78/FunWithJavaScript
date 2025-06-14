/*Alerts*/

/*Final Bonus Button on alerts*/

document.querySelector("#bonusButton").addEventListener("click", function () {
  var bonusNameOne = prompt(
    "Let's find out the love score of your favorite couple! It can be one with you, your friends, or celebrities. What is the first name? Only give me a first name, please."
  );
  var bonusNameTwo = prompt(
    "Now, give me the second name involved with your favorite couple. Only give me a first name, please."
  );

  var upperFirstCharBonusNameOne = bonusNameOne.slice(0, 1).toUpperCase();
  var lowerRestCharBonusNameOne = bonusNameOne
    .slice(1, bonusNameOne.length)
    .toLowerCase();
  var finalBonusNameOne =
    upperFirstCharBonusNameOne + lowerRestCharBonusNameOne;

  var upperFirstCharBonusNameTwo = bonusNameTwo.slice(0, 1).toUpperCase();
  var lowerRestCharBonusNameTwo = bonusNameTwo
    .slice(1, bonusNameTwo.length)
    .toLowerCase();
  var finalBonusNameTwo =
    upperFirstCharBonusNameTwo + lowerRestCharBonusNameTwo;

  var loveScore = Math.floor(Math.random() * 100) + 1;

  alert(
    "Great! That's " +
    finalBonusNameOne +
    " and " +
    finalBonusNameTwo +
    "! Let's see what their love score is!"
  );

  if (loveScore > 70) {
    return (document.getElementById("buttonParagraph").innerHTML =
      finalBonusNameOne +
      " and " +
      finalBonusNameTwo +
      "'s love score is " +
      loveScore +
      "%! They love each other like Trump loves Trump.");
  }
  if (loveScore > 30 && loveScore <= 70) {
    return (document.getElementById("buttonParagraph").innerHTML =
      finalBonusNameOne +
      " and " +
      finalBonusNameTwo +
      "'s love score is " +
      loveScore +
      "%. That's an acceptable amount of love for those two.");
  }
  if (loveScore <= 30) {
    return (document.getElementById("buttonParagraph").innerHTML =
      finalBonusNameOne +
      " and " +
      finalBonusNameTwo +
      "'s love score is " +
      loveScore +
      "%. They go together like oil and water.");
  } else {
    return (document.getElementById("buttonParagraph").innerHTML =
      finalBonusNameOne +
      " and " +
      finalBonusNameTwo +
      "'s love score is " +
      loveScore +
      "%. That is an odd lovescore, I must admit.");
  }
});
/*alert upon page load begin*/
if (window.location.href.match("alerts.html")) {
  /*Name*/
  var name = prompt(
    "Hello!  Welcome to my JavaScript site.  What is your first name?"
  );
  var upperFirstChar = name.slice(0, 1).toUpperCase();
  var lowerRestChar = name.slice(1, name.length).toLowerCase();
  var finalName = upperFirstChar + lowerRestChar;

  /*yes or no*/
  var lowerSecondAnswer = prompt(
    "Hello, " +
    finalName +
    "!  I hope you're having a great day!  Would you like to have fun with JavaScript along with me? Yes or No?"
  ).toLowerCase();

  while ((lowerSecondAnswer !== "yes") & (lowerSecondAnswer !== "no")) {
    var lowerSecondAnswer = prompt(
      "Sorry. That's not an option. Only type yes or no. Would you like to have fun with JavaScript with me?"
    ).toLowerCase();
  }

  if (lowerSecondAnswer === "yes") {
    /*Beginning of yes condition*/
    /*number from 1 to 100*/

    var thirdAnswerNumber = Number(
      prompt(
        "Great, " +
        finalName +
        ", let's get started! What number between 1-99 would you like to start from to count to a hundred?"
      )
    );

    while (isNaN(thirdAnswerNumber) === true) {
      var thirdAnswerNumber = Number(
        prompt(
          "There seems to be some confusion, here. Let's try again. Just give me a number. What number would you like to start from to count to a hundred?"
        )
      );
      while (thirdAnswerNumber >= 100) {
        var thirdAnswerNumber = Number(
          prompt(
            "Whoa, there, " +
            finalName +
            "! That's too big of a number! Think smaller and try again. What number would you like to start from to count to a hundred?"
          )
        );
      }
      while (thirdAnswerNumber <= 0) {
        var thirdAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". This will work much better if you stick with 1 or higher. What number would you like to start with to count to a hundred?"
          )
        );
      }
    }

    while (thirdAnswerNumber >= 100) {
      var thirdAnswerNumber = Number(
        prompt(
          "Whoa, there, " +
          finalName +
          "! That's too big of a number! Think smaller and try again. What number would you like to start from to count to a hundred?"
        )
      );
      while (thirdAnswerNumber <= 0) {
        var thirdAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". This will work much better if you stick with 1 or higher. What number would you like to start with to count to a hundred?"
          )
        );
      }
      while (isNaN(thirdAnswerNumber) === true) {
        var thirdAnswerNumber = Number(
          prompt(
            "There seems to be some confusion, here. Let's try again. Just give me a number. What number would you like to start from to count to a hundred?"
          )
        );
      }
    }

    while (thirdAnswerNumber <= 0) {
      var thirdAnswerNumber = Number(
        prompt(
          "Sorry, " +
          finalName +
          ". This will work much better if you stick with 1 or higher. What number would you like to start with to count to a hundred?"
        )
      );
      while (thirdAnswerNumber >= 100) {
        var thirdAnswerNumber = Number(
          prompt(
            "Whoa, there, " +
            finalName +
            "! That's too big of a number! Think smaller and try again. What number would you like to start from to count to a hundred?"
          )
        );
      }
      while (isNaN(thirdAnswerNumber) === true) {
        var thirdAnswerNumber = Number(
          prompt(
            "There seems to be some confusion, here. Let's try again. Just give me a number. What number would you like to start from to count to a hundred?"
          )
        );
      }
    }

    if ((thirdAnswerNumber < 100) & (thirdAnswerNumber >= 1)) {
      alert(
        "That's " +
        thirdAnswerNumber +
        ", " +
        finalName +
        "! We'll store that and come back to later.  Let's move on!"
      );
    }

    function hundredCount() {
      var hundredCountOutput = [];
      for (var i = thirdAnswerNumber; i < 101; i++) {
        hundredCountOutput.push(i);
      }
      var hundredCountOutputAsString = hundredCountOutput.join(", ");
      return (document.getElementById("countParagraph").innerHTML =
        hundredCountOutputAsString);
    }

    hundredCount();

    /*Bottles of Beer*/

    var fourthAnswerNumber = Number(
      prompt("How many bottles of beer are there on the wall?")
    );

    while (isNaN(fourthAnswerNumber) === true) {
      var fourthAnswerNumber = Number(
        prompt(
          "There seems to be some confusion, here. Let's try again. Just give me a number. How many bottles of beer are there on the wall?"
        )
      );
      while (fourthAnswerNumber <= 0) {
        var fourthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". This will work much better if you stick with 1 or higher. Choose a number to state how many bottles of beer are on the wall."
          )
        );
      }
      while (fourthAnswerNumber > 100) {
        var fourthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            "! This will work much better if you keep the number smaller. Choose a number beween 1 and 100. How many bottles of beer are on the wall?"
          )
        );
      }
    }

    while (fourthAnswerNumber <= 0) {
      var fourthAnswerNumber = Number(
        prompt(
          "Sorry, " +
          finalName +
          ". This will work much better if you stick with 1 or higher. Choose a number to state how many bottles of beer are on the wall."
        )
      );
      while (fourthAnswerNumber > 100) {
        var fourthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            "! This will work much better if you keep the number smaller. Choose a number beween 1 and 100. How many bottles of beer are on the wall?"
          )
        );
      }
      while (isNaN(fourthAnswerNumber) === true) {
        var fourthAnswerNumber = Number(
          prompt(
            "There seems to be some confusion, here. Let's try again. Just give me a number. How many bottles of beer are there on the wall?"
          )
        );
      }
    }

    while (fourthAnswerNumber > 100) {
      var fourthAnswerNumber = Number(
        prompt(
          "Sorry, " +
          finalName +
          "! This will work much better if you keep the number smaller. Choose a number beween 1 and 100. How many bottles of beer are on the wall?"
        )
      );
      while (fourthAnswerNumber <= 0) {
        var fourthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". This will work much better if you stick with 1 or higher. Choose a number to state how many bottles of beer are on the wall."
          )
        );
      }
      while (isNaN(fourthAnswerNumber) === true) {
        var fourthAnswerNumber = Number(
          prompt(
            "There seems to be some confusion, here. Let's try again. Just give me a number. How many bottles of beer are there on the wall?"
          )
        );
      }
    }

    alert(
      "Great! That's " +
      fourthAnswerNumber +
      ", " +
      finalName +
      "! We'll store that and come back to it!"
    );

    function beerWall() {
      var numberOfBottles = fourthAnswerNumber;
      var beerOutput = [];
      while (numberOfBottles > 0) {
        var bottleWord = "bottles";
        if (numberOfBottles === 1) {
          bottleWord = "bottle";
        }
        beerOutput.push(
          numberOfBottles + " " + bottleWord + " of beer on the wall"
        );
        beerOutput.push(numberOfBottles + " " + bottleWord + " of beer");
        beerOutput.push("Take one down and pass it around");
        numberOfBottles--;
        if (numberOfBottles === 1) {
          bottleWord = "bottle";
        }
        if (numberOfBottles === 0) {
          bottleWord = "bottles";
        }
        beerOutput.push(
          numberOfBottles + " " + bottleWord + " of beer on the wall"
        );
      }
      var beerOutputAsString = beerOutput.join(", ");
      return (document.getElementById("beerParagraph").innerHTML =
        beerOutputAsString);
    }

    beerWall();

    /*Dog to Human Age*/

    var fifthAnswerNumber = Number(
      prompt(
        "Let's find out how old your dog is in human age. How many years old is your dog? Just give me a number please."
      )
    );

    while (isNaN(fifthAnswerNumber) === true) {
      var fifthAnswerNumber = Number(
        prompt(
          "There seems to be some confusion, here. Let's try again. Just give me a number. How many years old is your dog?"
        )
      );
      while (fifthAnswerNumber < 0) {
        var fifthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". This will work much better if you stick with numbers that are possible. How many years old is your dog?"
          )
        );
      }
      while (fifthAnswerNumber > 25) {
        var fifthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            "! This will work much better if you keep the number smaller. Choose a more realistic dog age that is twenty-five or under. How many years old is your dog?"
          )
        );
      }
    }

    while (fifthAnswerNumber < 0) {
      var fifthAnswerNumber = Number(
        prompt(
          "Sorry, " +
          finalName +
          ". This will work much better if you stick with numbers that are possible. How many years old is your dog?"
        )
      );
      while (fifthAnswerNumber > 25) {
        var fifthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            "! This will work much better if you keep the number smaller. Choose a more realistic dog age that is twenty-five or under. How many years old is your dog?"
          )
        );
      }
      while (isNaN(fifthAnswerNumber) === true) {
        var fifthAnswerNumber = Number(
          prompt(
            "There seems to be some confusion, here. Let's try again. Just give me a number. How many years old is your dog?"
          )
        );
      }
    }

    while (fifthAnswerNumber > 25) {
      var fifthAnswerNumber = Number(
        prompt(
          "Sorry, " +
          finalName +
          "! This will work much better if you keep the number smaller. Choose a more realistic dog age that is twenty-five or under. How many years old is your dog?"
        )
      );
      while (fifthAnswerNumber < 0) {
        var fifthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". This will work much better if you stick with numbers that are possible. How many years old is your dog?"
          )
        );
      }
      while (isNaN(fifthAnswerNumber) === true) {
        var fifthAnswerNumber = Number(
          prompt(
            "There seems to be some confusion, here. Let's try again. Just give me a number. How many years old is your dog?"
          )
        );
      }
    }

    alert(
      "Great! That's " +
      fifthAnswerNumber +
      ", " +
      finalName +
      "! We'll save that for later and come back to it!"
    );

    var humanAge = (fifthAnswerNumber - 2) * 4 + 21;

    document.getElementById("dogParagraph").innerHTML =
      "Your dog is " + humanAge + " in human years!";

    /*Years Remaining to 90*/

    var sixthAnswerNumber = Number(
      prompt(
        "Let's find out how much you have left to live if you make it to 90. How old are you in years? Just give me a number, please."
      )
    );

    while (isNaN(sixthAnswerNumber) === true) {
      var sixthAnswerNumber = Number(
        prompt(
          "There seems to be some confusion, here. Just give me a single number to represent how old you are in years. How old are you?"
        )
      );
      while (sixthAnswerNumber < 0) {
        var sixthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". That's too small of a number. Choose a number that is zero or greater to represent how old you are."
          )
        );
      }
      while (sixthAnswerNumber >= 90) {
        var sixthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". That's too big of a number. If you're 90 or over, consider yourself very lucky. Choose a number that is 90 or below."
          )
        );
      }
    }

    while (sixthAnswerNumber < 0) {
      var sixthAnswerNumber = Number(
        prompt(
          "Sorry, " +
          finalName +
          ". That's too small of a number. Choose a number that is zero or greater to represent how old you are."
        )
      );
      while (isNaN(sixthAnswerNumber) === true) {
        var sixthAnswerNumber = Number(
          prompt(
            "There seems to be some confusion, here. Just give me a single number to represent how old you are in years. How old are you?"
          )
        );
      }
      while (sixthAnswerNumber >= 90) {
        var sixthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". That's too big of a number. If you're 90 or over, consider yourself very lucky. Choose a number that is 90 or below."
          )
        );
      }
    }

    while (sixthAnswerNumber >= 90) {
      var sixthAnswerNumber = Number(
        prompt(
          "Sorry, " +
          finalName +
          ". That's too big of a number. If you're 90 or over, consider yourself very lucky. Choose a number that is 90 or below."
        )
      );
      while (isNaN(sixthAnswerNumber) === true) {
        var sixthAnswerNumber = Number(
          prompt(
            "There seems to be some confusion, here. Just give me a single number to represent how old you are in years. How old are you?"
          )
        );
      }
      while (sixthAnswerNumber < 0) {
        var sixthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". That's too small of a number. Choose a number that is zero or greater to represent how old you are."
          )
        );
      }
    }

    alert(
      "Great! That's " +
      sixthAnswerNumber +
      ", " +
      finalName +
      "! We'll save that for later and come back to it!"
    );

    function lifeRemaining(sixthAnswerNumber) {
      var yearsRemaining = Number(90 - sixthAnswerNumber);
      var days = Number(yearsRemaining * 365);
      var weeks = Number(yearsRemaining * 52);
      var months = Number(yearsRemaining * 12);
      if (yearsRemaining === 1) var yearsWord = "year";
      else {
        var yearsWord = "years";
      }
      return (document.getElementById("yearsRemainingParagraph").innerHTML =
        "You have " +
        days +
        " days, " +
        weeks +
        " weeks, " +
        months +
        " months, and " +
        yearsRemaining +
        " " +
        yearsWord +
        " left.");
    }

    lifeRemaining(sixthAnswerNumber);

    /*BMI Calculator*/

    var weightPounds = Number(
      prompt("How much do you weigh in pounds? Just give me a number, please.")
    );

    while (isNaN(weightPounds) === true) {
      var weightPounds = Number(
        prompt(
          "There seems to be some confusion, here. Just give me a single number to represeny how much you weigh in pounds."
        )
      );
      while (weightPounds < 6) {
        var weightPounds = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". That's too small of a number. Choose a number that is 6 or higher to represeent how much you weight in pounds."
          )
        );
      }
      while (weightPounds > 1400) {
        var weightPounds = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". That's too big of a number. No human has ever been recorded weighing more thean 1400 pounds. Choose a number that is 1400 or below."
          )
        );
      }
    }

    while (weightPounds < 6) {
      var weightPounds = Number(
        prompt(
          "Sorry, " +
          finalName +
          ". That's too small of a number. Choose a number that is 6 or higher to represent how much you weigh in pounds."
        )
      );
      while (isNaN(weightPounds) === true) {
        var weightPounds = Number(
          prompt(
            "There seems to be some confusion, here. Just give me a single number to represent how much you weigh in pounds."
          )
        );
      }
      while (weightPounds >= 1400) {
        var weightPounds = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". That's too big of a number. No human has ever been recorded weighing more than 1400 pounds. Choose a number that is 1400 or below."
          )
        );
      }
    }

    while (weightPounds > 1400) {
      var weightPounds = Number(
        prompt(
          "Sorry, " +
          finalName +
          ". That's too big of a number. No human has ever been recorded weighing more than 1400 pounds. Choose a number that is 1400 or below."
        )
      );
      while (isNaN(weightPounds) === true) {
        var weightPounds = Number(
          prompt(
            "There seems to be some confusion, here. Just give me a single number to represent how much you weigh in pounds."
          )
        );
      }
      while (weightPounds < 6) {
        var weightPounds = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". That's too small of a number. Choose a number that is 6 or higher to represent how much you weigh in pounds."
          )
        );
      }
    }

    var heightInches = Number(
      prompt("How tall are you in inches? Just give me a number, please.")
    );

    while (isNaN(heightInches) === true) {
      var heightInches = Number(
        prompt(
          "There seems to be some confusion, here. Just give me a single number to represent how tall you are in inches."
        )
      );
      while (heightInches < 15) {
        var heightInches = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". That's too small of a number. Choose a number that is 15 or greater to represent how tall you are in inches."
          )
        );
      }
      while (heightInches > 107) {
        var heightInches = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". That's too big of a number. The tallest human in history is recorded at 107 inches. Choose a number that is 107 or below to represent how tall you are in inches."
          )
        );
      }
    }

    while (heightInches < 15) {
      var heightInches = Number(
        prompt(
          "Sorry, " +
          finalName +
          ". That's too small of a number. Choose a number that is 15 or greater to represent how tall you are in inches."
        )
      );
      while (isNaN(heightInches) === true) {
        var heightInches = Number(
          prompt(
            "There seems to be some confusion, here. Just give me a single number to represent how tall you are in inches."
          )
        );
      }
      while (heightInches >= 107) {
        var heightInches = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". That's too big of a number. The tallest human in history is recorded at 107 inches. Choose a number that is 107 or below to represent how tall you are in inches."
          )
        );
      }
    }

    while (heightInches > 107) {
      var heightInches = Number(
        prompt(
          "Sorry, " +
          finalName +
          ". That's too big of a number. The tallest human in history is recorded at 107 inches. Choose a number that is 107 or below to represent how tall you are in inches."
        )
      );
      while (isNaN(heightInches) === true) {
        var heightInches = Number(
          prompt(
            "There seems to be some confusion, here. Just give me a single number to represent how tall you are in inches."
          )
        );
      }
      while (heightInches < 15) {
        var heightInches = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". That's too small of a number. Choose a number that is 15 or greater to represent how tall you are in inches."
          )
        );
      }
    }

    alert(
      "Great! You weigh " +
      weightPounds +
      " pounds and are " +
      heightInches +
      " inches tall. We'll save that for later and come back to it!"
    );

    var weightKilograms = weightPounds / 2.20462;

    var heightMeters = heightInches * 0.0254;

    function bmiCalculator(weightKilograms, heightMeters) {
      var bmi = Math.round(weightKilograms / Math.pow(heightMeters, 2));
      var interpretation;
      if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
      }
      if (bmi >= 18.5 && bmi < 25) {
        interpretation =
          "Your BMI is " + bmi + ", so you have a normal weight.";
      }
      if (bmi >= 25) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
      }
      return (document.getElementById("bodyMassParagraph").innerHTML =
        interpretation);
    }

    bmiCalculator(weightKilograms, heightMeters);

    /*Leap Year Challenge*/

    var ninthAnswerNumber = Number(
      prompt(
        "Let's find out if you were born in a leap year. What year were you born?"
      )
    );

    while (isNaN(ninthAnswerNumber) === true) {
      var ninthAnswerNumber = Number(
        prompt(
          "There seems to be some confusion, here. Just give me a single number to represent the year in which you were born."
        )
      );
      while (ninthAnswerNumber < 1900) {
        var ninthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". That's too small of a number. Choose a realistic number that is 1900 or higher to represent the year in which you were born."
          )
        );
      }
      while (ninthAnswerNumber > 2025) {
        var ninthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". That's too big of a number. We are currently in the year 2025 and can't go any higher than that. Choose a number that is 2025 or below to represent the year in which you were born."
          )
        );
      }
    }

    while (ninthAnswerNumber < 1900) {
      var ninthAnswerNumber = Number(
        prompt(
          "Sorry, " +
          finalName +
          ". That's too small of a number. Choose a realistic number that is 1900 or higher to represent the year in which you were born."
        )
      );
      while (isNaN(ninthAnswerNumber) === true) {
        var ninthAnswerNumber = Number(
          prompt(
            "There seems to be some confusion, here. Just give me a single number to represent the year in which you were born."
          )
        );
      }
      while (ninthAnswerNumber > 2025) {
        var ninthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". That's too big of a number. We are currently in the year 2025 and can't go any higher than that. Choose a number that is 2025 or below to represent the year in which you were born."
          )
        );
      }
    }

    while (ninthAnswerNumber > 2025) {
      var ninthAnswerNumber = Number(
        prompt(
          "Sorry, " +
          finalName +
          ". That's too big of a number. We are currently in the year 2025 and can't go any higher than that. Choose a number that is 2025 or below to represent the year in which you were born."
        )
      );
      while (isNaN(ninthAnswerNumber) === true) {
        var ninthAnswerNumber = Number(
          prompt(
            "There seems to be some confusion, here. Just give me a single number to represent the year in which you were born."
          )
        );
      }
      while (ninthAnswerNumber < 1900) {
        var ninthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". That's too small of a number. Choose a realistic number that is 1900 or higher to represent the year in which you were born."
          )
        );
      }
    }

    alert(
      "Great! That's the year " +
      ninthAnswerNumber +
      "! We'll store that and come back to it later!"
    );

    var interpretation2;

    if (ninthAnswerNumber % 4 === 0) {
      if (ninthAnswerNumber % 100 === 0) {
        if (ninthAnswerNumber % 400 === 0) {
          interpretation2 =
            "You were born in " +
            ninthAnswerNumber +
            " and that is a leap year!";
        } else {
          interpretation2 =
            "You were born in " +
            ninthAnswerNumber +
            " and that is NOT a leap year.";
        }
      } else {
        interpretation2 =
          "You were born in " + ninthAnswerNumber + " and that is a leap year!";
      }
    } else {
      interpretation2 =
        "You were born in " +
        ninthAnswerNumber +
        " and that is NOT a leap year.";
    }

    document.getElementById("leapYearParagraph").innerHTML = interpretation2;

    /*FizzBuzz Challenge*/

    var tenthAnswerNumber = prompt(
      "Choose a number between 1 and 99 to count to a hundred and set the FizzBuzz challenge into motion. Nunmbers divisible by 3 will print as Fizz. Numbers divisble by 5 will print as Buzz. Numbers divisible by 3 and 5 will print as FIZZBUZZ."
    );

    while (isNaN(tenthAnswerNumber) === true) {
      var tenthAnswerNumber = Number(
        prompt(
          "There seems to be some confusion, here. Let's try again. Just give me a number. What number would you like to start from to count to a hundred to implement the FizzBuzz challenge?"
        )
      );
      while (tenthAnswerNumber >= 100) {
        var tenthAnswerNumber = Number(
          prompt(
            "Whoa, there, " +
            finalName +
            "! That's too big of a number! Think smaller and try again. What number would you like to start from to count to a hundred to implement the FizzBuzz challenge?"
          )
        );
      }
      while (tenthAnswerNumber <= 0) {
        var tenthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". This will work much better if you stick with 1 or higher. What number would you like to start with to count to a hundred to implement the FizzBuzz challenge?"
          )
        );
      }
    }

    while (tenthAnswerNumber >= 100) {
      var tenthAnswerNumber = Number(
        prompt(
          "Whoa, there, " +
          finalName +
          "! That's too big of a number! Think smaller and try again. What number would you like to start from to count to a hundred to implement the FizzBuzz challenge?"
        )
      );
      while (tenthAnswerNumber <= 0) {
        var tenthAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". This will work much better if you stick with 1 or higher. What number would you like to start with to count to a hundred to implement the FizzBuzz challenge?"
          )
        );
      }
      while (isNaN(tenthAnswerNumber) === true) {
        var tenthAnswerNumber = Number(
          prompt(
            "There seems to be some confusion, here. Let's try again. Just give me a number. What number would you like to start from to count to a hundred to implement the FizzBuzz challenge?"
          )
        );
      }
    }

    while (tenthAnswerNumber <= 0) {
      var tenthAnswerNumber = Number(
        prompt(
          "Sorry, " +
          finalName +
          ". This will work much better if you stick with 1 or higher. What number would you like to start with to count to a hundred to implement the FizzBuzz challenge?"
        )
      );
      while (tenthAnswerNumber >= 100) {
        var tenthAnswerNumber = Number(
          prompt(
            "Whoa, there, " +
            finalName +
            "! That's too big of a number! Think smaller and try again. What number would you like to start from to count to a hundred to implement the FizzBuzz challenge?"
          )
        );
      }
      while (isNaN(tenthAnswerNumber) === true) {
        var tenthAnswerNumber = Number(
          prompt(
            "There seems to be some confusion, here. Let's try again. Just give me a number. What number would you like to start from to count to a hundred to implement the FizzBuzz challenge?"
          )
        );
      }
    }

    if ((tenthAnswerNumber < 100) & (tenthAnswerNumber >= 1)) {
      alert(
        "That's " +
        tenthAnswerNumber +
        ", " +
        finalName +
        "! We'll store that and come back to later.  Let's move on!"
      );
    }

    var outputFizzBuzz = [];
    function fizzBuzz() {
      for (tenthAnswerNumber; tenthAnswerNumber < 101; tenthAnswerNumber++) {
        if (tenthAnswerNumber % 3 === 0 && tenthAnswerNumber % 5 === 0) {
          outputFizzBuzz.push("FIZZBUZZ");
        } else if (tenthAnswerNumber % 3 === 0) {
          outputFizzBuzz.push("Fizz");
        } else if (tenthAnswerNumber % 5 === 0) {
          outputFizzBuzz.push("Buzz");
        } else {
          outputFizzBuzz.push(tenthAnswerNumber);
        }
      }
      var outputFizzBuzzAsString = outputFizzBuzz.join(", ");
      return (document.getElementById("fizzBuzzParagraph").innerHTML =
        outputFizzBuzzAsString);
    }

    fizzBuzz();

    /*Fibonacci Code*/

    var eleventhAnswerNumber = Number(
      prompt(
        "How many numbers would you like to count using the Fibonacci formula where every number is the sum of the previous two numbers?"
      )
    );

    while (isNaN(eleventhAnswerNumber) === true) {
      var eleventhAnswerNumber = Number(
        prompt(
          "There seems to be some confusion, here. Let's try again. Just give me a number. How many numbers would you like to count using the Fibonacci formula?"
        )
      );
      while (eleventhAnswerNumber >= 100) {
        var eleventhAnswerNumber = Number(
          prompt(
            "Whoa, there, " +
            finalName +
            "! That's too big of a number! Think smaller and try again. How many numbers would you like to count under 100 using the Fibonacci formula?"
          )
        );
      }
      while (eleventhAnswerNumber <= 0) {
        var eleventhAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". This will work much better if you stick with 1 or higher. How many numbers would you like to count using the Fibonacci formula?"
          )
        );
      }
    }

    while (eleventhAnswerNumber >= 100) {
      var eleventhAnswerNumber = Number(
        prompt(
          "Whoa, there, " +
          finalName +
          "! That's too big of a number! Think smaller and try again. How many numbers would you like to count under 100 using the Fibonacci formula?"
        )
      );
      while (eleventhAnswerNumber <= 0) {
        var eleventhAnswerNumber = Number(
          prompt(
            "Sorry, " +
            finalName +
            ". This will work much better if you stick with 1 or higher. How many numbers would you like to count using the Fibonacci formula?"
          )
        );
      }
      while (isNaN(eleventhAnswerNumber) === true) {
        var eleventhAnswerNumber = Number(
          prompt(
            "There seems to be some confusion, here. Let's try again. Just give me a number. How many numbers would you like to count using the Fibonacci formula??"
          )
        );
      }
    }

    while (eleventhAnswerNumber <= 0) {
      var eleventhAnswerNumber = Number(
        prompt(
          "Sorry, " +
          finalName +
          ". This will work much better if you stick with 1 or higher. How many numbers would you like to count using the Fibonacci formula?"
        )
      );
      while (eleventhAnswerNumber >= 100) {
        var eleventhAnswerNumber = Number(
          prompt(
            "Whoa, there, " +
            finalName +
            "! That's too big of a number! Think smaller and try again. How many numbers would you like to count under 100 using the Fibonacci formula?"
          )
        );
      }
      while (isNaN(eleventhAnswerNumber) === true) {
        var eleventhAnswerNumber = Number(
          prompt(
            "There seems to be some confusion, here. Let's try again. Just give me a number. How many numbers would you like to count using the Fibonacci formula??"
          )
        );
      }
    }

    if ((eleventhAnswerNumber < 100) & (eleventhAnswerNumber >= 1)) {
      alert(
        "That's " +
        eleventhAnswerNumber +
        ", " +
        finalName +
        "! We'll store that and come back to later.  Let's move on!"
      );
    }

    function fibonacciGenerator(n) {
      var outputFibonacci = [];
      if (n === 1) {
        outputFibonacci = [0];
      } else if (n === 2) {
        outputFibonacci = [0, 1];
      } else {
        outputFibonacci = [0, 1];

        for (var i = 2; i < n; i++) {
          outputFibonacci.push(
            outputFibonacci[outputFibonacci.length - 2] +
            outputFibonacci[outputFibonacci.length - 1]
          );
        }
      }
      var outputFibonacciAsString = outputFibonacci.join(", ");
      return (document.getElementById("fibonacciParagraph").innerHTML =
        outputFibonacciAsString);
    }

    fibonacciGenerator(eleventhAnswerNumber);

    /*End of yes condition*/
  }

  /*no condition*/
  if (lowerSecondAnswer === "no") {
    alert("No problem! Have a great day!");
  }

  alert(
    "It seems we have come to an end. Thank you for visiting my site. If you'd like to start over on this page, refresh it. Otherwise, enjoy the results of this page in its current form and enjoy the rest of the site!"
  );

  /*End of Alert Window*/
}
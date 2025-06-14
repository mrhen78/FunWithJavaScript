/*Animation and Playing Sounds on click*/

var numberOfPosterButtons =
  document.querySelectorAll(".moviePosterButton").length;

for (var i = 0; i < numberOfPosterButtons; i++) {
  document
    .querySelectorAll(".moviePosterButton")
  [i].addEventListener("click", function () {
    var classNameTwo = this.getAttribute("ID");
    makeSound(classNameTwo);
    buttonAnimation(classNameTwo);
  });
}

/*Playing Audio and Triggering Animation with Keyboard*/

document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

/*Function For Button Animation*/

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("moviePosterAnimation");

  setTimeout(function () {
    activeButton.classList.remove("moviePosterAnimation");
  }, 100);
}

/*Function For Switch Statement For Audio Play*/

function makeSound(key) {
  switch (key) {
    case "e":
      new Audio("../assets/audio/edward.mp3").play();
      break;

    case "b":
      new Audio("../assets/audio/blade.mp3").play();
      break;

    case "w":
      new Audio("../assets/audio/wild.mp3").play();
      break;

    case "n":
      new Audio("../assets/audio/natural.mp3").play();
      break;

    case "d":
      new Audio("../assets/audio/ed.mp3").play();
      break;

    default:
      console.log(key);
  }
}

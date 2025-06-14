/*randomization code*/
var randomNumber = Math.random() * 6 + 1;
var randomBandNumber = Math.floor(randomNumber);
document.getElementById('randomizationContainer' + randomBandNumber).classList.add("randomizationGeneralContainerDisplayOn");

/*reload on button click*/

document.getElementById("randomizationButton").addEventListener("click", function () {

    location.reload();

})
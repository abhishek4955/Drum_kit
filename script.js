window.onload = function() {
  // Retrieve all the elements with class "drum"
  var buttons = document.getElementsByClassName("drum");

  // Add click event listeners to each button
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      var buttonInnerHTML = this.innerHTML;
      playDrumSound(buttonInnerHTML);
    });
  }

  // Add keyboard event listeners for specific keys
  window.addEventListener("keyup", function(event) {
    var key = event.key.toLowerCase();
    if (key === "w" || key === "a" || key === "s" || key === "d" || key === "j" || key === "k" || key === "l") {
      playDrumSound(key);
    }
  });
};

// Function to play Drum Sounds
function playDrumSound(key) {
  var audio = new Audio();
  
  // Set the audio source based on the button key
  switch (key) {
    case "w":
      audio.src = "./audio/drum-1.mp3";
      break;
    case "a":
      audio.src = "./audio/drum-2.mp3";
      break;
    case "s":
      audio.src = "./audio/drum-3.mp3";
      break;
    case "d":
      audio.src = "./audio/drum-4.mp3";
      break;
    case "j":
      audio.src = "./audio/drum-5.mp3";
      break;
    case "k":
      audio.src = "./audio/drum-6.mp3";
      break;
    case "l":
      audio.src = "./audio/drum-7.mp3";
      break;
    default:
      return;
  }

  audio.play();
}

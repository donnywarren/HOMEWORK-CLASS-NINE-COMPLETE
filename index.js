document.addEventListener('DOMContentLoaded', function() {
  // select ALL of the buttons at once
  var buttons = document.querySelectorAll('.selection-btn');

  // forEach is a way you can loop through each button and do something with it
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // "this" refers to the button that was just clicked on
      // .getAttribute gets the data-color attribute I setup on the button in the html
      // data-color I totally just made up, you can makeup attributes to store data
      var color = this.getAttribute('data-color');
      createBox(color);
    });
  });

  function createBox(color) {
    var newBox = document.createElement("div");
    newBox.className="result-box " + color;
    newBox.onclick=function() {this.remove();};
    document.getElementById("landing-box").appendChild(newBox);
    console.log(color + " button was clicked");
  }


});

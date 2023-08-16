$(document).ready(function () {
  // counting number of steps
  let count = 0;
  $("#count").text(++count);
  // Mapping id and related neighbours with their Ids as an object array
  $("td").on("click", function () {
    var idMappings = {
      1: ["1", "2", "4"],
      2: ["1", "2", "3", "5"],
      3: ["2", "3", "6"],
      4: ["1", "4", "5", "7"],
      5: ["2", "4", "5", "6", "8"],
      6: ["3", "5", "6", "9"],
      7: ["4", "7", "8"],
      8: ["5", "7", "8", "9"],
      9: ["6", "8", "9"],
    };
    // Method for checking and toggling the element and their neighbours
    var idsToToggle = idMappings[this.id];
    idsToToggle.forEach(function (id) {
      var $element = $("#" + id);
      var currentColor = $element.css("background-color");
      var newColor =
        currentColor === "rgb(0, 0, 0)" ? "rgba(0, 0, 0, 0)" : "rgb(0, 0, 0)";
      $element.css("background-color", newColor);
    });
    // Incrementing and displaying count
    $("#count").text(++count);
    // Checking the final codition, all block colours should be same
    var allColorsSame = true;
    var firstColor = $("#" + idsToToggle[0]).css("background-color");
    for (let index = 1; index <= 9; index++) {
      console.log($("#" + index).css("background-color"));
      if ($("#" + index).css("background-color") !== firstColor) {
        allColorsSame = false;
      }
    }
    //  Displaying Allert if game completed
    if (allColorsSame) {
      alert("You Won in " + count + " moves");
      location.reload();
    }
  });
});

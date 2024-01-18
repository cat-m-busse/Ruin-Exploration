// Ruin Crawler game (graphics code)
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 750;
cnv.height = 400;

// We need the entrance of the ruin as the main page
// This will be an image, so we need to import that
let ruinEntrance = document.getElementById("ruin-entrance-img");
let finalRoom = document.getElementById("final-room");
let mysteriousRoom = document.getElementById("mysterious-room");
let sunlitRoom = document.getElementById("sunlit-room");
let decoratedRoom = document.getElementById("decorated-room");

// Now we draw the img being sure to scale to the size of canvas
ctx.drawImage(ruinEntrance, 0, 0, 750, 400);
ctx.font = "42px Comic Sans MS";
ctx.fillStyle = "white";
ctx.fillText("Explore the Ruins", 200, 200);
// We want the image to change as the player selects different rooms from the selector. Using a chained if statement, this should work.

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let command = document.getElementById("command-input").value.toLowerCase();

  if (command === "w") {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.drawImage(decoratedRoom, 0, 0, 750, 400);
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.fillText("!", 580, 220);
  } else if (command === "a") {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.drawImage(sunlitRoom, 0, 0, 750, 400);
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.fillText("?", 70, 150);
  } else if (command === "s") {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.drawImage(mysteriousRoom, 0, 0, 750, 400);
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.fillText("+", 155, 125);
  } else if (command === "d") {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "white";
    ctx.font = "20px Times New Roman";
    ctx.fillText("Go back and find more clues to unlock this room", 180, 200);
    // The following room is the final room. This will include a congrats to the player
  } else if (command === "light the path") {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.drawImage(finalRoom, 0, 0, 750, 400);
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.fillText("Msg", 350, 50);
  } else if (command === "help") {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "white";
    ctx.font = "20px Times New Roman";
    ctx.fillText(
      "Oh alright, I'll give you the code. 'Light the Path' will lead you to your destination",
      40,
      200
    );
  } else if (command === "msg") {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "white";
    ctx.font = "18px Times New Roman";
    ctx.fillText(
      "Congratulations! You're now an expert at ruin exploration! Hope you had fun, until next time!",
      30,
      200
    );
  } else if (command === "?") {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "white";
    ctx.font = "20px Times New Roman";
    ctx.fillText(
      "In the first sequence of completion I am what gives warmth and life to this planet.",
      40,
      200
    );
  } else if (command === "!") {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "white";
    ctx.font = "20px Times New Roman";
    ctx.fillText(
      "The second sequence is but a filler. Without this, what would make sense of the passage?",
      20,
      200
    );
  } else if (command === "+") {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "white";
    ctx.font = "20px Times New Roman";
    ctx.fillText(
      "What is a doorway without a ____ leading through? The third sequence is so.",
      60,
      200
    );
  } else {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.drawImage(ruinEntrance, 0, 0, 750, 400);
    ctx.font = "42px Comic Sans MS";
    ctx.fillText("Enter a valid command to continue", 40, 200);
  }
}

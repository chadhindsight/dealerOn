function commandFunc(str: string) {
  let moves = str.split("");

  moves.forEach((move) => {
    if (move === "f") {
      moveForward(rover);
      rover.travelLog.push([rover.x, rover.y]);
    } else if (move === "r") {
      turnRight(rover);
    } else if (move === "l") {
      turnLeft(rover);
    } else if (move === "b") {
      moveBackwards(rover);
      rover.travelLog.push([rover.x, rover.y]);
    }
    //Validate input
    else {
      console.log(
        "That command is not a rover command. Please enter either f, r, l, or b!"
      );
    }
  });
  //Log all previous locations from travel log
  console.log(rover.travelLog);
}

commandFunc("rfbfrfb");

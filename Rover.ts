function commandFunc(boundX, boundY, str: string) {
  let moves = str.split("");

  moves.forEach((move) => {
    if (move === "F") {
      moveForward(rover);
      rover.travelLog.push([rover.x, rover.y]);
    } else if (move === "R") {
      turnRight(rover);
    } else if (move === "L") {
      turnLeft(rover);
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

// commandFunc("rfbfrfb");

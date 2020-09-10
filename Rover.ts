function commandFunc(boundX, boundY, str: string) {
  let actions = str.split("");

  actions.forEach((action) => {
    if (action === "M") {
      moveForward(rover);
      rover.travelLog.push([rover.x, rover.y]);
    } else if (action === "R") {
      turnRight(rover);
    } else if (action === "L") {
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

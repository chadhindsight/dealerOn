type Rover = {
  start: string;
  input: string;
  x: number;
  y: number;
};

//Store the expected output
let rover1: Rover = {
  start: "1 2 N",
  input: "LMLMLMLMM",
  x: 0,
  y: 0,
};
let rover2: Rover = {
  start: "1 2 N",
  input: "LMLMLMLMM",
  x: 0,
  y: 0,
};

// NB: input is the string you get from the rover input property
function commandFunc(boundX: number, boundY: number, rover) {
  let actions = rover.input.split("");

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
        "That command is not a rover command. Please enter either r, l or m"
      );
    }
  });
  //Log all previous locations from travel log
  console.log(rover.travelLog);
}

// commandFunc("rfbfrfb");

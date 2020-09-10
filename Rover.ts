type Rover = {
  start: string;
  input: string;
  x: number;
  y: number;
};

//Store the expected itput values
let rover1: Rover = {
  start: "1 2 N",
  input: "LMLMLMLMM",
  x: 0,
  y: 0,
};
let rover2: Rover = {
  start: "3 3 E",
  input: "MMRMMRMRRM",
  x: 0,
  y: 0,
};

// going North and East increment up, going forward South and West decrement

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
  });

  //Log all previous locations from travel log
  console.log(rover.travelLog);
}

// commandFunc("rfbfrfb");

type Rover = {
  input: string;
  x: number;
  y: number;
  direction: string;
};

//Store the expected input values in objects
let rover1: Rover = {
  input: "LMLMLMLMM",
  x: 1,
  y: 2,
  direction: "N",
};
let rover2: Rover = {
  input: "MMRMMRMRRM",
  x: 3,
  y: 3,
  direction: "E",
};

// going forward North and East increment up, going forward South and West decrement

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

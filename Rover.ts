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

// going forward North and East increment, going forward South and West decrement
function move(vehicle) {
  switch (vehicle.direction) {
    case "N":
      vehicle.y++;
      break;
    case "S":
      vehicle.y--;
      break;
    case "E":
      vehicle.x++;
      break;
    case "W":
      vehicle.x--;
      break;
    default:
      break;
  }
}
// LOGIC TO TURN LEFT
const turnLeft = function (rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";

      break;
    case "S":
      rover.direction = "E";

      break;
    case "E":
      rover.direction = "N";

      break;
    case "W":
      rover.direction = "S";
  }
};

// LOGIC TO TURN RIGHT
const turnRight = function (rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "S":
      rover.direction = "W";
      break;

    case "E":
      rover.direction = "S";
      break;

    case "W":
      rover.direction = "N";
      break;
  }
};

function commandFunc(rover) {
  let actions = rover.input.split("");

  actions.forEach((action) => {
    if (action === "M") {
      move(rover);
    } else if (action === "R") {
      turnRight(rover);
    } else if (action === "L") {
      turnLeft(rover);
    }
  });

  //This ensures the rover is within bounds
  if (rover.x >= 0 && rover.y >= 0 && rover.x <= 5 && rover.y <= 5) {
    console.log(`${rover2.x} ${rover2.y} ${rover2.direction}`);
  } else {
    console.log("Out of bounds!");
  }
}

commandFunc(rover2);

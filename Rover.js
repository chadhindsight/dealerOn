//Store the expected input values in objects
var rover1 = {
    input: "LMLMLMLMM",
    x: 1,
    y: 2,
    direction: "N"
};
var rover2 = {
    input: "MMRMMRMRRM",
    x: 3,
    y: 3,
    direction: "E"
};
// going forward North and East increment up, going forward South and West decrement
function move(vehicle) {
    //Make sure the rover is within bounds
    if (vehicle.x >= 0 && vehicle.y >= 0 && vehicle.x <= 5 && vehicle.y <= 5) {
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
}
function commandFunc(rover) {
    var actions = rover.input.split("");
    actions.forEach(function (action) {
        if (action === "M") {
            //   moveForward(rover);
            // } else if (action === "R") {
            //   turnRight(rover);
            // } else if (action === "L") {
            //   turnLeft(rover);
            if (action === "M") {
                move(rover);
            }
            else if (action === "R") {
                console.log("soon come");
            }
            else if (action === "L") {
                console.log("soon come");
            }
        }
    });
    //Log all previous locations from travel log
    console.log(rover1.x, rover1.y);
}
commandFunc(rover1);

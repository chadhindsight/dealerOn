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
// going forward North and East increment, going forward South and West decrement
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
// LOGIC TO TURN LEFT
var turnLeft = function (rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            console.log(rover.direction);
            break;
        case "S":
            rover.direction = "E";
            console.log(rover.direction);
            break;
        case "E":
            rover.direction = "N";
            console.log(rover.direction);
            break;
        case "W":
            rover.direction = "S";
            console.log(rover.direction);
    }
    console.log("turnLeft was called!");
};
// LOGIC TO TURN RIGHT
var turnRight = function (rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            console.log(rover.direction);
            break;
        case "S":
            rover.direction = "W";
            console.log(rover.direction);
            break;
        case "E":
            rover.direction = "S";
            console.log(rover.direction);
            break;
        case "W":
            rover.direction = "N";
            console.log(rover.direction);
            break;
    }
};
function commandFunc(rover) {
    var actions = rover.input.split("");
    actions.forEach(function (action) {
        if (action === "M") {
            move(rover);
        }
        else if (action === "R") {
            turnRight(rover);
        }
        else if (action === "L") {
            turnLeft(rover);
        }
    });

    console.log(rover2.x + " " + rover2.y + " " + rover2.direction);
}
commandFunc(rover2);

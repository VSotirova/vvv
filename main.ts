input.onButtonPressed(Button.A, function () {
    turtle.setPosition(0, 0)
    turtle.pen(TurtlePenMode.Down)
    for (let index = 0; index < 4; index++) {
        turtle.back(1)
    }
    turtle.turnRight()
    for (let index = 0; index < 4; index++) {
        turtle.forward(1)
    }
    turtle.turnLeft()
    for (let index = 0; index < 4; index++) {
        turtle.forward(1)
        turtle.pen(TurtlePenMode.Up)
        turtle.turnLeft()
        turtle.forward(1)
        turtle.pen(TurtlePenMode.Down)
        turtle.turnRight()
    }
})
input.onButtonPressed(Button.AB, function () {
    turtle.setPosition(0, 0)
    turtle.pen(TurtlePenMode.Down)
    for (let index = 0; index < 4; index++) {
        turtle.turnRight()
        turtle.forward(4)
    }
})
input.onButtonPressed(Button.B, function () {
    turtle.setPosition(1, 0)
    turtle.pen(TurtlePenMode.Down)
    for (let index = 0; index < 4; index++) {
        turtle.turnRight()
        turtle.forward(2)
        turtle.turnRight()
        turtle.forward(3)
    }
})

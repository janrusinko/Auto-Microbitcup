radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        servos.P1.run(100)
        servos.P2.run(100)
    }
    if (receivedNumber == 1) {
        servos.P1.run(0)
        servos.P2.run(0)
    }
    if (receivedNumber == 2) {
        servos.P1.run(0)
        servos.P2.run(100)
    }
    if (receivedNumber == 3) {
        servos.P1.run(100)
        servos.P2.run(0)
    }
    if (receivedNumber == 4) {
        servos.P2.run(-100)
        servos.P1.run(-100)
    }
})
basic.showString("Zapínanie")
servos.P1.setRange(0, 360)
servos.P2.setRange(0, 360)
radio.setGroup(193)
let Brzda = 1
let Vľavo = 2
let Vpravo = 3
let Spiatočka = 4
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        # # # # #
        # # . # #
        `)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        let plyn = 0
        radio.sendNumber(plyn)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(Brzda)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(Spiatočka)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.TiltRight)) {
        radio.sendNumber(Vpravo)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        radio.sendNumber(Vľavo)
    }
})

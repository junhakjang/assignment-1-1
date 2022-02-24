input.onButtonPressed(Button.A, function () {
    basic.showString("B")
    Number_ball += 1
    basic.showString("" + (Number_ball))
    if (Number_ball == 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("Walk")
        Number_ball = 0
        Number_strikes = 0
        basic.showString("START")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    Number_strikes = 0
    Number_ball = 0
    basic.showString("Start")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("S")
    Number_strikes += 1
    basic.showString("" + (Number_strikes))
    if (Number_strikes == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showString("OUT")
        Number_strikes = 0
        Number_ball = 0
        basic.showString("START")
    }
})
let Number_strikes = 0
let Number_ball = 0
basic.showString("START")
Number_ball = 0
Number_strikes = 0
basic.forever(function () {
	
})

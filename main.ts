input.onGesture(Gesture.Shake, function () {
	
})
let goal = false
let score = 0
basic.showNumber(score)
basic.pause(100)
basic.forever(function () {
    goal = input.isGesture(Gesture.Shake)
    if (goal == 1) {
        score = score + 1
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showNumber(score)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})

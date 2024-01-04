input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    go_to_rain()
})
input.onButtonPressed(Button.A, function () {
    frequency = frequency + 10
    go_to_rain()
})
function rains () {
    for (let index = 0; index < 1e+43; index++) {
        current = randint(0, 4)
        single_rain(current)
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        5000,
        0,
        255,
        0,
        frequency * 4,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || input.logoIsPressed()) {
            basic.clearScreen()
            break;
        }
    }
}
function go_to_rain () {
    basic.showString("" + (frequency))
    basic.pause(1000)
    rains()
}
input.onButtonPressed(Button.B, function () {
    frequency = frequency - 10
    if (frequency < 0) {
        frequency = 0
    }
    go_to_rain()
})
function single_rain (数字: number) {
    for (let index = 0; index <= 4; index++) {
        led.plot(current, index)
        basic.pause(frequency)
        led.unplot(current, index)
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B) || input.logoIsPressed()) {
            basic.clearScreen()
            break;
        }
    }
}
let current = 0
let frequency = 0
frequency = 50

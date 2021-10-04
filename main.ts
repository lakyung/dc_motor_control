input.onButtonPressed(Button.A, function () {
    선풍기작동하기()
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P1, 0)
    바람세기 = 0
})
function 선풍기작동하기 () {
    바람세기 += 1
    pins.analogWritePin(AnalogPin.P1, 바람세기 * 100)
}
let 바람세기 = 0
바람세기 = 0
pins.analogWritePin(AnalogPin.P1, 0)

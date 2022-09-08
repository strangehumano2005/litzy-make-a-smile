input.onButtonPressed(Button.A, function () {
    basic.showNumber(numero)
    numero += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(texto)
    texto = "gross"
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(numero)
    numero += -1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(texto)
})
let numero = 0
let texto = ""
texto = "cool"
numero = 1

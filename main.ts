WSJoyStick.onKey(KEY.P, function () {
    radio.sendNumber(1)
})
WSJoyStick.JoyStickInit()
radio.setGroup(1)
basic.showIcon(IconNames.Yes)

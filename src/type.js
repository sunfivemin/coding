"use strict";

new TypeIt('.home_title-strong', {
    loop: true,
    speed: 100,
})
.move(-11)
.type("Amazing ")
.pause(1000)
.move(null, {to: 'END'})
.delete()
.type('Front-end Engineer')
.pause(1000)
.go();
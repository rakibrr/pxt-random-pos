namespace sprites {
    /**
     * Sets a random Position for the sprite
     */
    //% blockId=setRndPos block="set $sprite=variables_get to a random Position every $seconds seconds"
    //% group="Random Place"
    //% weight=10
    //% blockGap=8
    export function setRndPos(sprite: Sprite, seconds: number) {

let ms = seconds * 1000
game.onUpdateInterval(ms, function() {
    let screenWidth = scene.screenWidth()
    let screenHeight = scene.screenHeight()

    let randx = randint(0, screenWidth)
    let randy = randint(0, screenHeight)

    sprite.x = randx
    sprite.y = randy
})
        
    }

}
namespace sprites {
    /**
     * Sets a random Position for the sprite
     */
    //% blockId=setRndPos block="set $sprite=variables_get to a random Position on the screen"
    //% group="Random Place"
    //% weight=10
    //% blockGap=8
    export function setRndPos(sprite: Sprite) {

        let screenWidth = scene.screenWidth()
        let screenHeight = scene.screenHeight()

        let randx = randint(0, screenWidth)
        let randy = randint(0, screenHeight)

        sprite.x = randx
        sprite.y = randy
    }

}
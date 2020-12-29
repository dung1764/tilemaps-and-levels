forever(() => {
    music.setVolume(20)
    music.playMelody("E F B A E A D - ", 120)
})

//controller
 controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . .
        . . . . f f e e e e f f . . . .
        . . . f e e e f f e e e f . . .
        . . f f f f f 2 2 f f f f f . .
        . . f f e 2 e 2 2 e 2 e f f . .
        . . f e 2 f 2 f f 2 f 2 e f . .
        . . f f f 2 2 e e 2 2 f f f . .
        . f f e f 2 f e e f 2 f e f f .
        . f e e f f e e e e f e e e f .
        . . f e e e e e e e e e e f . .
        . . . f e e e e e e e e f . . .
        . . e 4 f f f f f f f f 4 e . .
        . . 4 d f 2 2 2 2 2 2 f d 4 . .
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . .
        . . . . . f f f f f f . . . . .
        . . . . . f f . . f f . . . . .
    `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f . . . . . .
        . . . . f f e e e e f f . . . .
        . . . f e e e f f e e e f . . .
        . . . f f f f 2 2 f f f f . . .
        . . f f e 2 e 2 2 e 2 e f f . .
        . . f e 2 f 2 f f f 2 f e f . .
        . . f f f 2 f e e 2 2 f f f . .
        . . f e 2 f f e e 2 f e e f . .
        . f f e f f e e e f e e e f f .
        . f f e e e e e e e e e e f f .
        . . . f e e e e e e e e f . . .
        . . . e f f f f f f f f 4 e . .
        . . . 4 f 2 2 2 2 2 e d d 4 . .
        . . . e f f f f f f e e 4 . . .
        . . . . f f f . . . . . . . . .
    `,img`
            . . . . . . f f f f . . . . . .
            . . . . f f e e e e f f . . . .
            . . . f e e e f f e e e f . . .
            . . f f f f f 2 2 f f f f f . .
            . . f f e 2 e 2 2 e 2 e f f . .
            . . f e 2 f 2 f f 2 f 2 e f . .
            . . f f f 2 2 e e 2 2 f f f . .
            . f f e f 2 f e e f 2 f e f f .
            . f e e f f e e e e f e e e f .
            . . f e e e e e e e e e e f . .
            . . . f e e e e e e e e f . . .
            . . e 4 f f f f f f f f 4 e . .
            . . 4 d f 2 2 2 2 2 2 f d 4 . .
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
        `,img`
            . . . . . . . . . . . . . . . .
            . . . . . . f f f f . . . . . .
            . . . . f f e e e e f f . . . .
            . . . f e e e f f e e e f . . .
            . . . f f f f 2 2 f f f f . . .
            . . f f e 2 e 2 2 e 2 e f f . .
            . . f e f 2 f f f 2 f 2 e f . .
            . . f f f 2 2 e e f 2 f f f . .
            . . f e e f 2 e e f f 2 e f . .
            . f f e e e f e e e f f e f f .
            . f f e e e e e e e e e e f f .
            . . . f e e e e e e e e f . . .
            . . e 4 f f f f f f f f e . . .
            . . 4 d d e 2 2 2 2 2 f 4 . . .
            . . . 4 e e f f f f f f e . . .
            . . . . . . . . . f f f . . . .
        `],
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . f f f f f f . . . . . .
        . . . f 2 f e e e e f f . . . .
        . . f 2 2 2 f e e e e f f . . .
        . . f e e e e f f e e e f . . .
        . f e 2 2 2 2 e e f f f f . . .
        . f 2 e f f f f 2 2 2 e f . . .
        . f f f e e e f f f f f f f . .
        . f e e 4 4 f b e 4 4 e f f . .
        . . f e d d f 1 4 d 4 e e f . .
        . . . f d d d d 4 e e e f . . .
        . . . f e 4 4 4 e e f f . . . .
        . . . f 2 2 2 e d d 4 . . . . .
        . . . f 2 2 2 e d d e . . . . .
        . . . f 5 5 4 f e e f . . . . .
        . . . . f f f f f f . . . . . .
        . . . . . . f f f . . . . . . .
    `,img`
        . . . . . . . . . . . . . . . .
        . . . . f f f f f f . . . . . .
        . . . f 2 f e e e e f f . . . .
        . . f 2 2 2 f e e e e f f . . .
        . . f e e e e f f e e e f . . .
        . f e 2 2 2 2 e e f f f f . . .
        . f 2 e f f f f 2 2 2 e f . . .
        . f f f e e e f f f f f f f . .
        . f e e 4 4 f b e 4 4 e f f . .
        . . f e d d f 1 4 d 4 e e f . .
        . . . f d d d e e e e e f . . .
        . . . f e 4 e d d 4 f . . . . .
        . . . f 2 2 e d d e f . . . . .
        . . f f 5 5 f e e f f f . . . .
        . . f f f f f f f f f f . . . .
        . . . f f f . . . f f . . . . .
    `,img`
        . . . . f f f f f f . . . . . .
        . . . f 2 f e e e e f f . . . .
        . . f 2 2 2 f e e e e f f . . .
        . . f e e e e f f e e e f . . .
        . f e 2 2 2 2 e e f f f f . . .
        . f 2 e f f f f 2 2 2 e f . . .
        . f f f e e e f f f f f f f . .
        . f e e 4 4 f b e 4 4 e f f . .
        . . f e d d f 1 4 d 4 e e f . .
        . . . f d d d d 4 e e e f . . .
        . . . f e 4 4 4 e e f f . . . .
        . . . f 2 2 2 e d d 4 . . . . .
        . . . f 2 2 2 e d d e . . . . .
        . . . f 5 5 4 f e e f . . . . .
        . . . . f f f f f f . . . . . .
        . . . . . . f f f . . . . . . .
    `,img`
        . . . . . . . . . . . . . . . .
        . . . . f f f f f f . . . . . .
        . . . f 2 f e e e e f f . . . .
        . . f 2 2 2 f e e e e f f . . .
        . . f e e e e f f e e e f . . .
        . f e 2 2 2 2 e e f f f f . . .
        . f 2 e f f f f 2 2 2 e f . . .
        . f f f e e e f f f f f f f . .
        . f e e 4 4 f b e 4 4 e f f . .
        . . f e d d f 1 4 d 4 e e f . .
        . . . f d d d d 4 e e e f . . .
        . . . f e 4 4 4 e d d 4 . . . .
        . . . f 2 2 2 2 e d d e . . . .
        . . f f 5 5 4 4 f e e f . . . .
        . . f f f f f f f f f f . . . .
        . . . f f f . . . f f . . . . .
    `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
        . . . . . . f f f f f f . . . .
        . . . . f f e e e e f 2 f . . .
        . . . f f e e e e f 2 2 2 f . .
        . . . f e e e f f e e e e f . .
        . . . f f f f e e 2 2 2 2 e f .
        . . . f e 2 2 2 f f f f e 2 f .
        . . f f f f f f f e e e f f f .
        . . f f e 4 4 e b f 4 4 e e f .
        . . f e e 4 d 4 1 f d d e f . .
        . . . f e e e 4 d d d d f . . .
        . . . . f f e e 4 4 4 e f . . .
        . . . . . 4 d d e 2 2 2 f . . .
        . . . . . e d d e 2 2 2 f . . .
        . . . . . f e e f 4 5 5 f . . .
        . . . . . . f f f f f f . . . .
        . . . . . . . f f f . . . . . .
    `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f f . . . .
        . . . . f f e e e e f 2 f . . .
        . . . f f e e e e f 2 2 2 f . .
        . . . f e e e f f e e e e f . .
        . . . f f f f e e 2 2 2 2 e f .
        . . . f e 2 2 2 f f f f e 2 f .
        . . f f f f f f f e e e f f f .
        . . f f e 4 4 e b f 4 4 e e f .
        . . f e e 4 d 4 1 f d d e f . .
        . . . f e e e 4 d d d d f . . .
        . . . . 4 d d e 4 4 4 e f . . .
        . . . . e d d e 2 2 2 2 f . . .
        . . . . f e e f 4 4 5 5 f f . .
        . . . . f f f f f f f f f f . .
        . . . . . f f . . . f f f . . .
    `,img`
        . . . . . . f f f f f f . . . .
        . . . . f f e e e e f 2 f . . .
        . . . f f e e e e f 2 2 2 f . .
        . . . f e e e f f e e e e f . .
        . . . f f f f e e 2 2 2 2 e f .
        . . . f e 2 2 2 f f f f e 2 f .
        . . f f f f f f f e e e f f f .
        . . f f e 4 4 e b f 4 4 e e f .
        . . f e e 4 d 4 1 f d d e f . .
        . . . f e e e 4 d d d d f . . .
        . . . . f f e e 4 4 4 e f . . .
        . . . . . 4 d d e 2 2 2 f . . .
        . . . . . e d d e 2 2 2 f . . .
        . . . . . f e e f 4 5 5 f . . .
        . . . . . . f f f f f f . . . .
        . . . . . . . f f f . . . . . .
    `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f f . . . .
        . . . . f f e e e e f 2 f . . .
        . . . f f e e e e f 2 2 2 f . .
        . . . f e e e f f e e e e f . .
        . . . f f f f e e 2 2 2 2 e f .
        . . . f e 2 2 2 f f f f e 2 f .
        . . f f f f f f f e e e f f f .
        . . f f e 4 4 e b f 4 4 e e f .
        . . f e e 4 d 4 1 f d d e f . .
        . . . f e e e e e d d d f . . .
        . . . . . f 4 d d e 4 e f . . .
        . . . . . f e d d e 2 2 f . . .
        . . . . f f f e e f 5 5 f f . .
        . . . . f f f f f f f f f f . .
        . . . . . f f . . . f f f . . .
    `],
    200,
    true
    )
})

let hero = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(hero, 50, 50)
let currentLevel = 0
nextLevel()

scene.onOverlapTile(SpriteKind.Player, img`
    c c c c c c c c c c c c c c c c
    c c c c c c c c c c c b b b b c
    c c c c c c c c c c c b b b b c
    c c c c c c c c c c c b b b b c
    c c c c c c b b b b c b b b b c
    c c c c c c b b b b c b b b b c
    c c c c c c b b b b c b b b b c
    c c c c c c b b b b c b b b b c
    c b b b b c b b b b c b b b b c
    c b b b b c b b b b c d d d d c
    c b b b b c b b b b b b b b b c
    c b b b b c d d d d b b b b b c
    c b b b b c b b b b b b b b b c
    c b b b b b b b b b b b b b b c
    c d d d d b b b b b b b b b b c
    c b b b b b b b b b b b b b b c
`, function(sprite: Sprite, location: tiles.Location) {
    currentLevel += 1
    nextLevel()
})

scene.onOverlapTile(SpriteKind.Player, img`
    d d d d d d d d d d d d d d b c
    d d d d d d d d d d d d d d b c
    c c b c c b c c b c c b c c b c
    c b d c b d c b d c b d c b d c
    c b d c b d c b d c b d c b d c
    c b d c b d c b d c b d c b d c
    c b d c b d c b d c b d c b d c
    c b d c b d c b d c b d c b d c
    c b d c b d c b d c b d c b d c
    c b d c b d c b d c b d c b d c
    c b d c b d c b d c b d c b d c
    c b d c b d c b d c b d c b d c
    c b d c b d c b d c b d c b d c
    c c b c c b c c b c c b c c b c
    d d d d d d d d d d d d d d b c
    d d d d d d d d d d d d d d b c
`, function(sprite: Sprite, location: tiles.Location) {
    currentLevel -= 1
    previousLevel()
})

function nextLevel () {
    if(currentLevel == 0){
        tiles.setTilemap(tilemap`level`)
    } else if (currentLevel == 1) {
        tiles.setTilemap(tilemap`level1`)
    } else if (currentLevel == 2) {
        tiles.setTilemap(tilemap`level2`)
    } else if (currentLevel == 3) {
        game.over(true, effects.blizzard)
    }
    tiles.placeOnRandomTile(hero, img`
        d d d d d d d d d d d d d d b c
        d d d d d d d d d d d d d d b c
        c c b c c b c c b c c b c c b c
        c b d c b d c b d c b d c b d c
        c b d c b d c b d c b d c b d c
        c b d c b d c b d c b d c b d c
        c b d c b d c b d c b d c b d c
        c b d c b d c b d c b d c b d c
        c b d c b d c b d c b d c b d c
        c b d c b d c b d c b d c b d c
        c b d c b d c b d c b d c b d c
        c b d c b d c b d c b d c b d c
        c b d c b d c b d c b d c b d c
        c c b c c b c c b c c b c c b c
        d d d d d d d d d d d d d d b c
        d d d d d d d d d d d d d d b c
    `)
    hero.x += 16
}

function previousLevel () {
    if(currentLevel == 0){
        tiles.setTilemap(tilemap`level`)
    } else if (currentLevel == 1) {
        tiles.setTilemap(tilemap`level1`)
    }  else {
        currentLevel = 0
        return
    }
    tiles.placeOnRandomTile(hero, img`
        c c c c c c c c c c c c c c c c
        c c c c c c c c c c c b b b b c
        c c c c c c c c c c c b b b b c
        c c c c c c c c c c c b b b b c
        c c c c c c b b b b c b b b b c
        c c c c c c b b b b c b b b b c
        c c c c c c b b b b c b b b b c
        c c c c c c b b b b c b b b b c
        c b b b b c b b b b c b b b b c
        c b b b b c b b b b c d d d d c
        c b b b b c b b b b b b b b b c
        c b b b b c d d d d b b b b b c
        c b b b b c b b b b b b b b b c
        c b b b b b b b b b b b b b b c
        c d d d d b b b b b b b b b b c
        c b b b b b b b b b b b b b b c
    `)
    hero.x -= 16
}
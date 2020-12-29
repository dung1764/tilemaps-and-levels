
let hero = sprites.create(img`
    . . . . . f f f f . . . . .
    . . . f f 5 5 5 5 f f . . .
    . . f 5 5 5 5 5 5 5 5 f . .
    . f 5 5 5 5 5 5 5 5 5 5 f .
    . f 5 5 5 d b b d 5 5 5 f .
    f 5 5 5 b 4 4 4 4 b 5 5 5 f
    f 5 5 c c 4 4 4 4 c c 5 5 f
    f b b f b f 4 4 f b f b b f
    f b b 4 1 f d d f 1 4 b b f
    . f b f d d d d d d f b f .
    . f e f e 4 4 4 4 e f e f .
    . e 4 f 6 9 9 9 9 6 f 4 e .
    . 4 d c 9 9 9 9 9 9 c d 4 .
    . 4 f b 3 b 3 b 3 b b f 4 .
    . . f f 3 b 3 b 3 3 f f . .
    . . . . f f b b f f . . . .
`, SpriteKind.Player)
controller.moveSprite(hero, 100, 100)
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
    } else {
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
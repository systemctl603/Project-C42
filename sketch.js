var player;
var enemy1, enemy2, enemy3, enemy4, enemy5;
var score = 0;
var enemies = [];
var circleImage;
var safe;
var gameState = 0;

function setup() {
    var cnv = createCanvas(600, 600);
    player = createSprite(300, 300, 20, 20);
    player.shapeColor = 'black';
    player.hide;

    safe = createSprite(300, 300, 100, 100);
    safe.setVelocity(-2.5, 0);
    safe.shapeColor = 'red';

    enemy1 = createSprite(random(525), 0, 30, 30);
    enemy1.draw = () => {
        fill('white');
        ellipse(0, 0, 20, 20)
    }
    enemy1.setVelocity(0, random(10))
    enemies.push(enemy1);

    enemy2 = createSprite(random(525), 0, 30, 30);
    enemy2.draw = () => {
        fill('white');
        ellipse(0, 0, 20, 20)
    }
    enemy2.setVelocity(0, random(10))
    enemies.push(enemy2);

    enemy3 = createSprite(random(525), 0, 30, 30);
    enemy3.draw = () => {
        fill('white');
        ellipse(0, 0, 20, 20)
    }
    enemy3.setVelocity(0, random(10))
    enemies.push(enemy3);

    enemy4 = createSprite(random(525), 0, 30, 30);
    enemy4.draw = () => {
        fill('white');
        ellipse(0, 0, 20, 20)
    }
    enemy4.setVelocity(0, random(10))
    enemies.push(enemy4);

    enemy5 = createSprite(random(525), 0, 30, 30);
    enemy5.draw = () => {
        fill('white');
        ellipse(0, 0, 20, 20)
    }
    enemy5.setVelocity(0, random(10))
    enemies.push(enemy5);

    document.getElementById('reset').onclick = () => {
        if (gameState == 0) {
            safe.remove();
        }
        enemies.forEach(enemy => {
            enemy.x = random(525);
            enemy.y = 0;
        })
        gameState = 0;
        score = 0;
        safe = createSprite(300, 300, 100, 100);
        safe.setVelocity(-2.5, 0);
        safe.shapeColor = 'red';
    }
}

function draw() {
    background("black");

    player.x = mouseX;
    player.y = mouseY;

    run(enemy1);
    run(enemy2);
    run(enemy3);
    run(enemy4);
    run(enemy5);

    shift(safe)

    if (gameState == 0) {
        document.getElementById('score').innerHTML = `Score: ${score}`
    } else {
        document.getElementById('score').innerHTML = `Game Over. Score: ${score}`
    }

    drawSprites();
}

function run(param1) {
    if (gameState == 0) {
        if (param1.y > 600) {
            param1.y = 0
            param1.setVelocity(0, random(10))
        }

        if (param1.overlap(player)) {
            param1.x = random(525);
            param1.y = 0;
            param1.setVelocity(0, random(10))
            score++;
        }

        if (param1.overlap(safe)) {
            safe.remove();
            gameState = 1;
            console.log("Game Over");
        }
    }
}

function shift(param1) {
    if (param1.x >= 525) {
        param1.setVelocity(-2.5, 0);
    } else if (param1.x <= 75) {
        param1.setVelocity(2.5, 0);
    }
}
/*

ITP Final Game Project Submission

*/

/*
    For the sound extension, i added the effect for firing a bullet in order to create an additional dimension when firing. For the platforms, i created 2 platforms and designing them as clouds to create a more aesthetic feel. For the enemy, i created 1 enemy as a ghost to create an additional level of difficulty or obstacle for the player.
    
    I found the animation of clouds and creation of enemy to be harder than other tasks as the creation of enemy required us to learn how to use for loops and increments which always confuses me. As for the animation of clouds, it also required me to use for loops not only to draw the clouds but also for movement.
    
    Previously, i wasn't as good at for loops as i am now, this is because i had to find out how to interpret and implement for loops in different situations through various items in this game such as the enemies, platforms, trees and clouds to name a few. This made me realise the importance of for loop as it can help in almost every manner. 
    
    References:
    https://mixkit.co/free-sound-effects/video-game/
*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var gameChar_width;

var isLeft;
var isRight;
var isPlummeting;
var isFalling;
var isJumping;
var trees_x;
var tree_y;
var clouds;
var mountains;
var canyons;
var scrollPos;
var gameChar_world_x;
var collectables;
var game_score;
var flagpole;
var lives;
var shots;
var bullets;
var enemies;
var fireSound;
var jumpSound;
var collectableSound;
var gameCompleteSound;
var enemyHitSound;
var playerDieSound;
var gameOverSound;
var platforms;
var onPlatform;

var gameMode; //for splash screen 1-splash screen 2-game playing 3-game end

function preload()
{
    soundFormats("mp3","wav");
    //game sounds for the game
    fireSound = loadSound("assets/shots.wav");
    fireSound.setVolume(0.5);
    jumpSound = loadSound("assets/jump.wav");
    jumpSound.setVolume(0.5);
    collectableSound = loadSound("assets/collectable.wav");
    collectableSound.setVolume(0.5);
    gameCompleteSound = loadSound("assets/gameComplete.wav");
    gameCompleteSound.setVolume(0.5);
    enemyHitSound = loadSound("assets/hit.wav");
    enemyHitSound.setVolume(0.5);
    playerDieSound = loadSound("assets/die.wav");
    playerDieSound.setVolume(0.5);
    gameOverSound = loadSound("assets/gameOver.wav");
    gameOverSound.setVolume(0.3);
    
}

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
    lives = 3;
    startGame();
}

function startGame()
{
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    gameChar_width = 50;
    
    game_score = 0;
    
    isLeft = false;
    isRight = false;
    isPlummeting = false;
    isFalling = false;
    onPlatform = false;
    
    scrollPos= 0;
    
    gameChar_world_x = gameChar_x;
    
    gameMode = 1;
    tree_y = floorPos_y - 150;
    trees_x = [500, 700 , 900];
    canyon = {x_pos: 150 , y_pos: 432, width: 130};
    clouds = [];
    initClouds();
    var mountain1 = {x_pos: 600, y_pos: 432, w: 298, h: 232, w2: 105, h2: 80};
    var mountain2 = {x_pos: 800, y_pos: 432, w: 298, h: 232, w2: 105, h2: 80};
    var mountain3 = {x_pos: 1000, y_pos: 432, w: 298, h: 232, w2: 105, h2: 80};
    mountains = [mountain1, mountain2, mountain3]; //array of mountains
    var collectable1 = {x_pos: 300, y_pos: 420, isFound: false, w: 50, h: 40};
    var collectable2 = {x_pos: 200, y_pos: 370, isFound: false, w: 50, h: 40};
    var collectable3 = {x_pos: 400, y_pos: 420, isFound: false, w: 50, h: 40};
    var collectable4 = {x_pos: 1350, y_pos: floorPos_y-220, isFound: false, w: 50, h: 40};
    collectables = [collectable1, collectable2, collectable3, collectable4]; //array of collectables
    var canyon1 = {x_pos: 150, y_pos: 432, width: 130, height: 150};
    var canyon2 = {x_pos: 1200, y_pos: 432, width: 130, height: 150};
    var canyon3 = {x_pos: 1800, y_pos: 432, width: 130, height: 150};
    canyons = [canyon1, canyon2, canyon3]; //array of canyons
    var PlatformClouds1 = {x_pos: 1050, y_pos: floorPos_y-100, width1: 80, width2: 50};
    var PlatformClouds2 = {x_pos: 1250, y_pos: floorPos_y-200, width1: 80, width2: 50};
    var PlatformClouds3 = {x_pos: 1300, y_pos: floorPos_y-200, width1: 80, width2: 50};
    PlatformClouds = [PlatformClouds1, PlatformClouds2, PlatformClouds3]; //array of platforms
    
    flagpole = {x_pos: 1600, y_pos: 432, h: 300, w: 30, flag_w: 100, flag_h:50, isReached: false};
    
    shots = {
                bullets : [],
            };
    
    enemies = [];
    enemies.push(new Enemy(1300, floorPos_y - 10, 100));
    
    platforms = [];
    var p1 = createPlatform(1000, floorPos_y-100, 100);
    var p2 = createPlatform(1200, floorPos_y-200, 150);
    platforms.push(p1);
    platforms.push(p2);
}

function draw()
{

	background(100,155,255); //fill the sky blue
	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    
    //scrolling
    push();
    
    translate(scrollPos,0);
    
    drawCanyons();
    
    drawMountains();
    
    animateClouds(); //moves the clouds
    
    drawClouds();
    
    drawTrees();
    
    drawCollectables();
    
    drawFlagpole();
    
    drawEnemy();
    
    drawPlatforms();
    
    drawPlatformClouds();
    
    pop();
    
    drawGameScore();
    
    drawLifeTokens();
    
    GameWon();
    
    keyInstructions(); //instructions for user when playing game
    
	//game character movements
    if(onPlatform && isLeft)
    {
        //walking left code
        drawIsLeft();
    }
    else if(onPlatform && isRight)
    {
        //walking right code
        drawIsRight();
    }
    
	if(isLeft && isFalling)
	{
		//jumping-left code
        drawIsLeftandIsFalling();
	}
    
    
	else if(isRight && isFalling)
	{
		//jumping-right code
        drawIsRightandIsFalling();
    
	}
    
	else if(isLeft)
	{
		//walking left code
        drawIsLeft();
	}
	else if(isRight)
	{
		//walking right code
        drawIsRight();
	}
    else if(onPlatform)
    {
        drawisFacingFront();
    }
	else if(isFalling || isPlummeting)
	{
		//jumping facing forwards code
        drawIsFallingandIsPlummeting();
	}

    else
	{
		//standing front facing code
        drawisFacingFront();
	}
    

	//conditional statements to move the game character below here
    if(isPlummeting == true)
    {
        gameChar_y += 5;
        checkPlayerDie();
        return;//exit the draw function
    }
    
    if(isLeft == true)
    {
        if(gameChar_x > width*0.2)
        {
            gameChar_x -= 5;
        }
        else
        {
            scrollPos += 5;    
        }
    }
    
    if(isRight == true)
    {
        if(gameChar_x < width*0.8)
        {
            gameChar_x += 5;
        }
        else
        {
            scrollPos -= 5;
        }
    }
    
    if(gameChar_y < floorPos_y)
    {
//        gameChar_y +=5;
        isFalling = true;
    }
    else
    {
        isFalling = false;
    }
    
    if(isLeft == true && isFalling == true)
    {
        gameChar_x -=3;
        gameChar_y -=3;
    }
    
    if(isRight == true && isFalling == true)
    {
        gameChar_x +=3;
        gameChar_y -=3;
    }
    
    gameChar_world_x = gameChar_x - scrollPos; //Creates a new xpos for the game character due to scrolling
    
    checkIfGameCharInCollectablesRange();
    
    checkIfGameCharFallingInCanyons();
    
    checkFlagpole();
    
    checkPlayerDie();
    
    DrawBullets();
    
    checkIfCharacterIsOverAnyPlatforms();
}
//checks to see if the player has completed the game
function GameWon()
{
    fill(0);
    textSize(100);
    if(flagpole.isReached == true && game_score == 4)//requirements to complete the game
        {
            text("Level Complete!", 200, 100, height/3); //Displays a text upon completion of game
            gameCompleteSound.play();
        }
}

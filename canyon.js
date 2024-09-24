function drawCanyons()
{
    for(var i = 0; i < canyons.length; i++)
        {
            fill(100, 155, 255);
            //anchoring for canyons
            rect(canyons[i].x_pos, canyons[i].y_pos, canyons[i].width, canyons[i].height);
        }
}

function checkIfGameCharFallingInCanyons()
{
    for(var i = 0; i < canyons.length; i++)
    {
        var canyon = canyons[i]
        var cond1 = gameChar_y == floorPos_y;
        var cond2 = gameChar_world_x - gameChar_width/2 > canyon.x_pos;
        var cond3 = gameChar_world_x + gameChar_width/2 < (canyon.x_pos+canyon.width);
        if(cond1 == true && cond2 == true && cond3 == true)
        {
            isPlummeting = true; //falling action
            lives--; //live deducted
            playerDieSound.play(); //plays the sound that indicates that the player dies
        }
    }
}

function drawLifeTokens()
{
    fill(0);
    for(var i = 0; i < lives; i++)
        {
            rect(40*i+900, 10, 30, 30);//draws the life tokes at the top right of the screen
        }
}

function checkPlayerDie()
{
    if(gameChar_y>height)
        {
            if(lives>0)
                {
                    startGame();
                }
            else if(lives == 0) //checks to see if the player dies
            {   
                fill(0);
                textSize(32);
                text("Game Over, You Lose!", 300, 100);
                gameOverSound.loop();
            }
        }
}

function checkifGameOver()
{
    var gameOver = false;
    if(flagpole.isReached == true && game_score == 4 & lives > 0)
        {
            gameOver == true; //sets game over to true
            
        }
    
}
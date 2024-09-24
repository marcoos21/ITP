function drawFlagpole()
{
    fill(255);
    rect(flagpole.x_pos, floorPos_y, flagpole.w, -flagpole.h); //pole
    fill(180,0,0);
    if(flagpole.isReached)
        {
            rect(flagpole.x_pos, floorPos_y - flagpole.h, flagpole.flag_w, flagpole.flag_h);//draws flagpole with flag at the peak
        }
    else
        {
            rect(flagpole.x_pos, floorPos_y - flagpole.flag_h, flagpole.flag_w, flagpole.flag_h);//draws flagpole with flag at the bottom
        }
}

function checkFlagpole()
{
    if(flagpole.isReached == false)
        {
            var d = dist(gameChar_world_x, gameChar_y, flagpole.x_pos, floorPos_y);
            if(d < 10)
                {
                    flagpole.isReached = true;
                    collectableSound.play();//plays the collectable sound upon reaching the flagpole
                }
        }
}

function drawCollectables()
{
    
    for(var i = 0; i < collectables.length; i++)
    {
        var collectable = collectables[i];
        drawCollectable(collectable);

    }
}

function drawCollectable(collectable)
{
    if(collectable.isFound == false)
        {
        fill(255,215,0);
        //anchoring for collectables
        triangle(collectable.x_pos, collectable.y_pos, //right of triangle
                 collectable.x_pos - collectable.w, collectable.y_pos, //left
                 collectable.x_pos - collectable.w/2, collectable.y_pos - collectable.h); //top
            
        triangle(collectable.x_pos - collectable.w/2, collectable.y_pos+ collectable.h*(13/40), //bottom of inverted triangle
                 collectable.x_pos, collectable.y_pos - collectable.h*(27/40),  //right
                 collectable.x_pos - collectable.w, collectable.y_pos - collectable.h*(27/40)); //left
        }
}

function checkIfGameCharInCollectablesRange()
{
    for(var i = 0; i < collectables.length; i++)
    {
        var collectable = collectables[i];
        if(collectable.isFound == false)
        {
            checkIfGameCharInCollectableRange(collectable);
        }
    }
}

function checkIfGameCharInCollectableRange(collectable)
{
    var d = dist(gameChar_world_x,gameChar_y,collectable.x_pos,collectable.y_pos)
    if(d<20)
    {
        collectable.isFound=true;
        game_score++;
        collectableSound.play();
        console.log("game_score:"+ game_score);
    }
}

function drawGameScore()
{
    fill(0);
    textSize(30);
    text("Score: " + game_score, 10, 30);
}
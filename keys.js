function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
    
    if(keyCode == 37) 
    {
        console.log("left arrow");
        isLeft = true;
    }
    
    else if(keyCode == 39)
    {
        console.log("right arrow");
        isRight = true;
    }
    
    else if(keyCode == 32)
    {
        console.log("spacebar");
        if(gameChar_y >= floorPos_y || onPlatform)
        {
            gameChar_y -= 160;
        }
        jumpSound.play();
    }
    
    else if(key == "A")
    {
        console.log("A");
        var bullet = createVector(gameChar_x - 11.5, gameChar_y - 66);
    
        shots.bullets.push(bullet);
        fireSound.play();
    }
    else if(keyCode == 37 && keyCode == 32)
    {
        console.log("left space");
        isLeft = true;
        isFalling = true;
    }
    
    else if(keyCode == 39 && keyCode == 32)
    {
        console.log("right space");
        isRight = true;
        isFalling = true;
    }
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	  if(keyCode == 37) 
    {
        console.log("left arrow");
        isLeft = false;
    }
    
    else if(keyCode == 39)
    {
        console.log("right arrow");
        isRight = false;
    }
    
    else if(keyCode == 37 && keyCode == 32)
    {
        console.log("left space");
        isLeft = false;
        isFalling = false;
    }
    
    else if(keyCode == 39 && keyCode == 32)
    {
        console.log("right space");
        isRight = false;
        isFalling = false;
    }
    console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}

function keyInstructions()
{
    textSize(20);
    text("Arrow Keys to move!", 10, 50);
    text("Spacebar to jump!", 10, 70);
    text("A to shoot!", 10, 90);
}

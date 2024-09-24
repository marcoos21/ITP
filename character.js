function drawIsLeftandIsFalling()
{
    fill(245, 222, 179);
    ellipse(gameChar_x, gameChar_y - 50, 30);

    //body
    fill(220, 220, 220);
    rect(gameChar_x - 10,gameChar_y - 35, 20, 20);
    
    //eyes
    fill(0);
    ellipse(gameChar_x  , gameChar_y - 50 , 3.5, 3.5);
    ellipse(gameChar_x - 8, gameChar_y - 50, 3.5, 3.5);
    //arms
    fill(245, 222, 179);
    rect(gameChar_x, gameChar_y - 25, 10, 10);
    rect(gameChar_x - 20, gameChar_y - 35, 10, 10);
  
    
    //pants
    fill(220, 220, 220);
    rect(gameChar_x - 10, gameChar_y - 15, 20, 10);
    
    //belt
    fill(128,128,128);
    rect(gameChar_x - 10, gameChar_y - 5 - 10, 20, 4);
    
    //feet
    fill(139, 69, 19);
    rect(gameChar_x - 15, gameChar_y - 7 , 7, 7);
    rect(gameChar_x + 10, gameChar_y - 7, 7, 7);
    
    //shadow
    fill(169, 169, 169);
    ellipse(gameChar_x, gameChar_y + 7, 40, 7);
    
    //sword
    fill(0,0,0);
    rect(gameChar_x - 22.5, gameChar_y - 35, 5, 15);
    fill(0, 191, 255);
    rect(gameChar_x - 22.5, gameChar_y - 65, 5, 35);
    ellipse(gameChar_x - 20, gameChar_y - 66, 5); 
}

function drawIsRightandIsFalling()
{
    //head
    fill(245, 222, 179);
    ellipse(gameChar_x, gameChar_y - 50, 30);

    //body
    fill(220, 220, 220);
    rect(gameChar_x - 10,gameChar_y - 35, 20, 20);
    
    //eyes
    fill(0);
    ellipse(gameChar_x + 3 , gameChar_y - 50 , 3.5, 3.5);
    ellipse(gameChar_x + 11, gameChar_y - 50, 3.5, 3.5);
    //arms
    fill(245, 222, 179);
    rect(gameChar_x + 10, gameChar_y - 40, 10, 10);
    rect(gameChar_x - 10, gameChar_y - 25, 10, 10);
  
    
    //pants
    fill(220, 220, 220);
    rect(gameChar_x - 10, gameChar_y - 15, 20, 10);
    
    //belt
    fill(128,128,128);
    rect(gameChar_x - 10, gameChar_y - 5 - 10, 20, 4);
    
    //feet
    fill(139, 69, 19);
    rect(gameChar_x - 15, gameChar_y - 7 , 7, 7);
    rect(gameChar_x + 10, gameChar_y - 7, 7, 7);
    
    //shadow
    fill(169, 169, 169);
    ellipse(gameChar_x, gameChar_y + 7, 40, 7);
    
    //sword
    fill(0);
    rect(gameChar_x - 10, gameChar_y - 22.5, 10, 5)
    fill(0, 191, 255);
    rect(gameChar_x, gameChar_y - 22.5, 23, 5);
    ellipse(gameChar_x + 22, gameChar_y - 20, 5);
}

function drawIsLeft()
{
    //head
    fill(245, 222, 179);
    ellipse(gameChar_x, gameChar_y - 50, 30);

    //body
    fill(220, 220, 220);
    rect(gameChar_x - 10,gameChar_y - 35, 20, 25);
    
    //eyes
    fill(0);
    ellipse(gameChar_x  , gameChar_y - 50 , 3.5, 3.5);
    ellipse(gameChar_x - 8, gameChar_y - 50, 3.5, 3.5);
    //arms
    fill(245, 222, 179);
    rect(gameChar_x, gameChar_y - 25, 10, 10);
  
    
    //pants
    fill(220, 220, 220);
    rect(gameChar_x - 10, gameChar_y - 10, 20, 10);
    
    //belt
    fill(128,128,128);
    rect(gameChar_x - 10, gameChar_y - 10, 20, 4);
    
    //feet
    fill(139, 69, 19);
    rect(gameChar_x - 15, gameChar_y , 7, 7);
    rect(gameChar_x + 5, gameChar_y , 7, 7);
    
    //sword
    fill(0, 191, 255);
    rect(gameChar_x - 21, gameChar_y - 25, 12, 5);
    ellipse(gameChar_x - 21, gameChar_y - 22.5, 5);

}

function drawIsRight()
{
    //head
    fill(245, 222, 179);
    ellipse(gameChar_x, gameChar_y - 50, 30);

    //body
    fill(220, 220, 220);
    rect(gameChar_x - 10,gameChar_y - 35, 20, 25);
    
    //eyes
    fill(0);
    ellipse(gameChar_x + 3 , gameChar_y - 50 , 3.5, 3.5);
    ellipse(gameChar_x + 11, gameChar_y - 50, 3.5, 3.5);
    //arms
    fill(245, 222, 179);
    rect(gameChar_x - 10, gameChar_y - 25, 10, 10);
  
    
    //pants
    fill(220, 220, 220);
    rect(gameChar_x - 10, gameChar_y - 10, 20, 10);
    
    //belt
    fill(128,128,128);
    rect(gameChar_x - 10, gameChar_y - 10, 20, 4);
    
    //feet
    fill(139, 69, 19);
    rect(gameChar_x - 12, gameChar_y , 7, 7);
    rect(gameChar_x + 8, gameChar_y , 7, 7);
    
    //sword
    fill(0);
    rect(gameChar_x - 10, gameChar_y - 22.5, 10, 5)
    fill(0, 191, 255);
    rect(gameChar_x, gameChar_y - 22.5, 23, 5);
    ellipse(gameChar_x + 22, gameChar_y - 20, 5);
}

function drawIsFallingandIsPlummeting()
{
    //head
    fill(245, 222, 179);
    ellipse(gameChar_x, gameChar_y - 50, 30);
    
    //face
    fill(0);
    ellipse(gameChar_x - 4 , gameChar_y - 50 , 3.5, 3.5);
    ellipse(gameChar_x + 4, gameChar_y - 50, 3.5, 3.5);
    
    //body
    fill(220, 220, 220);
    rect(gameChar_x - 15,gameChar_y - 35, 30, 20);
    fill(245, 222, 179);
    triangle(gameChar_x, gameChar_y -25, gameChar_x - 7.5, gameChar_y - 35, gameChar_x + 7.5, gameChar_y - 35);
    
    //pants
    fill(220, 220, 220);
    rect(gameChar_x - 15, gameChar_y - 13, 30, 7);
    
    //belt
    fill(128,128,128);
    rect(gameChar_x - 15, gameChar_y - 15, 30, 4);
    
    //feet
    fill(139, 69, 19);
    rect(gameChar_x - 20, gameChar_y - 10 , 10, 10);
    rect(gameChar_x + 10, gameChar_y - 10 , 10, 10);
    
    //shadow
    fill(169, 169, 169);
    ellipse(gameChar_x, gameChar_y + 7, 40, 7);
    
    //arms
    fill(245, 222, 179);
    rect(gameChar_x - 25, gameChar_y - 35, 10, 10);
    rect(gameChar_x + 15, gameChar_y - 35, 10, 10);
    
    //sword
    fill(0,0,0);
    rect(gameChar_x - 22.5, gameChar_y - 35, 5, 15);
    fill(0, 191, 255);
    rect(gameChar_x - 22.5, gameChar_y - 65, 5, 35);
    ellipse(gameChar_x - 20, gameChar_y - 66, 5);
}

function drawisFacingFront()
{
    //head
    fill(245, 222, 179);
    ellipse(gameChar_x, gameChar_y - 50, 30);
    fill(220, 220, 220);
    
    //body
    fill(220, 220, 220);
    rect(gameChar_x - 15,gameChar_y - 35, 30, 25);
    fill(245, 222, 179);
    triangle(gameChar_x, gameChar_y -25, gameChar_x - 7.5, gameChar_y - 35, gameChar_x + 7.5, gameChar_y - 35);
    
    //face
    fill(0);
    ellipse(gameChar_x - 4 , gameChar_y - 50 , 3.5, 3.5);
    ellipse(gameChar_x + 4, gameChar_y - 50, 3.5, 3.5);
    
    //arms
    fill(245, 222, 179);
    rect(gameChar_x - 15, gameChar_y - 25, 10, 10);
    rect(gameChar_x + 5, gameChar_y - 25, 10, 10);
    
    //pants
    fill(220, 220, 220);
    rect(gameChar_x - 15, gameChar_y - 10, 30, 10);
    
    //belt
    fill(128,128,128);
    rect(gameChar_x - 15, gameChar_y - 10, 30, 4);
    
    //feet
    fill(139, 69, 19);
    rect(gameChar_x - 15, gameChar_y , 10, 10);
    rect(gameChar_x + 5, gameChar_y , 10, 10);
    
    //sword
    fill(0,0,0);
    rect(gameChar_x - 14, gameChar_y - 35, 5, 15);
    fill(0, 191, 255);
    rect(gameChar_x - 14, gameChar_y - 65, 5, 35);
    ellipse(gameChar_x - 11.5, gameChar_y - 66, 5);
}
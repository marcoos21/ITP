function Enemy(x, y, range)
{
    this.x = 1400;
    this.y = y;
    this.range = range;
    this.currentX = 1300;
    this.inc = 4  ;
    
    this.update = function()
    {
        this.currentX += this.inc;
        
        if(this.currentX >= this.x + this.range)
        {
            this.inc = -1;
        }
        else if(this.currentX < this.x)
        {
            this.inc = 1;
        }
    }
    //draws the enemy
    this.draw = function()
    {
        this.update() //moves the enemy around
        
        //drawing of enemy
        fill(255);
        ellipse(this.currentX, this.y-50, 30);//head of enemy
        rect(this.currentX-15, this.y-50, 30,40);//body of enemy
        fill(0);
        //eyes of enemy
        ellipse(this.currentX+5, this.y- 50, 5);
        ellipse(this.currentX-5, this.y- 50, 5);
    }
    
    this.checkContact = function(gc_x, gc_y)
    {
        var d = dist(gc_x, gc_y, this.currentX, this.y)
        if(d < 20)
        {
            return true; //if there's less than 20px between character and enemy, contact is true
        }
        return false;
    }
}

function drawEnemy()
{
    for(var i = 0; i < enemies.length; i++)
    {
        enemies[i].draw();
        var isContact = enemies[i].checkContact(gameChar_world_x, gameChar_y);
        if(isContact)
        {
            lives--;
            enemyHitSound.play(); //plays the Hit sound upon contact with enemy
            if(lives > 0)
            {   
                startGame(); //restarts the game if lives > 0
            }
        }
        checkPlayerDie(); //checks to see if the player has more lives
    }
}

function DrawBullets()
{
    for(var i =0; i < shots.bullets.length; i++)
    {
        var bullet = shots.bullets[i];
        fill(0, 191, 255);
        ellipse(bullet.x, bullet.y, 10, 10);
        bullet.x -=5;
    }
    
    for(var i = shots.bullets.length-1; i >=0; i--)
    {
        var bullet = shots.bullets[i];
        if(bullet.x <= 20)
        {
            shots.bullets.splice(i,1);
        }
    }
}
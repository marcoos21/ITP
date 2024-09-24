function createPlatform(x,y,length)
{
    var p = 
        {
            x: x,
            y: y,
            length: length,
            draw: function()
            {
                fill(255, 0, 255);
                rect(this.x, this.y, this.length, 20);
            },
            checkContact: function(gc_x, gc_y)
            {
                var c1 = gc_x + 25 > this.x;
                var c2 = gc_x < this.x + 25 + this.length;
                //check for x-axis
                if(c1 && c2)
                {
                    //check for y-axis
                    var d = this.y - gc_y;
                    if(d >= 0 && d < 5)
                    {
                        return true;
                    }
                }
                return false;
            }
        }
        return p;
}

function drawPlatforms()
{
    for(i in platforms)
    {
        var platform = platforms[i];
        platform.draw();
    }
}

function checkIfCharacterIsOverAnyPlatforms()
{
    if(isFalling)
    {
        var isContact = false;
        onPlatform = false;
        for(i in platforms)
        {
            var platform = platforms[i];
            isContact = platform.checkContact(gameChar_world_x, gameChar_y);
            if(isContact)
            {
                onPlatform = true;
                break;//stops checking if character is on the platform
            }
        }
        
        if(isContact == false)
        {
            gameChar_y += 5;    
        }
    }
}
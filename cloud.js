function animateClouds()
{
    for(var i in clouds)
        {
            //moves clouds to the right
            var cloud = clouds[i];
            cloud.x_pos+= cloud.speed;
            
            //shifts clouds back to the left and continues animation
            if(cloud.x_pos > width+200)
                {
                    cloud.x_pos = -100;
                }
        }
}

function initClouds()
{
    for(var i = 0; i < 10; i++)
        {
            var x = random(10, width-10);
            var y = random(50, 150);
            var w = random(40, 70);
            var s = random(0.5, 2);
            var cloud = {x_pos: x, y_pos: y, width: w, speed: s};
            clouds.push(cloud);
        }
}

function drawClouds()
{
    fill(255);
    for(var i in clouds)
        {
            drawCloud(clouds[i]);
        }
}

function drawCloud(t_cloud)
{
    //anchoring for clouds
    ellipse(t_cloud.x_pos, t_cloud.y_pos, t_cloud.width*1.5, t_cloud.width);
}

function drawPlatformClouds()
{
    for(var i = 0; i < PlatformClouds.length; i++)
    {
        fill(255);
        ellipse(PlatformClouds[i].x_pos, PlatformClouds[i].y_pos, PlatformClouds[i].width1);
        ellipse(PlatformClouds[i].x_pos-35, PlatformClouds[i].y_pos, PlatformClouds[i].width2);
        ellipse(PlatformClouds[i].x_pos+35, PlatformClouds[i].y_pos, PlatformClouds[i].width2);
    }
}
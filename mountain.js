function drawMountains()
{
    for(var i =0; i < mountains.length; i++)
    {
        fill(128, 128, 128);
        //anchoring for mountains
        triangle(mountains[i].x_pos, mountains[i].y_pos, //bottom right
                mountains[i].x_pos-mountains[i].w, mountains[i].y_pos, //bottom left 
                mountains[i].x_pos-mountains[i].w/2, mountains[i].y_pos-mountains[i].h); //top of mountain
        fill(211,211,211);
        triangle(mountains[i].x_pos - mountains[i].w2*(148/105), mountains[i].y_pos -       mountains[i].h2*2.9, //top of smaller triangle
                mountains[i].x_pos- mountains[i].w2*(95/105), mountains[i].y_pos - mountains[i].h2*1.9, //bottom right
                mountains[i].x_pos- mountains[i].w2*(200/105), mountains[i].y_pos - mountains[i].h2*1.9); //bottom left
    }
}
function drawTrees()
{
    for(var i = 0; i < trees_x.length; i++)
    {
        //big tree
        fill(120, 100, 40);
        //anchoring for trees
        rect(trees_x[i], tree_y, 60, 150);
    
        //big tree branches
        fill(34,139,34);
        triangle(trees_x[i] - 50, tree_y + 50, trees_x[i] + 30, tree_y - 50, trees_x[i] + 110, tree_y + 50);
        triangle(trees_x[i] - 50, tree_y, trees_x[i] + 30, tree_y - 100, trees_x[i] + 110, tree_y);
    
        //small trees
        fill(120,100,40);
        rect(trees_x[i] - 50, tree_y + 100, 30, 50);
        rect(trees_x[i] + 80, tree_y + 100, 30, 50);
        
        //small trees branches
        fill(34,139,34);
        triangle(trees_x[i] - 70, tree_y + 100, trees_x[i], tree_y + 100, trees_x[i] - 35, tree_y + 68);
        triangle(trees_x[i] - 70, tree_y + 80, trees_x[i], tree_y + 80, trees_x[i] - 35, tree_y + 43);
        triangle(trees_x[i] + 63, tree_y + 100, trees_x[i] + 125, tree_y + 100, trees_x[i] + 95, tree_y + 68);
        triangle(trees_x[i] + 63, tree_y + 80, trees_x[i] + 125, tree_y + 80, trees_x[i] + 95, tree_y + 43);
    }
}
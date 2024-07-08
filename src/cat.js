var escala = 0.5

function setup() {
    // createCanvas(1678*escala, 800*escala);
    let canvas =createCanvas(400,400);
    canvas.parent('screen');
    // translate(windowWidth/2,windowHeight/4);
    draw();
}   



function draw() {
   
    scale(escala);

    // background(114,79,156);
    background(148,251,255);

    // fill(148,251,255);
    // rect(100,100,1478,600);

    var x = 430
    var y = 430
    var cat_color = [255,255,0]
    var mouth = 70

    // Ears
    fill(200);
    triangle(x-170,y-250,x-200,y-20,x+50,y-120);
    triangle(x+170,y-250,x+200,y-20,x-50,y-120);
    // pushMatrix();
    // rotate(2);
    fill(200,100,100);
    ellipse(x-130,y-150,50,100);
    ellipse(x+140,y-150,50,100);
    // popMatrix();
    

    
    // Head
    fill(cat_color)
    ellipse(x, y, 400, 400);

    // Eyes
    fill(0);
    ellipse(x-80,y-50,50,50);
    ellipse(x+80,y-50,50,50);

    // Mouth
    fill(255,0,0)
    arc(x,y+mouth,100,80,0,3);

    // Nose
    fill(0)
    triangle(x-30,y,x+30,y,x,y+60);
    fill(cat_color)
    strokeWeight(10);
    arc(x-35,y+60,70,70,0,3.15);
    arc(x+35,y+60,70,70,0,3.15);



}




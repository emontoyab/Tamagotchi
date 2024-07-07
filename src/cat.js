function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    drawCat();
}

function drawCat() {
    // Cuerpo
    fill(150);
    ellipse(200, 300, 150, 100); // cuerpo

    // Cabeza
    ellipse(200, 200, 100, 100); // cabeza

    // Orejas
    triangle(170, 160, 190, 120, 210, 160); // oreja izquierda
    triangle(230, 160, 210, 120, 190, 160); // oreja derecha

    // Ojos
    fill(255);
    ellipse(180, 190, 20, 20); // ojo izquierdo
    ellipse(220, 190, 20, 20); // ojo derecho
    fill(0);
    ellipse(180, 190, 10, 10); // pupila izquierda
    ellipse(220, 190, 10, 10); // pupila derecha

    // Nariz
    fill(255, 0, 0);
    triangle(195, 210, 205, 210, 200, 220); // nariz

    // Boca
    noFill();
    arc(200, 230, 20, 20, 0, PI); // boca

    // Bigotes
    line(170, 220, 190, 215); // bigote izquierdo 1
    line(170, 225, 190, 220); // bigote izquierdo 2
    line(210, 215, 230, 220); // bigote derecho 1
    line(210, 220, 230, 225); // bigote derecho 2

    // Cola
    noFill();
    beginShape();
    curveVertex(275, 300);
    curveVertex(275, 300);
    curveVertex(350, 250);
    curveVertex(340, 200);
    curveVertex(320, 170);
    curveVertex(320, 170);
    endShape();
}

var pet, f, h, e;

function setear(){
    f = 10;
    h = 5;
    e = 8;
    s = 5;

    pet = new Tamagotchi (h, f , e, s, document.getElementById("mensaje"));
    setInterval(bore,5000);
}

function bore() {
    pet.aburrirse();
    pet.comunicar();
}

function accionar(boton) {
    console.log(boton);
    switch (boton.value) {
        case "Jugar":
            pet.jugar();
            break;
        case "Dormir":
            pet.dormir();
            break;

    }
}

window.onload = setear;
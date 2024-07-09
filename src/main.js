var pet, f, h, e;

function setear(){
    f = 10;
    h = 0;
    e = 10;

    let mensaje = document.getElementById("mensaje");
    let happiness = document.getElementById("happiness");
    let energy = document.getElementById("energy");
    let hunger = document.getElementById("hunger");

    pet = new Tamagotchi (h, f , e, mensaje, happiness, energy, hunger);
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
        case "Comer":
            pet.comer();
            break;

    }
}

window.onload = setear;
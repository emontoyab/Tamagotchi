function Tamagotchi(hambre, felicidad, energia, comunicacion, happiness, energy, hunger) {
    this.hambre = hambre
    this.felicidad = felicidad;
    this.energia = energia;
    this.visor = comunicacion;
    this.estado = 0;
    this.mensaje = "Esperanding...";
    this.happiness = happiness;
    this.energy = energy;
    this.hunger = hunger;
    console.log("mascota creada");
    // this.comunicar();
}

Tamagotchi.prototype.jugar = function () {
    
    if (this.energia > 5 && this.energia <= 10 && this.felicidad < 10 && this.hambre <=10) {
        console.log("click!")
        this.felicidad++;
        this.mensaje = "Estoy jugando";
        this.estado = 1;
        this.energia--;
        this.hambre++;
    } else if (this.felicidad = 10){
        this.mensaje = "No más juego, ya estoy melo!"
    } 
    else {
        this.mensaje = "Estoy cansado, jefe"
    }
    this.comunicar();
};

Tamagotchi.prototype.dormir = function () {
    if (this.energia < 10) {
        this.energia++;
        this.estado = 2;
        this.mensaje = "mimiending...";
    }else if (this.felicidad <=5) {
        this.mensaje = "Toy triste, quiero jugar"
    } else {
        this.mensaje = "No quiero mimir, toy reloco";
    }
    this.comunicar();
};

Tamagotchi.prototype.comer = function () {
    console.log("comer!")
    if (this.hambre > 0) {
        this.hambre--;
        this.mensaje = "Echando muela..."
    } else if (this.hambre > 5) {
        this.mensaje = "Madre, un pancito :("
    } else {
        this.mensaje = "Toy repleto"
    }
    this.comunicar();
};

Tamagotchi.prototype.aburrirse = function () {
    if (this.felicidad > 0) {
        this.felicidad--;
        this.estado = 3;
        console.log(`Felicidad: ${this.felicidad}`);
    }
    if (this.felicidad < 5) {
        this.mensaje = "Estoy aburrido. Necesito jugar";
    }
    this.comunicar();
};

Tamagotchi.prototype.comunicar = function () {
    this.visor.innerHTML = this.mensaje;
    this.happiness.innerHTML = `Felicidad: ${this.felicidad}`;
    this.energy.innerHTML = `Energía: ${this.energia}`;
    this.hunger.innerHTML = `Hambre: ${this.hambre}`;
    return this.estado;
}

// export default Tamagotchi;
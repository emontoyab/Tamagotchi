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
    
    if (this.felicidad < 10 && this.energia > 5 && this.energia <= 10 && this.hambre <=10){
        this.felicidad++;
        this.energia--;
        this.estado = 1;
        this.mensaje = "Estoy jugando";
        activarMovimiento();
        dia();
        nocomer();
        console.log("click!")
    } else if (this.felicidad === 10){
        this.mensaje = "No más juego, ya estoy melo!"
    } else {
        this.mensaje = "Estoy cansado, jefe"
    }

    this.comunicar();
};

Tamagotchi.prototype.dormir = function () {
    if (this.energia < 10) {
        this.energia++;
        this.estado = 2;
        this.mensaje = "mimiending...";
        volverAlCentro();
        activarNoche();
        nocomer();
        if(this.hambre<10){
            this.hambre++;
        }
    }else if (this.felicidad <=5) {
        this.mensaje = "Toy triste, quiero jugar"
        document.getElementById('mensaje').classList.add('alerta')
    } else {
        this.mensaje = "No quiero mimir, toy reloco";
    }
    this.comunicar();
};

Tamagotchi.prototype.comer = function () {
    console.log("comer!")
    if (this.hambre > 0) {
        this.hambre--;
        this.mensaje = "Echando muela...";

        if (this.energia > 0) {
        this.energia--;
        } 
        activarcomiendo();
        volverAlCentro();
        dia();
    } else if (this.hambre > 5) {
        this.mensaje = "Madre, un pancito :("
        document.getElementById('mensaje').classList.add('alerta')
    } else {
        this.mensaje = "Toy repleto"
    }
    this.comunicar();
};

Tamagotchi.prototype.aburrirse = function () {
    if (this.felicidad > 0) {
        this.felicidad--;
        this.hambre++;
        this.estado = 3;
        console.log(`Felicidad: ${this.felicidad}`);
    }
    if (this.felicidad < 5) {
        this.mensaje = "Estoy aburrido. Necesito jugar";
        document.getElementById('mensaje').classList.add('alerta')
    }
    this.comunicar();
};

Tamagotchi.prototype.comunicar = function () {
    this.visor.innerHTML = this.mensaje;
    this.happiness.innerHTML = `Felicidad: ${this.felicidad}`;
    this.energy.innerHTML = `Energía: ${this.energia}`;
    this.hunger.innerHTML = `Hambre: ${this.hambre}`;

    if (this.mensaje !== "Estoy aburrido. Necesito jugar" && 
        this.mensaje !== "Toy triste, quiero jugar" && 
        this.mensaje !== "Madre, un pancito :(") {
        document.getElementById('mensaje').classList.remove('alerta');
    }
    return this.estado;
}

// export default Tamagotchi;
function Tamagotchi(hambre, felicidad, energia, salud, comunicacion) {
    this.hambre = hambre
    this.felicidad = felicidad;
    this.energia = energia;
    this.salud = salud;
    this.visor = comunicacion;
    this.estado = 0;
    this.mensaje = "Esperanding..."
    console.log("mascota creada");
}

Tamagotchi.prototype.jugar = function () {
    
    if (this.energia > 5 && this.energia < 10 && this.felicidad < 10) {
        console.log("click!")
        this.felicidad++;
        this.mensaje = "Estoy jugando";
        this.estado = 1;
        this.energia--;
    } else {
        this.mensaje = "No quiero jugar. Estoy cansado"
    }
};

Tamagotchi.prototype.dormir = function () {
    if (this.energia < 10) {
        this.energia++;
        this.estado = 2;
        this.mensaje = "Estoy durmiendo...";
    }else if (this.energia <=5) {
        this.mensaje = "Estoy muy triste para dormir. Déjame jugar un poco"
    } else {
        this.mensaje = "No quiero dormir. No estoy cansado";
    }
};

Tamagotchi.prototype.aburrirse = function () {
    if (this.felicidad > 5) {
        this.felicidad--;
        this.estado = 3;
        console.log(`Felicidad: ${this.felicidad}`);
    } else {
        this.mensaje = "Estoy aburrido. Necesito jugar";
    }
};

Tamagotchi.prototype.comunicar = function () {
    this.visor.innerHTML = this.mensaje;
    return this.estado;
}

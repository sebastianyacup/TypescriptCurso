"use strict";
class Personaje {
    constructor(id, name, nivel, hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this.hp = hp;
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this.hp = hp;
    }
    subirNivel() {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    static agregarPersonaje() {
        Personaje.equipo++;
    }
    cambiarHP(cantidad) {
        this.hp = this.hp + cantidad;
        return this.hp;
    }
    get _hp() {
        return this.hp;
    }
    static getEquipo() {
        return Personaje.equipo;
    }
}
Personaje.equipo = 1;
const personaje = new Personaje(1, 'nicolas', 1, 100);
personaje.cambiarHP(-10);
const personaje1 = new Personaje(2, 'felipe', 1, 120);
Personaje.agregarPersonaje();
console.log(Personaje.getEquipo());
if (typeof personaje) {
}
if (personaje instanceof Personaje) {
}
//# sourceMappingURL=index.js.map
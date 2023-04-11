"use strict";
class Personaje {
    constructor(id, name, nivel, hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this.hp = hp;
    }
    subirNivel() {
        this.nivel = this.nivel + 1;
        return this.nivel;
    }
    cambiarHP(cantidad) {
        this.hp = this.hp + cantidad;
        return this.hp;
    }
}
const personaje = new Personaje(1, 'nicolas', 1, 100);
personaje.cambiarHP(-10);
console.log(personaje);
//# sourceMappingURL=index-dos.js.map
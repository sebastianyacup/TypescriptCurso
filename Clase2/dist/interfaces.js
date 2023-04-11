"use strict";
class Caballo {
    constructor() {
        this.name = 'Rocinante';
    }
    caminar() {
        console.log('caminando');
    }
    onomatopeya() {
        return 'hin ';
    }
}
class Cerdo {
    constructor() {
        this.name = 'chancho';
    }
    caminar() {
        console.log('caminando');
    }
    onomatopeya() {
        return 'oinc ';
    }
}
class Perro {
    constructor() {
        this.name = 'bengie';
    }
    caminar() {
        console.log('caminando');
    }
    onomatopeya() {
        return 'guau';
    }
}
class DireccionrioUsuarios {
}
let diccionarioUsuarios = new DireccionrioUsuarios();
diccionarioUsuarios['1a'] = 'Usuario 1';
diccionarioUsuarios['a1'] = 'Usuario 2';
console.log(diccionarioUsuarios);
//# sourceMappingURL=interfaces.js.map
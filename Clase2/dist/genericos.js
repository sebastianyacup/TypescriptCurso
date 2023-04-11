"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData(recurso) {
    return __awaiter(this, void 0, void 0, function* () {
        const respuesta = yield fetch(`${recurso}`);
        return respuesta.json();
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetchData('/usuarios');
        user.id;
    });
}
class Programador {
    constructor(t) {
        this.computador = t;
    }
}
const programador = new Programador({ encender: () => { }, apagar: () => { } });
const programador1 = new Programador('string');
function fetchProduct() {
    return {
        key: 'id de producto',
        value: { id: ' id del productoo' }
    };
}
function fetchStock() {
    return {
        key: 'id de producto',
        value: 500,
    };
}
class Usuario {
    constructor(id) {
        this.id = id;
    }
}
function print(t) {
    console.log(t);
    return t;
}
print({ id: 'prueba', name: 'pipe' });
class Estado {
    constructor() {
        this.data = [];
    }
    agregar(t) {
        this.data.push(t);
    }
    getEstado() {
        return this.data;
    }
}
class EstadoEliminar extends Estado {
    eliminar(id) {
        this.data = this.data.filter(x => x.id !== id);
    }
}
class EstadoUsuarios extends Estado {
    reiniciarContraseñas() {
    }
}
const estadoUsuarios = new EstadoUsuarios();
const calendar = { id: 1, fuente: 'Google', dueno: 'yo' };
function getProp(objeto, property) {
    return objeto[property];
}
const prop = getProp(calendar, "id");
const prop1 = getProp(calendar, 'fuente');
console.log(prop, prop1);
const keyVal = {
    'soy un string': 42
};
const p = {
    x: 1,
    y: 0
};
const p1 = {
    x: 1,
    y: 2
};
const readOnlyP = {
    x: 1,
    y: 3,
    desc: 'soy una descripcion'
};
//# sourceMappingURL=genericos.js.map
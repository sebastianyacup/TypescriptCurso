"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function UpperCase(target, methodName, propertyDescriptor) {
    const orginal = propertyDescriptor.get;
    propertyDescriptor.get = function () {
        const r = orginal === null || orginal === void 0 ? void 0 : orginal.call(this);
        if (typeof r === 'string') {
            return r.toUpperCase();
        }
        else {
            return r;
        }
    };
}
function Min(min) {
    return (target, propertyName) => {
        let val;
        const descriptor = {
            get() {
                return val;
            }, set(v) {
                if (v.length < min) {
                    throw new Error(`la propiedad ${propertyName} debe ser de largo min`);
                }
                val = v;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class User {
    constructor(name, lastname, password) {
        this.name = name;
        this.lastname = lastname;
        this.password = password;
    }
    get fullName() {
        return `${this.name} ${this.lastname}`;
    }
}
__decorate([
    Min(6)
], User.prototype, "password", void 0);
__decorate([
    UpperCase
], User.prototype, "fullName", null);
const user = new User('felipe', "urbano", '123456');
console.log(user.password);

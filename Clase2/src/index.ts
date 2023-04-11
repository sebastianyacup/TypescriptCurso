/*let mensaje: string = "Hola mundo";

mensaje = "cuchito feliz";

console.log(mensaje);

mensaje = "chao mundo";

console.log(mensaje);
console.log([]);

let dinosaurio:number=76.000;
let dinasaurioFavorito:string="T-Rex";
let extintos = true;

function cancho(config: any){
    return config
}

let animales: string[] = ['marrano', 'felipe', 'Santiago']
let nums:number[] = [1,2,3]
let checks: boolean[]=[]
let nums2: Array<number>=[]

//nums.map(x => x.)// el autocompletado sugiere el tipo de dato

let tupla: [number, string[]] = [1,['felipe','santiago']]

const tallaPequeña = 's'
const tallaMediana = 'm'
const tallaGrande = 'l'
const extraGrande = 'xl'

enum Talla {Pequeña = 's', Mediana = 'm',Grande = 'l',ExtraGrande = 'xl'}
const varaible1 = Talla.Grande
console.log(varaible1);

const enum LoadingState{Idle, Loading, Success, Error}
const estado = LoadingState.Success;


type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

type Persona = {
    readonly id: number, 
    nombre: string,
    talla: Talla,
    direccion: Direccion

}

const objeto: Persona ={
    id: 1,
    nombre: 'Hola mundo',
    talla: Talla.Mediana,
    direccion:{
        numero: 1,
        calle: 'Siempre',
        pais: 'Colombia'
    }

}

const arr: Persona []=[]

const fn: (a: number) => string = (edad: number) =>{
    if (edad > 17){
        return 'puedes ingresar'
    }else{
        return ' no puedes ingresar'
    }

}

function validaEdad(edad: number, _msg: string = 'feliz'): string {

    if(edad >17){
        return 'puedes ingresar ${_msg}' 
    } else {
        return 'no puedes ingresar'
    }
}

validaEdad(18)

function ErrorUsuario():never{
    throw new Error(' error de usuario ')
}


let puntaje: number | string = 98
puntaje = 'hola mundo'

type Animal ={
    id: number
    estado: string
}

type Usuario = {
    id:number,
    name: string
}

let animal: Usuario | Animal = {id: 1, estado: '', name: ''}   // puede contener dos typos usuario y animal

function sumaDos(n: number | string):number {    // funcion que puede contener algun tipo numero o string y  es resultado tipo number
    if(typeof n === 'number'){
        return n+2
    }else {
        return parseInt(n) + 2
    }
}

sumaDos(2)

console.log('Suma de dos mas dos ', '2' + 2)

type Audit = {
    created_at: string,
    modified_at: string,
}

type Product = {
    name: string,
}

const product: Audit  & Product = { created_at: '',   // intersection type tiene que contener 2 tipos

modified_at: '',
name: ''

}

type Fibo = 0| 1|2|3|5     // para escoger un numero de fibo

const nDeFibo: Fibo = 5

function toNumber(s: string  | null | undefined){   // para el caso que puede ser la funcion string  o null o undefined
    if(!s){
        return 0
    }
    return parseInt(s)
}

const n = toNumber(null)

function getUser (id: number){
    if(id < 0){
        return null
    } else {
        return {
            id: 1,
            name: 'felipe',
            created_at: new Date()
        }
    }
}
const user = getUser(1)
console.log(user?.created_at)  // el user? es por si esta vacia

const arr1 = null

console.log(arr1?.[0])

const fn5:any = null

console.log(fn5?.())

const difficulty: number | null = 0

const user2 = {
    username: 'chancho',
    difficulty: difficulty ?? 1,   // el ?? es para que coja la dificulta en 0
}

console.log(user2)

const elem: any = null;

const elem1 = elem as number

const input = <HTMLInputElement>document.getElementById('username')

input.value  // type assertion autocompletado HTML

function Lala(x: string | number){
    //type narrowing
    if(typeof x === "number"){
        // las opciones seran tipo number
    }
    if (typeof x === "string"){
    // las opciones seran  tipo string
    }
}

//function procesa(algo?: unknown){ // unknown obliga escribir todos los metodos asociados

  //  if (typeof algo === 'string'){
    //   return  algo.toUpperCase()
    //}
    //if(typeof algo === 'number'){
  //      return algo.toString()
    //}

//} */
class Personaje {

    profesion?: string
    private static equipo:number = 1

    constructor(
        public readonly id: number,
        public name: string,
        public nivel: number,
        private hp: number
    )
        
        {
        this.id  = id
        this.name = name
        this.nivel= nivel
        this.hp = hp
    }
    
    subirNivel(): number {
        this.nivel = this.nivel + 1
        return this.nivel
    }

    static agregarPersonaje(): void {
        Personaje.equipo++
    }

    cambiarHP(cantidad: number ):number{
        this.hp = this.hp + cantidad
        return this.hp
    }
    get _hp(): number {
        return this.hp
    }

    static getEquipo(): number{
        return Personaje.equipo
    }
    
}

const personaje = new Personaje(1, 'nicolas', 1 ,100)

personaje.cambiarHP(-10)
//console.log(personaje)
//console.log(personaje._hp)

const personaje1 = new Personaje(2, 'felipe' ,1,120)
Personaje.agregarPersonaje()
console.log(Personaje.getEquipo())

if(typeof personaje){ 
    // tipo objeto
 }

 if (personaje instanceof Personaje){
    //true  o  false
 }
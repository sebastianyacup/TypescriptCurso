/*function log <T,V>(a: T , b:V): V{  // genericos en funciones como <T, V>
    console.log(a,b)

    return b
}

log<string,number>('dato',42)
log<string,string>('dato', 'feliz')

log(1,2)
log('Saludo', 'Hola mundo')*/
async function fetchData<T>(recurso: string): Promise<T>{
    const respuesta = await fetch(`${recurso}`)
    return respuesta.json()
}

type User = {
    id: string,
    name: string,
}

async function main(){
 
    const user = await fetchData<User>('/usuarios')
    user.id
}

type Computador ={
    encender: () => void,
    apagar: () => void,
}


class Programador<T> { // genericos en clases
    computador : T;
    constructor(t: T){
        this.computador = t
    }
}

const programador = new Programador<Computador>({encender: () => {}, apagar: () =>{}})
const programador1 = new Programador<string>('string')
//programador.computador.apagar
//programador1.computador.length metodo de strings

interface KeyValue <T, V>{  // genericos en interfaces
    key: T,
    value: V,
}

interface Product{
    id: string
}

function fetchProduct(): KeyValue<string, Product>{
    return {
        key: 'id de producto',
        value: {id: ' id del productoo'}
    }

}

function fetchStock(): KeyValue<string, number>{
    return {
        key: 'id de producto',
        value:500,
    }
}

/*
interface Usuario{
    id: string,
    name: string
} */

class Usuario {
    constructor(public id: string){}
}

function print <T extends Usuario>(t: T): T{   //retricciones en genericos (Usuarios)
    console.log(t); 
    
    return t
}

print({id: 'prueba', name: 'pipe'})


class Estado<T>{   // genericos y herencia
    protected data: T[] = [];

    agregar(t: T): void{
        this.data.push(t)
    }

    getEstado(): T[]{
        return this.data
    }

}

type ObjectId = {
    id:string
}

class EstadoEliminar<T extends ObjectId> extends Estado<T>{

    eliminar(id: string){
       this.data= this.data.filter(x => x.id !== id)

    }
}

class EstadoUsuarios extends Estado<Usuario>{  //Fijo
    reiniciarContraseñas(){
        //aca logica
    }
}

const estadoUsuarios = new EstadoUsuarios()


//Tres formas de pasar genericos cuando se utiliza la herencia
//Pasar generico
//Con Restricciones
//Fijo

type Calendar ={
    id: number;
    fuente: string;
    dueno: string;
}

const calendar: Calendar = {id: 1, fuente: 'Google', dueno: 'yo'};

function getProp<T>(objeto: T, property: keyof T): unknown {  //keyOf  asegura lo que este T(calendar)
    return objeto[property];
}

const prop = getProp<Calendar>(calendar, "id");
const prop1 =getProp<Calendar>(calendar, 'fuente')
console.log(prop,prop1)

type Punto = {  //Utility Types
    x:number,
    y: number,
    desc?: string
}

type PuntoOpcional = Partial <Punto>
type PuntoRequerido = Required<Punto>

const keyVal: Record<string , number> = {
    'soy un string': 42
}

const p: Omit <Punto, 'desc'>={
    x: 1,
    y: 0
}

const p1: Pick<Punto, 'x' | 'y'> = {
    x:1,
    y:2
}

const readOnlyP: Readonly<Punto> ={
    x:1,
    y:3,
    desc: 'soy una descripcion'
}
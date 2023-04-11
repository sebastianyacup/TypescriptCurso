function Route(ruta: string){  // decoradores de clases
    return (constructor: Function) =>{
    console.log('Ejecutando el decorador de ruta')
    constructor.prototype.route = ruta
    }
}

function Method(method: string ){  //decoradores de metodos
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
    console.log(methodName, descriptor);
    const original = descriptor.value
    descriptor.value = function(...args:any){
        console.log('antes del metodo');
        original.call(this, ...args)
        console.log('despues del metodo'); }
    }
}
@Route('/productos')// decoradores de clases
class Productos{
    @Method('get')
    find(val:string){
        console.log('soy el metodo find'+ val);
    }
}

const p = new Productos() 
p.find('hola mundo')
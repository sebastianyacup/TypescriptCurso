let suma = function (a: number, b:number){
    return a + b;
}

console.log(suma(5,3));

let sumaFlecha = (a: number , b:number ) => {
    return a +  b;
};

console.log(sumaFlecha(3,2));


var obtenerNombre = function (){
    return "Juan Perez";
}

let obtenernombre = () =>{
    return "Juan Perez";
}

console.log(obtenerNombre())
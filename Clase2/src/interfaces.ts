interface Animal{ // interfaces para las  clases , type para lo demas
    name: string
    caminar():void
    onomatopeya():string
}

class Caballo implements Animal {
    name: string = 'Rocinante'
    caminar(): void {
        console.log('caminando');
    }
    onomatopeya(): string {
        return 'hin '
    }
}

class Cerdo implements Animal {
    name: string = 'chancho'
    caminar(): void {
        console.log('caminando');
    }
    onomatopeya(): string {
        return 'oinc '
    }
}

class Perro implements Animal{
    name: string = 'bengie';
    caminar(): void {
        console.log('caminando');
    }
    onomatopeya(): string {
        return 'guau'
    }
    
}


class DireccionrioUsuarios{
    [id: string]: string
}

let diccionarioUsuarios = new DireccionrioUsuarios()
diccionarioUsuarios['1a']= 'Usuario 1'
diccionarioUsuarios['a1']= 'Usuario 2'
console.log(diccionarioUsuarios);
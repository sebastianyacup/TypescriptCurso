function UpperCase(target:any, methodName: string, propertyDescriptor:PropertyDescriptor){
    const orginal = propertyDescriptor.get
    propertyDescriptor.get = function(){
        const r = orginal?.call(this)
        if(typeof r === 'string'){
            return r.toUpperCase()
        } else {
            return r
        }
    }
}

class User{
    constructor(public name: string, public lastname:string){}
    
    @UpperCase
    get fullName(){
        return `${this.name} ${this.lastname}`
    }
}

const user = new User('felipe', "urbano")
console.log(user.fullName)
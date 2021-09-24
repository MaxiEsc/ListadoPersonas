class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get darNombre(){
        return this._nombre
    }

    set obtNombre(nombre){
        this._nombre = nombre
    }

    get darApellido(){
        return this._apellido
    }

    set obtApellido(apellido){
        this._apellido = apellido
    }


}
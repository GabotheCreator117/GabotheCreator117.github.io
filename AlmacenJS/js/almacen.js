class Almacen {
    static contadorProducto = 1;
    constructor(id, nombreProducto, descripcion, precio){
        this._id = id;
        this._nombreProducto = nombreProducto;
        this._descripcion = descripcion;
        this._precio = precio;
        this._contador = ++Almacen.contadorProducto;
    }
    get id(){
        return this._id;
    }
    set id(id){
        return this._id = id;
    }
    get nombreProducto(){
        return this._nombreProducto;
    }
    set nombreProducto(nombreProducto){
        return this._nombreProducto = nombreProducto;
    }
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        return this._descripcion = descripcion;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        return this._precio = precio;
    }
}
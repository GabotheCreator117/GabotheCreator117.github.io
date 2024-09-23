const almacens = [];

function mostrarProductos(){
    let texto = '';
    for(let producto of almacens){
        texto += `<li> ID: ${producto._id} Nombre Producto: ${producto._nombreProducto} Descripcion:${producto._descripcion} Precio: ${producto._precio}</li>`;
    }
    document.getElementById('productoListado').innerHTML = texto;
}

function agregarProducto(){
    const forma = document.getElementById('forma');
    const Id = forma['Id'];
    const nombreProducto = forma['nombreProducto'];
    const descripcion = forma['descripcion'];
    const precio = forma['precio'];
    if(Id.value !== '' && nombreProducto.value !== '' && descripcion.value !=='' && precio.value != ''){
        const almacenConst = new Almacen(Id.value, nombreProducto.value, descripcion.value, precio.value);
        almacens.push(almacenConst);
        mostrarProductos();
        Id.value = '';
        nombreProducto.value = '';
        descripcion.value = '';
        precio.value ='';
    }else{
        alert('Por favor completa todos los campos');
    }
}

function eliminarProducto(){
    almacens.pop();
    mostrarProductos();
}

function eliminarTodo(){
    let i = 0;
    do{
        almacens.pop();
    }while(i < almacens.length);
    Almacen.contadorProducto = 1;
    mostrarProductos();
}
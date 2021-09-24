const personas = [];

function mostrarPersonas(){

    console.log('ejecutando mostrar personas');
    let texto = '';
    for(let iterar of personas){
        console.log(iterar);
        texto += `<li>${iterar.darNombre} ${iterar.darApellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const formulario = document.forms['formulario_html'];
    const nombre = formulario['nombre_form'];
    const apellido = formulario['apellido_form'];
    if(nombre.value == "" && apellido.value == ""){
        let mensaje = "Ingrese por favor un nombre y un apellido";
        document.getElementById('mensaje').innerHTML = mensaje
    }else{
        const nueva_persona = new Persona( nombre.value, apellido.value);
        personas.push(nueva_persona);
        mostrarPersonas();        
        let mensaje = "Nombre y apellido ingresado exitosamente";
        document.getElementById('mensaje').innerHTML = mensaje
    }
}

function limpiarPersonas(){
    for(iterar of personas){
        if(iterar.darNombre != null && iterar.darApellido != null){
            personas.pop();
        }
    }
}
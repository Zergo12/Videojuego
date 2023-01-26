
 
function clickbtnAgregar(){
    const usuario = ({
        nombre: document.getElementById("txt").value,
        puntuacion: marty.pepsi,
    })
    guardarUsuario()

}


function guardarUsuario (usuario){

    let personasGuardadas = []

    let storageProfileString = JSON.parse(localStorage.getItem("puntaje"));
    console.log (storageProfileString)
    
    if (storageProfileString){
        console.log ("Tiene datos") 
    } else {
        console.log ("No tiene datos") 
    }

    // localStorage.setItem("puntaje", JSON.stringify (puntaje) || []); 

    // let personasGuardadas = JSON.parse(storageProfileString)

    agregarPersona(personasGuardadas)
    }


function agregarPersona (usuarios){
    usuarios.forEach( usuario => {      
        const nuevoJugador = document.createElement("tr");
        nuevoJugador.innerHTML = `<td class="Nombre">
          <span>${usuario.nombre}</span>
        </td>
        <td class="Puntuacion"><span>${usuario.puntuacion}</span></td>
      </tr>`

        const jugador = document.querySelector("#tabla");
        jugador.appendChild(nuevoJugador)
     }); 

}
    
 //     keysArray.push(localStorage.key(i));




// Obtenemos el valor de una clave
// let value = localStorage.getItem('key');

// Se elimina una clave
// localStorage.removeItem('key');

// Eliminamos todas las claves
// localStorage.clear();

// Se guarda un valor en formato JSON
// value = JSON.stringify({"key": true, "key2": 42, "key3": "Hello World!"});
// localStorage.setItem('key', puntaje);


// Obtenemos el valor de una cadena guardada en formato JSON
// const string = localStorage.getItem('key');
// value = JSON.parse(string);

// Buscar elementos
// let keysArray = [];
// for (let i = 0; i < localStorage.length; ++i) {
//     keysArray.push(localStorage.key(i));
// }
// console.log(keysArray);


// window.addEventListener('storage', function(e) {  
//     console.log("Key: " + e.key);
//     console.log("Old value: " + e.oldValue);
//     console.log("New value: " + e.newValue);
//     console.log("Url: " + e.url);
//     console.log("Storage area: " + JSON.stringify(e.storageArea));
// });

window.addEventListener ("load", () => {
    let btnAgregar = document.getElementById("btnAgregar")
    btnAgregar.addEventListener("click", clickbtnAgregar)

}) 
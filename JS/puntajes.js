function clickbtnAgregar(){
    guardarUsuario()

}


function guardarUsuario (usario){

    const puntuaciones = JSON.parse(localStorage.getItem("puntuaciones"));
    console.log (puntuaciones) 

    let personasGuardadas = []
    
    if (puntuaciones != null){
        personasGuardadas = [...puntuaciones]
    } 

    let datos = ({
        nombre: document.getElementById("txt").value,
        puntuacion: marty.pepsi,
    })    

    personasGuardadas.push(datos)
    localStorage.setItem("puntuaciones", JSON.stringify (personasGuardadas)); 
    
    const puntuacion = JSON.parse(localStorage.getItem("puntuaciones"));

    agregarPersona(puntuacion)

    }


 function compararPuntaje (a,b){
    return b-a
 }
    
function agregarPersona (usuarios){
    usuarios.sort((a,b) => b.puntuacion - a.puntuacion).slice(0,10).forEach( usuario => {      
        const nuevoJugador = document.createElement("tr");
        nuevoJugador.innerHTML = `<td class="Nombre">
          <span>${usuario.nombre}</span>
        </td>
        <td class="Puntuacion"><span>${usuario.puntuacion}</span></td>
      </tr>`

        const jugador = document.querySelector("#tabla");
        jugador.appendChild(nuevoJugador)
     }); 
     console.log (usuarios) 

}
    



const modal = document.getElementById("cajaModal");

let span = document.getElementsByClassName("cerrar")[0];

const scores = document.getElementById("btnPuntuaciones")

let btnAgregar = document.getElementById("btnAgregar")

window.addEventListener ("load", () => {
    btnAgregar.addEventListener("click", clickbtnAgregar)
    btnAgregar.addEventListener("click", clearInput)
    
    btnAgregar.onclick = function() {
        modal.style.display = "block";
      }
    //   Llama boton puntuacioes
//    scores.onclick = function() {
//         modal.style.display = "block";
//       }

}) 

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function clearInput(){
  document.getElementById("txt").value = "";
};

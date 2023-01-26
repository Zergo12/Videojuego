const cuadro = document.getElementById("cuadroJuego")

const ctx = cuadro.getContext("2d")

const menu = document.querySelector(".botones")

const hide = document.querySelector(".ocultar")

const gameOver = document.querySelector (".gameOver")

const Tabla = document.querySelector(".tabla")

tabla.setAttribute("border", "1", "white")

// const youWin = document.querySelector (".youWin")

const esconder = document.getElementsByClassName("space")



let requestReference 

let idCrearBiff

let idCrearBombas

let idCrearDelorean

let idCrearPepsi

let idCrearRobots

// Play

// let jugarBtn = document.getElementById("jugar")

// jugarBtn.addEventListener("", () => {
//     if (jugarBtn.innerText === "Jugar")

// })

// Pausa
let pausaBtn = document.getElementById("pausaToggle")

pausaBtn.addEventListener("click", () => {
    if(pausaBtn.innerText === "Pausa"){
        pausaBtn.innerText = "Jugar"
        cancelAnimationFrame(requestReference);
        cancelAnimationFrame(requestRef)
        clearInterval(idCrearBiff);
        clearInterval(idCrearBombas);
        clearInterval(idCrearDelorean);
        clearInterval(idCrearPepsi);
        clearInterval(idCrearRobots);
        inicio.pause()
    }  else {
        pausaBtn.innerText = "Pausa"
        empezarJuego();
        creacionBiffs();
        creacionBombas();
        creacionDeloreans();
        creacionPepsi();
        creacionRobots();
        animate()
        inicio.play()
    }
})



pausaBtn.addEventListener("focus", function(){
    this.blur()
} )

// Carga de imagenes
const heart = new Image ()
heart.src = "../Assets/Imagenes/HoverBoard.png"

const martyD = new Image ()
martyD.src = "../Assets/Imagenes/martys/martys/Marty1.png"

const martyd1 = new Image ()
martyd1.src = "../Assets/Imagenes/martys/martys/Marty22.png"

const martyd2 = new Image ()
martyd2.src = "../Assets/Imagenes/martys/martys/Marty33.png"

const MartysD = [martyD,martyd1,martyd2]

const martyI = new Image ()
martyI.src = "../Assets/Imagenes/MartyAtras.png"

const DeloreanI = new Image ()
DeloreanI.src = "../Assets/Imagenes/Delorean.png"

const BiffCoche = new Image 
BiffCoche.src = "../Assets/Imagenes/Biff1.png"

const RobotI = new Image ()
RobotI.src = "../Assets/Imagenes/Robot1.png"

const GuitarraD = new Image ()
GuitarraD.src = "../Assets/Imagenes/Guitarra1.png"

const bomb = new Image ()
bomb.src = "../Assets/Imagenes/bomba1.png"

const skull = new Image ()
skull.src = "../Assets/Imagenes/Skull.png"

const soda = new Image ()
soda.src = "../Assets/Imagenes/Pepsi.com.png"

const explosion = new Image()
explosion.src = "../Assets/Imagenes/Explosion.png"




// Biff

const biffs = []

// Guitarra

const guitarras = []

// Bombas

const bombas = []

// Robots

const robots = []

// Deloreans

const deloreans = []

// Pepsis   

const pepsis = []

// Puntaje
function sumarPepsis (){
    let total = marty.pepsi
}


// Personaje -Clase

class Marty {
    constructor (x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vy = 0
        this.velocidad = 15;
        this.kills = 0;
        this.vidas = 1
        this.img = martyD
        this.pepsi = 0

    }

    dibujarse(){
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h) 
    }

    disparar (){
        const guitarra = new Guitarra (this.x + this.w, this.y + (this.h/4))
        guitarras.push(guitarra) 
        console.log (guitarras) 
    }

    adelate (){
        if (this.x < 763){
            this.x += this.velocidad
        }
        this.img = martyD
        
    }

    atras(){
        if (this.x > 0 ){
            this.x -= this.velocidad
        }
        this.img = martyI
        
    }
  
   
    
}


// Guitarra - Clase

class Guitarra {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.img = GuitarraD
    }

    dibujarse(){
        ctx.drawImage(this.img, this.x, this.y, 30, 35)
        this.x += 1
        if (this.x < 10)
            guitarras.shift()
    
    }

    
}

// Biff - Clase

class Biff {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.img = BiffCoche
    }

    dibujarse(){
        this.x -= 2
        ctx.drawImage(this.img, this.x, this.y, 95, 95)
        
    }
}

// Robot - Clase

class Robot {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 70
        this.img = RobotI
    }

    dibujarse(){
        this.x -= 1
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  
    }

    disparar (){
        const bomba = new Bomba (this.x + (this.w/2), this.y + this.h)
        bombas.push(bomba)
        
    }


}

// Bomba - Clase

class Bomba {
    constructor(x,y){
        this.x = x;
        this.y = y
        this.img = bomb
    }

    dibujarse(){
        this.y+=2 
        this.x-=1 
        ctx.drawImage(this.img, this.x, this.y, 20, 20)
       if (this.y >= 695){
        this.img = explosion
       }
    }
}


// Delorean - Clase

class Delorean {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.w = 150;
        this.h = 150
        this.img = DeloreanI
    }

    dibujarse(){
        this.x -= 1
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
        }

    disparar (){
        const pepsi = new Pepsi ((this.x + (this.w/2)),( this.y + this.h))
        pepsis.push(pepsi)
        }
}

 // Pepsi - Clase
class Pepsi {
        constructor(x,y){
            this.x = x
            this.y = y
            this.img = soda
        }
        dibujarse(){
            this.y+=1 
            this.x-=1 
            ctx.drawImage(this.img, this.x, this.y, 40, 40)
            if (this.y >= 695){
                this.img = explosion
            }
        }
 }


// Instancias 

const marty = new Marty (30, 660, 60, 75)


document.addEventListener('keydown', (evento) => {
    switch(evento.key){
        case "ArrowRight":
            marty.adelate()
            break;
        case "ArrowLeft":
            marty.atras()
            break;
        case " ":
            if (guitarras.length < 2)
            marty.disparar()
            break;
    }
})

// let tiempo = 0

// Empezar juego
function empezarJuego (){
    
        ctx.clearRect(0,0, 830 ,800) 
        // Dibuja Marty
        marty.dibujarse()

        // Game Over
        if (marty.vidas === 0){
            setGameOver()
        } else if(marty.pepsi === 10){
            setWin()
        }

        

        // Colision Marty vs Biff
        biffs.forEach((biff, indexBiff)  => {
            if ((biff.x <= marty.x + 60 && marty.y <= biff.y + 95 && marty.y + 75 >= biff.y )){
                marty.vidas--
                biffs.splice(indexBiff, 1)
            }
        })

        // Colision Marty vs Robot
        robots.forEach((robot, indexRobot)  => {
            if ((robot.x <= marty.x + 60 && marty.y <= robot.y + 70 && marty.y + 75 >= robot.y )){
                marty.vidas--
                robots.splice(indexRobot, 1)
            }
        })

        // Colision Marty vs Bomba
        bombas.forEach((bomba, indexBomba)  => {
            if ((marty.x  + 60 >= bomba.x &&
                marty.y <= bomba.y + 20 &&
                bomba.x >= marty.x &&
                marty.y + 75 >= bomba.y )){
                marty.vidas--
                bombas.splice(indexBomba, 1)
            }
            
        })

        // Colision Marty vs Pepsi
        pepsis.forEach((pepsi, indexPepsi)  => {
            if ((marty.x  + 60 >= pepsi.x &&
                marty.y <= pepsi.y + 40 &&
                pepsi.x >= marty.x &&
                marty.y + 75 >= pepsi.y )){
                marty.pepsi++
                pepsis.splice(indexPepsi, 1)
            }
            
        })
    

        
        // Dibuja guitarras
        guitarras.forEach((guitarra ,indexGuitarra) => {
                guitarra.x += 2
                guitarra.dibujarse()
            
                // Colision guitarra vs Biff
                biffs.forEach((biff, indexBiff)  => {
                    if (biff.x <= guitarra.x + 30 && guitarra.y >= biff.y && guitarra.y <= biff.y + 95) {
                        biffs.splice(indexBiff, 1)
                        guitarras.splice(indexGuitarra, 1)
                        marty.kills++
                    }
                })


                // Colision guitarra vs Robot
                robots.forEach((robot, indexRobot)  => {
                    if (robot.x <= guitarra.x + 30 && guitarra.y >= robot.y && guitarra.y <= robot.y + 70) {
                        robots.splice(indexRobot, 1)
                        guitarras.splice(indexGuitarra, 1)
                        marty.kills++
                    }
                })
            })
            

        // Dibuja Delorean
        deloreans.forEach((delorean,indexDelorean) => {
            delorean.dibujarse()
            if( delorean.x <= 0){
                deloreans.splice(indexDelorean,1)
            }
        })

        

        // Dibuja Biff
        biffs.forEach((biff, indexBiff) => {
            biff.dibujarse()

            
            if (biff.x <= marty.x ){
                biffs.splice(indexBiff,1)
                }
        })

        // Dibuja Robots
        robots.forEach((robot, indexRobot) => {
            robot.dibujarse()

            if (robot.x <= 0){
                robots.splice(indexRobot,1)
            }
        })

        // Dibuja Bombas
        bombas.forEach ((bomba, indexBomba) => {
            bomba.dibujarse()

            // Colision bomba vs Piso
           if (bomba.y >= 700 ){
           bombas.splice(indexBomba,1)
           }
        })

        // Dibuja Pepsis
        pepsis.forEach ((pepsi, indexPepsi) => {
            pepsi.dibujarse()

            // Colision pepsi vs piso
            if(pepsi.y >= 700){
            pepsis.splice(indexPepsi,1)
            }
        })

        

        // tiempo++
        ctx.font = "30px Arial"
        // ctx.fillText(tiempo, 10, 35)

        // Kills
        ctx.fillText(`${marty.kills}`, 740 , 790 )
        ctx.drawImage (skull, 780, 765 , 25, 25)
 
        // Vidas
        vidas()

        // Pepsi
        ctx.fillText (`${marty.pepsi}`, 400, 792 )
        ctx.drawImage (soda, 367, 765, 30, 30)

        ctx.font = "5px Arial"
        let reqId = requestAnimationFrame(empezarJuego)
        requestReference = reqId
    }


ctx.fillStyle = "White"

// Boton para empezar/pausar juego

let btn = document.getElementById("jugar")

btn.addEventListener("click", () => { 
    animate()
    empezarJuego()
    creacionDeloreans()
    creacionBiffs()
    creacionRobots()
    creacionBombas()
    creacionPepsi()
    inicio.play()
    btn.classList.add("none")
   
})

// Vidas
function vidas (){
    if (marty.vidas === 4){
        ctx.drawImage(heart, 10, 770, 30, 30)
        ctx.drawImage(heart, 50, 770, 30, 30)
        ctx.drawImage(heart, 90, 770, 30, 30)
        ctx.drawImage(heart, 130, 770, 30, 30)
    }

    if (marty.vidas === 3){
        ctx.drawImage(heart, 10, 770, 30, 30)
        ctx.drawImage(heart, 50, 770, 30, 30)
        ctx.drawImage(heart, 90, 770, 30, 30)
    }

    if (marty.vidas === 2){
        ctx.drawImage(heart, 10, 770, 30, 30)
        ctx.drawImage(heart, 50, 770, 30, 30)
    }

    if(marty.vidas === 1){
        ctx.drawImage(heart, 10, 770, 30, 30)
    }
}

// Generacion de Biffs 

function creacionBiffs (){
    idCrearBiff = setInterval(() => {
        const a = new Biff (760, 650)
        biffs.push(a)
    }, 3000) 
}

// Generacion de Delorean aleatorios
function creacionDeloreans (){
    idCrearDelorean = setInterval(() => {
        const posicionY = Math.floor((Math.random() * 300) + 60)
        const b = new Delorean (780, posicionY)
        deloreans.push(b)
    }, Math.floor(Math.random() * (10000 - 2150) + 2000))
}

// Generacion Robots aleatorios
function creacionRobots (){
    idCrearRobots =  setInterval(() => {
        const posY = Math.floor((Math.random() * 500 ) + 60)
        const c = new Robot (795, posY)
        robots.push(c)
    },  Math.floor(Math.random() * (10000 - 6000) + 1000))
}

// Generacion Bombas 
function creacionBombas (){
    idCrearBombas = setInterval (() => {
        let posicion = robots.forEach((robot) => {
            robot.x 
            robot.y
            const d = new Bomba (robot.x + (robot.w/2), robot.y + robot.h)
            bombas.push(d)
        })    
    }, Math.floor(Math.random() * (2000 - 1000) + 1000))
}

// Generacion Pepsis
function creacionPepsi (){
    idCrearPepsi = setInterval (() => {
        let posicion = deloreans.forEach((delorean) => {
            delorean.x 
            delorean.y
            const e = new Pepsi (delorean.x + (delorean.w/2), delorean.y + (delorean.h/2))
            pepsis.push(e)
        })    
    }, Math.floor(Math.random() * (2000 - 1000) + 2000))
}

// Game Over
function setGameOver(){
    hide.setAttribute("class", "none")
    // menu.setAttribute( "class","none")
    gameOver.removeAttribute("class","none")
    // Tabla.removeAttribute("class", "none")
}

// You Win
// function setWin(){
//     cuadro.setAttribute("class", "none")
//     canvas.setAttribute("class", "none")
//     menu.setAttribute( "class","none")
//     youWin.removeAttribute("class", "none")
//     clearInterval(idCrearBiff)
//     clearInterval(idCrearBombas)
//     cancelAnimationFrame(requestRef)
// }
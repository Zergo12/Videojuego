const cuadro = document.getElementById("cuadroJuego")
const ctx = cuadro.getContext("2d")
const menu =document.querySelector(".botones")

const gameOver = document.querySelector (".gameOver")

// Carga de imagenes
const heart = new Image ()
heart.src = "../Assets/Imagenes/HoverBoard.png"

const martyD = new Image ()
martyD.src = "../Assets/Imagenes/martys/martys/Marty1.png"

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

const pepsi = new Image ()
pepsi.src = "../Assets/Imagenes/Pepsi.com.png"


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


// Personaje -Clase

class Marty {
    constructor (x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vy = 0
        this.velocidad = 10;
        this.kills = 0;
        this.vidas = 4
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
    salto(){
        this.y -= 5
        
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
        this.x += 2
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
        this.x -= 3
        ctx.drawImage(this.img, this.x, this.y, 95, 95)
        
    }
}

// Robot - Clase

class Robot {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.img = RobotI
    }

    dibujarse(){
        this.x -= 2
        ctx.drawImage(this.img, this.x, this.y, 50, 70)
  
    }

    disparar (){
        const bomba = new Bomba (this.x + this.w, this.y + (this.h/4))
        bombas.push(bomba) 

    }


}

// Bomba - Clase

class Bomba {
    constructor(x){
        this.x = x;
        this.y = 0
        this.img = bomb
    }

    // caida (){
       
    // }

    dibujarse(){
        this.y++ 
        ctx.drawImage(this.img, this.x, this.y, 20, 20)
        
    }
}

// Delorean - Clase

class Delorean {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.img = DeloreanI
    }

    dibujarse(){
        this.x -= 2
        ctx.drawImage(this.img, this.x, this.y, 150, 150)
        }
}


// Instancias 

const marty = new Marty (30, 640, 60, 75)




document.addEventListener('keydown', (evento) => {
    switch(evento.key){
        case "ArrowRight":
            marty.adelate()
            break;
        case "ArrowLeft":
            marty.atras()
            break;
        case "ArrowUp":
            marty.salto()
            break;
        case " ":
            marty.disparar()
            break;
    }
})

let tiempo = 0

// Empezar juego
function empezarJuego (){
    setInterval(() => {
        ctx.clearRect(0,0, 830 ,800) 
        // Dibuja Marty
        marty.dibujarse()

        // Game Over
        if (marty.vidas === 0){
            setGameOver()
        }

        // Colision Marty vs Biff
        biffs.forEach((biff, indexBiff)  => {
            if ((biff.x <= marty.x + 60 && marty.y <= biff.y + 95 && marty.y + 75 >= biff.y )){
                marty.vidas--
                biffs.splice(indexBiff, 1)
                console.log ('choque')
            }
        })

        // Colision Marty vs Robot
        robots.forEach((robot, indexRobot)  => {
            if ((robot.x <= marty.x + 60 && marty.y <= robot.y + 70 && marty.y + 75 >= robot.y )){
                marty.vidas--
                robots.splice(indexRobot, 1)
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
        deloreans.forEach((delorean) => {
            delorean.dibujarse()

        })

        // Dibuja Biff
        biffs.forEach((biff) => {
            biff.dibujarse()
            // Si biff toca la pared de la izquierda
            // if ( biff.x <= 0){
            //     marty.vidas-=1
            // }
        })

        // Dibuja Robots
        robots.forEach((robot) => {
            robot.dibujarse()
            
            bombas.forEach (() => {

            })
        })

        // Dibuja Bombas
        bombas.forEach ((bomba) => {
            bomba.dibujarse()
        })

        

        tiempo++
        ctx.font = "30px Arial"
        // ctx.fillText(tiempo, 10, 35)

        // Kills
        ctx.fillText(`${marty.kills}`, 760 , 783 )
        ctx.font = "10px Arial"
        ctx.drawImage (skull, 780, 755 ,30 , 30)
 
        // Vidas
        vidas()

        // Pepsi
        ctx.fillText (`${marty.pepsi}`, 400, 770 )
        ctx.font = "10px Arial"
        ctx.drawImage (pepsi, 350, 745, 40, 40)

    }, 1000/60)
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
    
    btn.classList.add("none")
   
})

// Vidas
function vidas (){
    if (marty.vidas === 4){
        ctx.drawImage(heart, 10, 740, 50, 50)
        ctx.drawImage(heart, 50, 740, 50, 50)
        ctx.drawImage(heart, 90, 740, 50, 50)
        ctx.drawImage(heart, 130, 740, 50, 50)
    }

    if (marty.vidas === 3){
        ctx.drawImage(heart, 10, 740, 50, 50)
        ctx.drawImage(heart, 50, 740, 50, 50)
        ctx.drawImage(heart, 90, 740, 50, 50)
    }

    if (marty.vidas === 2){
        ctx.drawImage(heart, 10, 740, 50, 50)
        ctx.drawImage(heart, 50, 740, 50, 50)
    }

    if(marty.vidas === 1){
        ctx.drawImage(heart, 10, 740, 50, 50)
    }
}

// Generacion de Biffs 

function creacionBiffs (){
    setInterval(() => {
        const a = new Biff (750, 620)
        console.log ('Biff') 
        biffs.push(a)
    }, 4000) 
}


// Generacion de Delorean aleatorios
function creacionDeloreans (){
    setInterval(() => {
        const posicionY = Math.floor((Math.random() * 300) + 60)
        console.log ('Delorean') 
        const b = new Delorean (750, posicionY)
        deloreans.push(b)

        const c = new Robot (750, posicionY)
        robots.push(c)
    
    }, Math.floor(Math.random() * (20000 - 8000) + 10000))
}

// Generacion Robots aleatorios
function creacionRobots (){
    setInterval(() => {
        const posY = Math.floor((Math.random() * 500 ) + 60)
        console.log ('Robot') 
        const c = new Robot (750, posY)
        robots.push(c)
    
    },  Math.floor(Math.random() * (5000 - 2000) + 3000))
}

// Generacion Bombas 
function creacionBombas (){
    setInterval (() => {
        const posAleatoria = Math.floor(Math.random() * 670)
        const d = new Bomba (posAleatoria)
        bombas.push(d)
        console.log ("Bomba") 
    }, Math.floor(Math.random() * (2000 - 1000) + 4000))
}

// Game Over
function setGameOver(){
    cuadro.setAttribute("class", "none")
    menu.setAttribute( "class","none")
    gameOver.removeAttribute("class","none")
}
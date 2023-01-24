const cuadro = document.getElementById("retroWave")
// const ctx = cuadro.getContext('2d');


// Carga de imagenes
// const pizza = new Image ()
// heart.src = "https://toppng.com/public/uploads/thumbnail/heart-pixelart-game-retro-red-minecraft-life-pixel-corazon-de-8-bits-11562936212skverdpytt.png"

const martyd = new Image ()
martyd.src = "../Assets/Imagenes/martys/martys/Marty1.png"

const DeloreanI = new Image ()
DeloreanI.src = "../Assets/Imagenes/Delorean.png"

const BiffCoche = new Image 
BiffCoche.src = "../Assets/Imagenes/Biff1.png"

const RobotI = new Image ()
RobotI.src = "../Assets/Imagenes/Robot1.png"

const GuitarraD = new Image ()
GuitarraD.src = "../Assets/Imagenes/Guitarra1.png"


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
        this.velocidad = 10;
        this.kills = 0;
        // this.gravedad = 0.5;
        // this.velocidadGravedad = 0
        // this.lifes = 3
        this.img = martyd

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
        this.img = martyd
        
    }

    atras(){
        if (this.x > 0 ){
            this.x -= this.velocidad
        }
        
    }
    salto(){
        this.y -= 3
    }
    
}



        ctx.fillStyle = '#ffffff'


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


}

// Bomba - Clase

class Bomba {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    dibujarse(){
        ctx.fillRect(this.x, this.y, 300, 300)
        ctx.fillStyle = "#ffffff"
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

// marty.dibujarse()




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


        // Colision Marty vs Biff
        biffs.forEach((biff, indexBiff)  => {
            if ((biff.x <= marty.x + 60 && marty.y <= biff.y + 95 && marty.y + 75 >= biff.y )){
                biffs.splice(indexBiff, 1)
                console.log ('choque')
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
            })

        // Dibuja Delorean
        deloreans.forEach((delorean) => {
            delorean.dibujarse()

        })

        // Dibuja Biff
        biffs.forEach((biff) => {
            biff.dibujarse()
        })

        // Dibuja Robots
        robots.forEach((robot) => {
            robot.dibujarse()

        })
        

        tiempo++
        ctx.font = "30px Arial"
        // ctx.fillText(tiempo, 10, 35)

        // Kills
        ctx.fillText(`${marty.kills} muertes`, 670 , 30 )
        ctx.font = "10px Arial "
    }, 1000/60)
}
    
function colisiones (){

}




// Boton para empezar/pausar juego

let btn = document.getElementById("jugar")

btn.addEventListener("click", () => {
    empezarJuego()
    creacionDeloreans()
    creacionBiffs()
    creacionRobots()
    // animate()
    btn.classList.add("none")
   
})


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
        const posicionY = Math.floor((Math.random() * 600) + 50)
        console.log ('Delorean') 
        const b = new Delorean (750, posicionY)
        deloreans.push(b)
    
    }, Math.floor(Math.random() * (30000 - 8000) + 1000))
}

// Generacion Robots
function creacionRobots (){
    setInterval(() => {
        const posY = Math.floor((Math.random() * 600 ) + 48)
        console.log ('Robot') 
        const c = new Robot (750, posY)
        robots.push(c)
    
    },  Math.floor(Math.random() * (5000 - 2000) + 3000))
}

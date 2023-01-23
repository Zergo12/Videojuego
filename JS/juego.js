const canvas = document.getElementById("retroWave")
const ctx = canvas.getContext('2d');


// Carga de imagenes
// const pizza = new Image ()
// heart.src = "https://toppng.com/public/uploads/thumbnail/heart-pixelart-game-retro-red-minecraft-life-pixel-corazon-de-8-bits-11562936212skverdpytt.png"

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
        this.h = h
        this.velocidad = 10
        // this.kills = 0
        // this.lifes = 3
        // this.img = martyd

    }

    dibujarse(){
        ctx.fillRect(this.x, this.y, this.w, this.h) 
    }

    disparar (){
        const guitarra = new Guitarra (this.x + this.w, this.y + (this.h/4) )
        guitarras.push(guitarra) 
        console.log (guitarras) 
    }

    adelate (){
        if (this.x < 280){
            this.x += this.velocidad
        }
        
    }

    atras(){
        if (this.x > 0 ){
            this.x -= this.velocidad
        }
        
    }
    salto(){
        this.y -= 1 
    }
    
}

        ctx.fillStyle = '#ffffff'


// Guitarra - Clase

class Guitarra {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    dibujarse(){
        ctx.fillRect(this.x, this.y, 5, 5)
        this.x += 2
        if (this.x > 795)
            guitarras.shift()
    
    }

    
}

// Biff - Clase

class Biff {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    dibujarse(){
        this.x -= 3
        ctx.fillRect(this.x, this.y, 15, 15)
        
    }
}

// // Robot - Clase

// class Robot {
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }

//     dibujarse(){
//         ctx.fillRect(this.x, this.y, 40, 40)
//         ctx.fillStyle = "#ffffff"
//     }
// }

// // Bomba - Clase

// class Bomba {
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }

//     dibujarse(){
//         ctx.fillRect(this.x, this.y, 40, 40)
//         ctx.fillStyle = "#ffffff"
//     }
// }

// Delorean - Clase

class Delorean {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    dibujarse(){
        this.x -= 4
        ctx.fillRect(this.x, this.y, 15, 15)
        }
}


// Instancias 

const marty = new Marty (10, 120, 15, 15)
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
        ctx.clearRect(0,0, 850, 700) 
        // Dibuja Marty
        marty.dibujarse()


        // Dibuja guitarras
        guitarras.forEach((guitarra ,indexGuitarra) => {
                guitarra.x += 2
                guitarra.dibujarse()
            
                // Colision guitarra vs Biff
                biffs.forEach((biff, indexBiff)  => {
                    if (biff.x <= guitarra.x + 4 && guitarra.y >= biff.y){
                        biffs.splice(indexBiff, 1)
                        guitarras.splice(indexGuitarra, 1)
                    }
                })
            })

        // Dibuja Delorean
        deloreans.forEach((delorean, indexDelorean) => {
            delorean.dibujarse()
            console.log (deloreans) 

            // Colision Marty vs Delorean
            if (marty.x <= delorean.x + 15 && delorean.y >= marty.y && delorean.y <= marty.y + 15){
                deloreans.splice(indexDelorean, 1)
            }
        })

        // Dibuja Biff
        biffs.forEach((biff) => {
            biff.dibujarse()
        })
        

        tiempo++
        ctx.font = "10px"
        ctx.fillText(tiempo, 10, 10)
    
    }, 1000/60)
}
    

// Boton para empezar/pausar juego

let btn = document.getElementById("jugar")

btn.addEventListener("click", () => {
    empezarJuego()

  
    btn.classList.add("none")
   
})


// Generacion de Biffs aleatorios
setInterval(() => {
    const a = new Biff (600, 120)
    biffs.push(a)

}, 2000) 

// Generacion de Delorean aleatorios
setInterval(() => {
    const posicionY = Math.floor(Math.random() * 250)
    console.log (posicionY) 
    const b = new Delorean (750, posicionY)
    deloreans.push(b)

}, 1000) 
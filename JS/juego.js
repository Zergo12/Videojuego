const canva = document.getElementById(".retroWave")

const ctx = lienzo.getContext("2d")


// Carga de imagenes
const heart = new Image ()
heart.src = "https://toppng.com/public/uploads/thumbnail/heart-pixelart-game-retro-red-minecraft-life-pixel-corazon-de-8-bits-11562936212skverdpytt.png"

// Enemigos

const enemigos = []

// Guitarra

const guitarras = []

// Bombas

const bombas = []

// Personaje -Clase

class Marty {
    constructor (x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h
        this.kills = 0
        this.lifes = 3
        this.img = martyd

    }

    dibujarse(){
        ctx.fillRect( this.x, this.y, this.w, this.h) 
    }

    disparar (){
        const guitarra = new Guitarra (this.x + this.w, this.y + (this.h / 2))
        guitarras.push(guitarra) 
    }

    adelate (){
        if( this.x < ){
        this.x += this.velocidad 
        }
        this.img = naveD
    }

    atras(){
        if(this.x > 0){
            this.x -= this.velocidad
        }
        this.img = naveI
    }

    salto(){
    
    }
}

// Guitarra - Clase

class Guitarra {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    dibujarse(){
        ctx.fillRect(this.x, this.y, 40, 40)
    
    }
}

class Biff {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    dibujarse(){
        ctx.fillRect(this.x, this.y, 40, 40)
    }
}


class Robot {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    dibujarse(){
        ctx.fillRect(this.x, this.y, 40, 40)
    }
}

class Bombda {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    dibujarse(){
        ctx.fillRect(this.x, this.y, 40, 40)
    }
}

class Delorean {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    dibujarse(){
        ctx.fillRect(this.x, this.y, 100, 100)
    }
}

ctx.fillStyle = "#4599f9"

// Instancias 

const marty = new Marty (50,100,40,40)
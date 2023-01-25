const canvas = document.getElementById('retroWave');
const ctxbg = canvas.getContext('2d');
const canvasWidth = canvas.width = 823;
const canvasHeight = canvas.height = 800;

let requestRef

const road = document.getElementById('road');
const palms = document.getElementById('palms');
const palmsBack = document.getElementById('palmsBack');
const mountains = document.getElementById('mountains');
const back = document.getElementById('back');

let x = 0;
let x2 = 823;
const moveSpeed = 1;


class Layer{
    constructor(image, moveSpeed, y){
        this.x = 0
        this.y = y;
        this.width = 823;
        this.height = 800;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = moveSpeed;
    }

    dibujar (){
        ctxbg.drawImage(this.image, this.x, this.y);
        ctxbg.drawImage(this.image, this.x2, this.y)
    }

    actualizacion (){
        if (this.x < -823){
            this.x = 823 - this.speedModifier + this.x2;
        } else {
            this.x -= this.speedModifier;
        }
    
        if (this.x2 < -823) {
            this.x2 = 823 - this.speedModifier + this.x;
        } else {
            this.x2 -= this.speedModifier ;
        }
    }
}


const layerGround = new Layer (road, 0.8, 640);
const layerPalms = new Layer (palms, 0.5, 195);
const layerPalmsBack = new Layer (palmsBack, 0.3, 450);
const layerMountains = new Layer (mountains, 0.2, 140);
const layerSun = new Layer (back, 0, -25);


const objetosJuego = [layerSun, layerMountains, layerPalmsBack, layerPalms, layerGround,]

function animate () {
    ctxbg.clearRect(0, 0, canvasWidth, canvasHeight);
    objetosJuego.forEach(objeto => {
        objeto.actualizacion();
        objeto.dibujar()
    })

  let reqId = requestAnimationFrame(animate);
  requestRef = reqId
};



const inicio = new Audio ("../Assets/Sonidos/music/synthwave-palms/synthwave-palms.mp3")


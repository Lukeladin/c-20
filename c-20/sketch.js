var gato, rato;
var gatoImg, ratoImg, ratoImg2, gatoImg2, gardenImg;

function preload() {
    //carregue as imagens aqui
    gardenImg = loadImage("images/garden.png");
    ratoImg =loadAnimation("images/mouse1.png");
    ratoImg2 =loadAnimation("images/mouse2.png","images/mouse3.png");
    ratoImg3 =loadAnimation("images/mouse4.png");
    gatoImg =loadAnimation("images/cat1.png");
    gatoImg2 =loadAnimation("images/cat2.png","images/cat3.png");
    gatoImg3 =loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    gato =createSprite(870,600);
    gato.addAnimation("gatoSentado", gatoImg);
    gato.scale = 0.2;

    rato =createSprite(200,600);
    rato.addAnimation("ratoSentado", ratoImg);
    rato.scale = 0.2;
}


function draw() {
    background(gardenImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(gato.x - rato.x <(gato.width - rato.width)/2){
        gato.addAnimation("gatoFeliz",gatoImg3);
        gato.changeAnimation("gatoFeliz");
        gato.velocityX =0;
        rato.addAnimation("ratoFeliz",ratoImg3);
        rato.changeAnimation("ratoFeliz");
    
    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
    if(keyCode === LEFT_ARROW){
        rato.addAnimation("ratoProvocado", ratoImg2);
        rato.changeAnimation("ratoProvocado");
        rato.frameDelay = 25;

        gato.velocityX = -5;
        gato.addAnimation("gatoAndando", gatoImg2);
        gato.changeAnimation("gatoAndando");

    }

}

var jerry, tomImg1, tomImg2, tomImg4;
var jerry, jerryImg1, jerryImg2, jerryImg3, jerryImg4;
var bg, bgImg;





function preload() {
    //load the images here
    tomImg1 = loadAnimation("images/cat1.png");
    tomImg2 = loadAnimation("images/cat3.png", "images/cat2.png");
    tomImg3 = loadAnimation("images/cat4.png");
    bgImg = loadImage("images/garden.png");
    jerryImg1 = loadAnimation("images/mouse1.png");
    jerryImg2 = loadAnimation("images/mouse2.png");
    jerryImg3 = loadAnimation("images/mouse3.png");
    jerryImg4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    
    

    tom = createSprite(900,700);
    tom.addAnimation("running", tomImg1);
    tom.scale=0.1;

    jerry = createSprite(200,700);
    jerry.addAnimation("standing", jerryImg1);
    jerry.scale=0.1;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if (tom.isTouching(jerry)){
        tom.velocityX=0;
        tom.addAnimation("lastImage", tomImg3);
        tom.x=300;
        tom.changeAnimation("lastImage");
        jerry.addAnimation()
    }



    drawSprites();
}


function keyPressed(){
if (keyCode === LEFT_ARROW){
    tom.addAnimation("running", tomImg2);
    tom.changeAnimation("running");
    tom.velocityX=-5;
}
  


}

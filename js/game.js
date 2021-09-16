class Game {

constructor(){

}
getState(){

    var gameStateRef= database.ref("gameState")
    gameStateRef.on("value",function(data){
        gameState=data.val()
    })


}

updateState(state){

    database.ref('/').update({
        gameState:state
    })
    
    
    }

start(){
if(gameState===0){
player=new Player()
player.getCount()
form=new Form()
form.display()


car1=createsprite(100,200)

car2=createsprite(300,200)
car3=createsprite(00)
car4=createsprite(100)
cars=[car1,car2,car3,car4];
car1.addImage("car1",car1_img)
car2.addImage("car2",car2_img)
car3.addImage("car3",car3_img)
car4.addImage("car4",car4_img)


}


}


play(){

form.hideallitems()
Player.getPlayerInfo()
image(track,0,-height*5,width,height*6)
var displayPosition=100
var index=0;
var x=175,
var y

for(var i in allName){

    index=index+1;
    x=x+200 ;
    y=displayHeight-allName[i].distance
    cars[index-1].x=x
    cars[index-1].y=y

    if (index===player.index){
        fill("red")
        

        circle(x,y,60)
        camera.position.x=displayWidth/2
        camera.position.y=cars[index-1].y



    }
    
if(keyIsDown(UP_ARROW)){
 player.distance=player.distance+50
    }


    if (player.distance>2000){

        gameState=2;

    }
    
drawSprites()

}

}

end(){

    console.log("Game ENDED")
}


}

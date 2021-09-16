class Form {

constructor(){

     this.input= createInput("ENTER NAME")   

     this.button=createButton("Play")
     this.greeting= createElement("h2")

     this.reset=createButton("reset")


}


hideallitems(){

  this.input.hide()
  
  this.button.hide()
  this.greeting.hide()

  
}


display(){

var title= createElement("h1");

title.html("multiplayer car racer game")


title.position(displayWidth/2-115,100)

    

this.input.position(displayWidth/2,displayHeight/2-120)

this.reset.position(displayWidth-100,50)

this.button.position(displayWidth/2,displayHeight/2-50)

this.button.mousePressed(()=>{

    this.input.hide();
    this.button.hide();
    player.name=this.input.value();

    playerCount=playerCount+1;

    player.update()

    player.updateCount(playerCount)


this.greeting.html("Hello"+player.name)
this.greeting.position(displyWidth/2,displayHeight/2)

})

this.reset.mousePressed(()=>{
player.updateCount(0)
game.update(0)
})

}






}
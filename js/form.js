class Form{

constructor(){
    this.input  = createInput("Enter Name");
    this.button = createButton("Press to Start!!!");
    this.greeting = createElement("h3")
}

hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-20, 0);

    this.input.position(displayWidth/2-50, displayHeight/2);
    this.button.position(displayWidth/2-10,displayHeight/2+50);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("The Game is About to Start, keep Waiting!! " )
      this.greeting.position(displayWidth/2-50, displayHeight/2);
    });

  }
}
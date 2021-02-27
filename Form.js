class Form{
constructor(){

}
display(){
 var title = createElement('h2');
 title.html("CAR RACING GAME");
 title.position(150,100);
 var input = createInput("NAME");
 var button = createButton('PLAY');
 var greeting = createElement('h3');
 input.position(150,160);
 button.position(250,200);
 button.mousePressed(function(){
input.hide();
button.hide();
var name=input.value();
playerCount+=1;
player.update(name);
player.updateCount(playerCount);
greeting.html("WELCOME " + name);
greeting.position(130,160);
 });   
}
}
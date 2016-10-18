module scenes {
    export class Play extends objects.Scene {
 private bank_bg : createjs.Bitmap;
       private rober : createjs.Bitmap;
   
      private _enemy : objects.Enemy;

   private _scorelabel : objects.Label;
 private tinmerlabel : objects.Label;


             private _timer : number = 0;
           

        constructor() {
            super();
            this.start();
        }

        public start() : void {

   this.bank_bg = new createjs.Bitmap(assets.getResult("bank_BG"));
 //  this.rober = new createjs.Bitmap(assets.getResult("rober"));
  this._scorelabel = new objects.Label(score.toString(), "80px Consolar", "#ffffff ",config.Screen.CENTER_X - 350, config.Screen.CENTER_Y - 250);
        
 // this.tinmerlabel = new objects.Label(this._timer.toString(), "80px Consolar", "#ffffff ",config.Screen.CENTER_X - 350, config.Screen.CENTER_Y + 250);
 
         stage.enableMouseOver();
          stage.cursor = "enemy";

           
         this.addChild(this.bank_bg);
  this.addChild(this._scorelabel);
this.addChild(this.tinmerlabel);


        this._enemy = new objects.Enemy("enemy",5);

        this._enemy.on("click",this._onEnemyClick, this)
        this.addChild(this._enemy);

            stage.addChild(this);

        }

        public update() : void {

  this._timer += createjs.Ticker.interval;

console.log(this._timer);
/*
  this.removeChild(this.tinmerlabel);
 this.tinmerlabel = new objects.Label(this._timer.toString(), "80px Consolar", "#ffffff ",config.Screen.CENTER_X - 350, config.Screen.CENTER_Y +250);
   this.addChild(this.tinmerlabel);

*/

if(this._timer >= 10000){
/*this._timer =0;*/
    scene = config.Scene.MENU;
             changeScene();
        

console.log(this._timer);
}


    console.log(this._timer);


        }

        private _onEnemyClick(event : createjs.MouseEvent) : void {
   console.log("PRINT");
         
this._enemy.shot();
      if(this._enemy.dead) {
               currentScene.removeChild(this._enemy);
     
var x = (Math.random()* 6*100) + 1 ;
var y = (Math.random()* 6*100) + 1 ;
var life = (Math.random()* 5) + 1 ;
  score = score + 1;
        this._enemy = new objects.Enemy("enemy",life);
  this._enemy.on("click",this._onEnemyClick, this)
      
 this.addChild(this._enemy);

 this._enemy.x = x;
this._enemy.y = y;
  this.removeChild(this._scorelabel);
 
 this._scorelabel = new objects.Label(score.toString(), "80px Consolar", "#ffffff ",config.Screen.CENTER_X - 350, config.Screen.CENTER_Y - 250);
   this.addChild(this._scorelabel);

   }

        
    }}
    
}
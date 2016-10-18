module scenes {
    export class Play extends objects.Scene {
 private bank_bg : createjs.Bitmap;
       private rober : createjs.Bitmap;
   
      private _enemy : objects.Enemy;

   private _scorelabel : objects.Label;


             private _timer : number = 0;
           

        constructor() {
            super();
            this.start();
        }

        public start() : void {

   this.bank_bg = new createjs.Bitmap(assets.getResult("bank_BG"));
 //  this.rober = new createjs.Bitmap(assets.getResult("rober"));
  this._scorelabel = new objects.Label(score.toString(), "80px Consolar", "#ffffff ",config.Screen.CENTER_X - 180, config.Screen.CENTER_Y - 50);
        

         stage.enableMouseOver();
          stage.cursor = "enemy";

           
         this.addChild(this.bank_bg);
  this.addChild(this._scorelabel);


        this._enemy = new objects.Enemy("enemy",5);

        this._enemy.on("click",this._onEnemyClick, this)
        this.addChild(this._enemy);

            stage.addChild(this);

        }

        public update() : void {

  this._timer += createjs.Ticker.interval;

console.log(this._timer);
if(this._timer >= 1000){
this._timer =0;


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
var life = (Math.random()* 2) + 1 ;
  score = score + 1;
        this._enemy = new objects.Enemy("enemy",life);
  this._enemy.on("click",this._onEnemyClick, this)
      
 this.addChild(this._enemy);

 this._enemy.x = x;
this._enemy.y = y;
  this.removeChild(this._scorelabel);
 
 this._scorelabel = new objects.Label(score.toString(), "80px Consolar", "#ffffff ",config.Screen.CENTER_X - 180, config.Screen.CENTER_Y - 50);
   this.addChild(this._scorelabel);

   }

        
    }}
    
}
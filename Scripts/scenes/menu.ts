/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _playBtn : objects.Button;

         private _menuBG : createjs.Bitmap;
       
        // Menu Class Contructor
        constructor() {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");
            
  this._menuBG = new createjs.Bitmap(assets.getResult("bank_BG1"));

//  constructor(color: string, offsetX: number, offsetY: number, blur: number);
  this._menuBG.shadow = new createjs.Shadow(" ", 0, 0, 0.1);
this._menuBG.shadow.blur =500;
 
              this.addChildAt(this._menuBG, 0);
  

 //

            this._playBtn = new objects.Button("PlayBtn", config.Screen.CENTER_X, config.Screen.CENTER_Y + 150);
            this.addChild(this._playBtn);
            this._playBtn.on("click", this._playBtnClick, this);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {
        }

        private _playBtnClick(event : createjs.MouseEvent) {
            console.log("PRINT");
            scene = config.Scene.GAME;
            changeScene();
        }
    }
}
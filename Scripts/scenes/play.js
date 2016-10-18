var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.call(this);
            this._timer = 0;
            this.start();
        }
        Play.prototype.start = function () {
            this.bank_bg = new createjs.Bitmap(assets.getResult("bank_BG"));
            //  this.rober = new createjs.Bitmap(assets.getResult("rober"));
            this._scorelabel = new objects.Label(score.toString(), "80px Consolar", "#ffffff ", config.Screen.CENTER_X - 350, config.Screen.CENTER_Y - 250);
            // this.tinmerlabel = new objects.Label(this._timer.toString(), "80px Consolar", "#ffffff ",config.Screen.CENTER_X - 350, config.Screen.CENTER_Y + 250);
            stage.enableMouseOver();
            stage.cursor = "enemy";
            this.addChild(this.bank_bg);
            this.addChild(this._scorelabel);
            this.addChild(this.tinmerlabel);
            this._enemy = new objects.Enemy("enemy", 5);
            this._enemy.on("click", this._onEnemyClick, this);
            this.addChild(this._enemy);
            stage.addChild(this);
        };
        Play.prototype.update = function () {
            this._timer += createjs.Ticker.interval;
            console.log(this._timer);
            /*
              this.removeChild(this.tinmerlabel);
             this.tinmerlabel = new objects.Label(this._timer.toString(), "80px Consolar", "#ffffff ",config.Screen.CENTER_X - 350, config.Screen.CENTER_Y +250);
               this.addChild(this.tinmerlabel);
            
            */
            if (this._timer >= 10000) {
                /*this._timer =0;*/
                scene = config.Scene.MENU;
                changeScene();
                console.log(this._timer);
            }
            console.log(this._timer);
        };
        Play.prototype._onEnemyClick = function (event) {
            console.log("PRINT");
            this._enemy.shot();
            if (this._enemy.dead) {
                currentScene.removeChild(this._enemy);
                var x = (Math.random() * 6 * 100) + 1;
                var y = (Math.random() * 6 * 100) + 1;
                var life = (Math.random() * 5) + 1;
                score = score + 1;
                this._enemy = new objects.Enemy("enemy", life);
                this._enemy.on("click", this._onEnemyClick, this);
                this.addChild(this._enemy);
                this._enemy.x = x;
                this._enemy.y = y;
                this.removeChild(this._scorelabel);
                this._scorelabel = new objects.Label(score.toString(), "80px Consolar", "#ffffff ", config.Screen.CENTER_X - 350, config.Screen.CENTER_Y - 250);
                this.addChild(this._scorelabel);
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map
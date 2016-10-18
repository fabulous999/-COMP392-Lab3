/// <reference path = "_reference.ts" />

// Global Variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var enemyAtlas : createjs.SpriteSheet;
var spriteSheetLoader : createjs.SpriteSheetLoader;

var currentScene : objects.Scene;
var scene: number;



var score: number = 0;
// Preload Assets required
var assetData:objects.Asset[] = [
    {id: "PlayBtn", src: "../../Assets/images/sack.png"},
    {id: "enemy", src: "../../Assets/images/enemy.png"},
    {id: "player", src: "../../Assets/images/crosshair.png"},
    {id: "bank_BG1", src: "../../Assets/images/bank1.png"},
    {id: "bank_BG", src: "../../Assets/images/bank.png"}
    
];

function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    stage.cursor = 'player';
    
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);
    



    let enemyAtlass = {
        "images": [
            assets.getResult("enemy")
        ],

        "frames": [
            [1, 1, 180, 180, 0, 0, 0],
    ],
"animations": {
            "enemy": { "frames": [0] },
},
             "texturepacker": [
                "SmartUpdateHash: $TexturePacker:SmartUpdate:013a2fc3dc6ba39276db3e6758d1ddbd:84789f29f2d01b3ea1c113a3b2d1bfdc:e696b1a5c9e543dbf26d7c8d29a6d04f$",
                "Created with TexturePacker (https://www.codeandweb.com/texturepacker) for EaselJS"
        ] 
        }

    

   enemyAtlas = new createjs.SpriteSheet(enemyAtlass);



    scene = config.Scene.MENU;
    changeScene();
}

function gameLoop(event: createjs.Event): void {
    // Update whatever scene is currently active.
    currentScene.update();
    stage.update();
}

function changeScene() : void {
    
    // Simple state machine pattern to define scene swapping.
    switch(scene)
    {
        case config.Scene.MENU :
            stage.removeAllChildren();
            currentScene = new scenes.Menu();;
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME :
            stage.removeAllChildren();
            currentScene = new scenes.Play();
            console.log("Starting SHOOTER scene");
            break;
    }
    
}
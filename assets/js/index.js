//Test if javascript file is reached or not
console.log("memory.js file reached");

//Array with tiles
const tiles_array = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tile9", "tile10", 
                     "tile11", "tile12", "tile13", "tile14", "tile15", "tile16", "tile17", "tile18", "tile20", "tile20"];

//The colors used
const color_array = ["red", "blue", "yellow", "purple", "black", "grey", "pink", "cyan", "orange", "brown"];

//arrays will hold which tiles are the propriate color

let red_array = [],
    blue_array = [],
    yellow_array = [],
    purple_array = [],
    black_array = [],
    grey_array = [],
    pink_array = [],
    cyan_array = [],
    orange_array = [],
    brown_array = [];

//The last tile color clicked
let last_color = "";

//Count the amoun of clicks made by the user when clicking on tiles
let click = 0;

//Store the tile clicked on this array
let clicked_tiles = [];

//Bool if the same tile is clicked or not
let dupicate_click = false;

//Game start variable true or false, true = game is active
let game_start = false;

//Adding event listener for tiles and buttons

//The start game button eventListener (click)
document.getElementById("start").addEventListener("click", start_game);

//The start game button eventListener (click)
document.getElementById("reset").addEventListener("click", reset_game);

//ID tile1 eventListener (click)
document.getElementById("tile1").addEventListener("click", function() {
    tiles("tile1");
});

document.getElementById("tile2").addEventListener("click", function() {
    tiles("tile2");
});

document.getElementById("tile3").addEventListener("click", function() {
    tiles("tile3");
});


document.getElementById("tile4").addEventListener("click", function() {
    tiles("tile4");
});

document.getElementById("tile5").addEventListener("click", function() {
    tiles("tile5");
});

document.getElementById("tile6").addEventListener("click", function() {
    tiles("tile6");
});

document.getElementById("tile7").addEventListener("click", function() {
    tiles("tile7");
});

document.getElementById("tile8").addEventListener("click", function() {
    tiles("tile8");
});

document.getElementById("tile9").addEventListener("click", function() {
    tiles("tile9");
});

document.getElementById("tile10").addEventListener("click", function() {
    tiles("tile10");
});

document.getElementById("tile11").addEventListener("click", function() {
    tiles("tile11");
});

document.getElementById("tile12").addEventListener("click", function() {
    tiles("tile12");
});

document.getElementById("tile13").addEventListener("click", function() {
    tiles("tile13");
});

document.getElementById("tile14").addEventListener("click", function() {
    tiles("tile14");
});

document.getElementById("tile15").addEventListener("click", function() {
    tiles("tile15");
});

document.getElementById("tile16").addEventListener("click", function() {
    tiles("tile16");
});

document.getElementById("tile17").addEventListener("click", function() {
    tiles("tile18");
});

document.getElementById("tile19").addEventListener("click", function() {
    tiles("tile19");
});

document.getElementById("tile20").addEventListener("click", function() {
    tiles("tile20");
});

//Resetting variables that should be reset if you click play or reset game. A shallow variable reset
function reset_var_shallow(){
    //Reseting the last color clicked, amount of clicks, clicked tiles, duplicate tiles variable
    last_color = "",
        click = 0,
        clickled_tiles = [],
        dupicate_click = false;

    //start game, if variable is true them you can play the game
    game_start = true;

    for (var j = 1; j < 21;j++){
        var element = "tile" + j;
        document.getElementById(element).style.backgroundColor = "green";
    }
}

//Resetting variables associated with the randomization of tiles placement. This is a deep reset
function resert_var_deep(){
    //Used in the for loop checking how many of each color is chosen
    var red = 0,
        blue = 0,
        yellow = 0,
        purple = 0,
        black = 0,
        grey = 0,
        pink = 0,
        cyan = 0,
        orange = 0,
        brown = 0;

    //Empty the arrays to store new tiles
    red_array = [],
        blue_array = [],
        yellow_array = [],
        purple_array = [],
        black_array = [],
        grey_array = [],
        pink_array = [],
        cyan_array = [],
        orange_array = [],
        brown_array = [];

    for (var i = o; i <20; 1++){
        var nmbr = Math.floor(Math.random() *5);

        console.log(nmbr);
    }
        
}
//Onload function, getting the game ready when the web page has loaded
window.onload = function(){
    this.resert_var_deep();
}
//Clicking play you can try again, tiles have same placement
function start_game(){
    //This function is used to start_game and reset_game
    reset_var_shallow();

    //console.log("Game has started!");
}

//Completly resets the game, changing placement of tiles
function reset_game(){
    //This function is used to start_reset and reset_game
    reset_var_shallow();
    
    console.log("Game has reset!");
}

//Main functionally of the game
function tiles(tile){
    //If game is active
    if (game_start) {
        console.log("The game has started");

        //Checking the array if the tile clicked has been clicked previously
        for (var i = 0; i <clicked_tiles.length; i++){
            if (tile == clicked_tiles[i]){
                dupicate_click = true;
                console.log("Duplicate tile clicked");
        }
    }

    //if tile clicked has bot been clicked previouslt during the game
    if (duplicate_click){
        click_tiles.push(tile);
    }

    //Reseting the duplicate click
    duplicate_click = false;

}
    //if game is not active
    else {
        console.log("The game has not started yet");
    }
}

//Test if javascript file is reached or not
console.log("assets/js/index.js file reached.");

//Array with tiles
const tiles_array = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tile9", "tile10", 
                     "tile11", "tile12", "tile13", "tile14", "tile15", "tile16", "tile17", "tile18", "tile20", 
                     "tile20"];

//The colors used
const color_array = ["red", "blue", "yellow", "purple", "black", "grey", "pink", "cyan", "orange", "brown"];

//arrays will hold which tiles are the propriate color

var red_array = [],
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
var last_color = "";

//Count the amoun of clicks made by the user when clicking on tiles
var click = 0;

//Store the tile clicked on this array
var clicked_tiles = [];

//Bool if the same tile is clicked or not
var duplicate_click = false;

//Gamestart variable true or false, true = game is active
var game_start = false;

//Adding event listener for tiles and buttons

//The start game button eventListener (click)
document.getElementById("start").addEventListener("click", start_game);

//The reset game button eventListener (click)
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
    tiles("tile17");
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
        clicked_tiles = [],
        dupicate_click = false;

    //start game, if variable is true them you can play the game
    game_start = true;

    for (var j = 1; j < 21;j++){
        var element = "tile" + j;
        document.getElementById(element).style.backgroundColor = "green";
    }
}

//Resetting variables associated with the randomization of tiles placement. This is a deep reset
function reset_var_deep(){
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

    for (var i = 0; i < 20; i++){
        var nmbr = Math.floor(Math.random() * 10);

        if (nmbr == 0) {
            if (red < 2){
                red++;
                red_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
        else if (nmbr === 1){
            if (blue < 2){
                blue++;
                blue_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
        else if (nmbr === 2){
            if (yellow < 2){
                yellow++;
                yellow_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
        else if (nmbr === 3){
            if (purple < 2){
                purple++;
                purple_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
        else if (nmbr === 4){
            if (black < 2){
                black++;
                black_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
        else if (nmbr === 5){
            if (grey < 2){
                grey++;
                grey_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
        else if (nmbr === 6){
            if (pink < 2){
                pink++;
                pink_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
        else if (nmbr === 7){
            if (cyan < 2){
                cyan++;
                cyan_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
        else if (nmbr === 8){
            if (orange < 2){
                orange++;
                orange_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
        else if (nmbr === 9){
            if (brown < 2){
                brown++;
                brown_array.push(tiles_array[i]);
            }
            else {
                i--;
            }
        }
    }
}

//Onload function, getting the game ready when the web page has loaded
window.onload = function(){
    reset_var_deep();

    console.log("onload function is complete");
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

    reset_var_deep();
    
    console.log("Game has reset!");
}

//Main functionally of the game
function tiles(tile){
    //If game is active
    if (game_start) {
        console.log("The game has started");

        //Checking the array if the tile clicked has been clicked previously
        for (var i = 0; i < clicked_tiles.length; i++){
            if (tile == clicked_tiles[i]){
                dupicate_click = true;
                console.log("Duplicate tile clicked");
        }
    }

    //if tile clicked has bot been clicked previouslt during the game
        if (!duplicate_click){
            clicked_tiles.push(tile);

            // if the tile clicked is red
            if (tile == red_array[0] || tile == red_array [1]) {
                //checking if a tile was previously clicked
                if (last_color.lengh > 2){
                    //if the previous color is matching (red)
                    if (last_color == "red") {
                        document.getElementById(tile).style.backgroundColor = color_array[0];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[0];
                        game_start = false;
                        setTimeout(function() {
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[0];
                    last_color = "red";
                }
            }

            // if the tile clicked is blue
            else if (tile == blue_array[0] || tile == blue_array [1]) {
                //checking if a tile was previously clicked
                if (last_color.lengh > 2){
                    //if the previous color is matching (blue)
                    if (last_color == "blue") {
                        document.getElementById(tile).style.backgroundColor = color_array[1];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[1];
                        game_start = false;
                        setTimeout(function() {
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[1];
                    last_color = "blue";
                }
            }

            // if the tile clicked is yellow
            else if (tile == yellow_array[0] || tile == yellow_array [1]) {
                                if (last_color.lengh > 2){
                    //if the previous color is matching (yellow)
                    if (last_color == "yellow") {
                        document.getElementById(tile).style.backgroundColor = color_array[2];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[2];
                        game_start = false;
                        setTimeout(function() {
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[2];
                    last_color = "yellow";
                }
            }

            // if the tile clicked is purple
            else if (tile == purple_array[0] || tile == purple_array [1]) {
                                if (last_color.lengh > 2){
                    //if the previous color is matching (purple)
                    if (last_color == "purple") {
                        document.getElementById(tile).style.backgroundColor = color_array[3];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[3];
                        game_start = false;
                        setTimeout(function() {
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[3];
                    last_color = "purple";
                }
            }

            // if the tile clicked is black
            else if (tile == black_array[0] || tile == black_array [1]) {
                                if (last_color.lengh > 2){
                    //if the previous color is matching (black)
                    if (last_color == "black") {
                        document.getElementById(tile).style.backgroundColor = color_array[4];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[4];
                        game_start = false;
                        setTimeout(function() {
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[4];
                    last_color = "black";
                }
            }

            // if the tile clicked is black
            else if (tile == grey_array[0] || tile == grey_array [1]) {
                                if (last_color.lengh > 2){
                    //if the previous color is matching (grey)
                    if (last_color == "grey") {
                        document.getElementById(tile).style.backgroundColor = color_array[5];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[5];
                        game_start = false;
                        setTimeout(function() {
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[5];
                    last_color = "grey";
                }
            }

            // if the tile clicked is orange
            else if (tile == orange_array[0] || tile == orange_array [1]) {
                                if (last_color.lengh > 2){
                    //if the previous color is matching (orange)
                    if (last_color == "orange") {
                        document.getElementById(tile).style.backgroundColor = color_array[6];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[6];
                        game_start = false;
                        setTimeout(function() {
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[6];
                    last_color = "orange";
                }
            }

            // if the tile clicked is pink
            else if (tile == pink_array[0] || tile == pink_array [1]) {
                                if (last_color.lengh > 2){
                    //if the previous color is matching (red)
                    if (last_color == "pink") {
                        document.getElementById(tile).style.backgroundColor = color_array[7];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[7];
                        game_start = false;
                        setTimeout(function() {
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[7];
                    last_color = "pink";
                }
            }

            // if the tile clicked is cyan
            else if (tile == cyan_array[0] || tile == cyan_array [1]) {
                                if (last_color.lengh > 2){
                    //if the previous color is matching (cyan)
                    if (last_color == "cyan") {
                        document.getElementById(tile).style.backgroundColor = color_array[8];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[8];
                        game_start = false;
                        setTimeout(function() {
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[8];
                    last_color = "cyan";
                }
            }

            // if the tile clicked is brown
            else if (tile == brown_array[0] || tile == brown_array [1]) {
                                if (last_color.lengh > 2){
                    //if the previous color is matching (brown)
                    if (last_color == "brown") {
                        document.getElementById(tile).style.backgroundColor = color_array[1];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = color_array[1];
                        game_start = false;
                        setTimeout(function() {
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = color_array[1];
                    last_color = "brown";
                }
            }
        }

    //Reseting the duplicate click
        duplicate_click = false;
    }
    //if game is not active
    else {
        console.log("The game has not started yet");
    }
}

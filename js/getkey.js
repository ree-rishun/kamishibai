document.onkeydown = keydown ; // イベント検出
document.onkeyup   = keyup ; // イベント検出

var x  = 100 ; // 表示する座標
var y  = 100 ; // 表示する座標
var pv =   10 ; // 1回の移動量

// キーボードのフラグ　（1 : 押されている / 0 : 離されている）
var left  = 0 ;
var right = 0 ;
var up = 0 ;
var down  = 0 ;
var space = 0 ;


/********** キーボードのイベント（押された） **********/

function keydown(event) // 押されたキーのフラグを　１　にする
{
    if(event.which == 37 || event.which == 38) //left key || up key
    {
        console.log("left or top");
    }
    if(event.which == 39 || event.which == 40) //right key || down key
    {
        console.log("right or down");
    }

}

/********** キーボードのイベント（離された） **********/

function keyup(event) // 離されたキーのフラグを　０　にする
{
    if(event.which == 37) //left key
    {
        left = 0;
    }
    if(event.which == 38) //up key
    {
        up = 0;
    }
    if(event.which == 39) //right key
    {
        right = 0;
    }
    if(event.which == 40) //down key
    {
        down = 0;
    }
}
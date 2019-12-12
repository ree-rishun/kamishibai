document.onkeydown = keydown ; // イベント検出


// スライドページ
var now_page = 0;   // 現在のページ
var last_page = 3;  // 総ページ数


/********** キーボードのイベント（押された） **********/
function keydown(event) // 押されたキーのフラグを　１　にする
{
    if(event.which == 37 || event.which == 38) //left key || up key
    {
        console.log("left or top");
        if(now_page != 0)
        {
            now_page--;
            document.getElementById(String(now_page)).style.marginLeft = '0';
            document.getElementById(String(now_page)).style.opacity = '1';
            console.log("opacity:1");
        }
    }
    if(event.which == 39 || event.which == 40) //right key || down key
    {
        console.log("right or down");
        if(now_page != last_page)
        {
            document.getElementById(String(now_page)).style.opacity = '0';
            document.getElementById(String(now_page)).style.marginLeft = '20%';
            console.log("opacity:0");
            now_page++;
        }
    }
}x

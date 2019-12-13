document.onkeydown = keydown ; // イベント検出


// スライドページ
var now_page = 0;   // 現在のページ
let slide_page = document.getElementsByTagName("slide-page");
var last_page = slide_page.length - 1;  // 総ページ数

console.log(slide_page.length);

// animation list
// var animeList = new Array('fadeOut','slideB','slideR','slideL');

// キーボードが押された
function keydown(event)
{
    if(event.which == 39 || event.which == 40 || event.which == 13) //right key || down key
    {
        console.log("right or down");
        if(now_page != last_page)
        {
            console.log("opacity:0");
            slide_anime(document.getElementById(String(now_page)).getAttribute("data-anime"));
            now_page++;
        }
    }else if(event.which == 37 || event.which == 38 || event.which == 8) //left key || up key
    {
        console.log("left or top");
        if(now_page != 0)
        {
            now_page--;
            back_anime(document.getElementById(String(now_page)).getAttribute("data-anime"));
            console.log("opacity:1");
        }
    }
}

function slide_anime(animeMode)
{
    switch (animeMode) {
        case "fadeOut" : // slide from the bottom
            document.getElementById(String(now_page)).style.opacity = '0';
            break;
        case "slideFR" : // slide from the right / fade out
            document.getElementById(String(now_page)).style.opacity = '0';
            document.getElementById(String(now_page)).style.marginLeft = '40%';
            break;
        case "slideFL" : // slide from the left / fade out
            document.getElementById(String(now_page)).style.opacity = '0';
            document.getElementById(String(now_page)).style.marginLeft = '-40%';
            break;
        case "slideFT" : // slide from the top / fade out
            document.getElementById(String(now_page)).style.opacity = '0';
            document.getElementById(String(now_page)).style.marginTop = '-40%';
            break;
        case "slideFB" : // slide from the bottom / fade out
            document.getElementById(String(now_page)).style.opacity = '0';
            document.getElementById(String(now_page)).style.marginTop = '40%';
            break;
        case "slideR" : // slide from the right
            document.getElementById(String(now_page)).style.marginLeft = '100%';
            break;
        case "slideL" : // slide from the left
            document.getElementById(String(now_page)).style.marginLeft = '-100%';
            break;
        case "slideT" : // slide from the top
            document.getElementById(String(now_page)).style.marginTop = '-100%';
            break;
        case "slideB" : // slide from the bottom
            document.getElementById(String(now_page)).style.marginTop = '100%';
            break;
        default:
            document.getElementById(String(now_page)).style.opacity = '0';
            break;
    }
}

function back_anime(animeMode)
{
    switch (animeMode) {
        case "fadeOut" : // slide from the bottom
            document.getElementById(String(now_page)).style.opacity = '1';
            break;
        case "slideFR" : // slide from the right / fade out
            document.getElementById(String(now_page)).style.marginLeft = '0';
            document.getElementById(String(now_page)).style.opacity = '1';
            break;
        case "slideFL" : // slide from the left / fade out
            document.getElementById(String(now_page)).style.marginLeft = '0';
            document.getElementById(String(now_page)).style.opacity = '1';
            break;
        case "slideFT" : // slide from the top / fade out
            document.getElementById(String(now_page)).style.marginTop = '0';
            document.getElementById(String(now_page)).style.opacity = '1';
            break;
        case "slideFB" : // slide from the bottom / fade out
            document.getElementById(String(now_page)).style.marginTop = '0';
            document.getElementById(String(now_page)).style.opacity = '1';
            break;
        case "slideR" : // slide from the right
            document.getElementById(String(now_page)).style.marginLeft = '0';
            break;
        case "slideL" : // slide from the left
            document.getElementById(String(now_page)).style.marginLeft = '0';
            break;
        case "slideT" : // slide from the top
            document.getElementById(String(now_page)).style.marginTop = '0';
            break;
        case "slideB" : // slide from the bottom
            document.getElementById(String(now_page)).style.marginTop = '0';
            break;
        default:
            document.getElementById(String(now_page)).style.opacity = '1';
            break;
    }
}

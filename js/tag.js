class CustomTag extends HTMLElement{
    constructor(){
        super();
    }
}
customElements.define("slide-page",CustomTag);

window.onload = onLoad;

function onLoad() {
    for (let i = 0;  i < last_page;  i++) {
        document.getElementById(String(i)).style.zIndex = String(100 - i);
        console.log(document.getElementById(String(i)));
        console.log("load");
    }
}
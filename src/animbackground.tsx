let vid;

// function scroll(){
//     vid.currentTime = screenpos(window.scrollY, document.body.scrollHeight, window.innerHeight);
//     window.requestAnimationFrame(scroll);
// }
function start(){
    vid = document.getElementById("background") as HTMLVideoElement;
}

window.onload = start;

function screenpos(x: number,y: number,z: number) {
    let a = (x / (y-z));
    return (a-.1) * 2;
}

window.addEventListener("scroll", () => 
{
    let f =  screenpos(window.scrollY, document.body.scrollHeight, window.innerHeight);
    vid.currentTime = f;
}
)
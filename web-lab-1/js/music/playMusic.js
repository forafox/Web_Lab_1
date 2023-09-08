// import sound from './error.mp3';


function playMusic(flag){
    console.log(flag);
    if(flag==='true'){
        let audio1 = new Audio('./js/music/spasibo.mp3');
        audio1.play();
    }else{
         let audio2 = new Audio("./js/music/error.mp3");
         audio2.play();
    }
}

document.addEventListener("playMusic",function(event){
    console.log("GOTCHA BITCH!!");
    playMusic(event.flag);
});

console.log("Music event listener added")
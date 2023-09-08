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
    playMusic(event.flag);
});

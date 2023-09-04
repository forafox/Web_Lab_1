const canvas=document.getElementById("canvas");

function draw(){
if(canvas.getContext){
    const ctx=canvas.getContext("2d");
    const size=300;
    canvas.setAttribute("width",size.toString());
    canvas.setAttribute("height",size.toString());
    const r=110;
    
    drawPolygon(ctx,size,r);
    drawAxes(ctx,size);
    //drawing
    
}else{
    //canvas-unsupported code
}
//Прорисовка осей координат

function drawAxes(ctx,size){
    ctx.fillStyle="black";
    ctx.fillRect(0,size/2,size,1);
    ctx.fillRect(size/2,0,1,size);
    // ctx.beginPath(); //Понять
    // ctx.arc(size/2,size/2,3,0,2*Math.PI,false);
    // ctx.fill();
    
}

function drawPolygon(ctx,size,r){
    let totalPoints=12;
    let pointInPixels = size/totalPoints;
    //draw rect
    ctx.fillStyle="green";
    ctx.beginPath();
    ctx.fillRect(size/2,size/2,-r/2,r);
    //draw triangle
    ctx.beginPath();
    ctx.moveTo((size/2),size/2);
    ctx.lineTo(size/2+r,size/2);
    ctx.lineTo(size/2,size/2+r);
    ctx.fill();
    //draw circle
    ctx.beginPath();
    ctx.moveTo(size/2,size/2);
    ctx.arc(size/2,size/2,r,0,3*Math.PI/2,Math.PI);
    ctx.fill()

}
}
let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

let radius = canvas.height / 2;
context.translate(radius, radius);

radius = radius * 0.90;

function drawFace(context, radius){
    context.beginPath();
    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.fillStyle = "#191919";
    context.fill();

    var gradient;
    gradient = context.createRadialGradient(0, 0, radius, 0, 0, 0);
    gradient.addColorStop(0, "#191919");
    gradient.addColorStop(1, "pink");
    context.strokeStyle = gradient;
    context.lineWidth = radius*0.05;
    context.stroke();

    context.beginPath();
    context.arc(0, 0, radius*0.065, 0, 2 * Math.PI);
    context.fillStyle = "white";
    context.fill();
}

function drawNumbers(context, radius){
    var num;
    var angle;

    context.font = radius * 0.17 + "px ariel";

    context.textAlign = "center";
    context.textBaseline = "middle";

    for (let num = 1; num<13;num++){
        angle = num*Math.PI/6;
        context.rotate(angle);
        context.translate(0,-radius*0.85);
        context.rotate(-angle);
       
        context.fillText(num.toString(),0,0)
        context.rotate(angle);
        context.translate(0,radius*0.85);
        context.rotate(-angle);
    }
}

function drawTime(context, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second =  now.getSeconds();
    
    hour=hour%12;
     
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60))
    drawHand(context,hour,radius*0.4,radius*0.04)

    
    minute=(minute*Math.PI/30) + (second*Math.PI/(30*60))
    drawHand(context,minute,radius*0.6,radius*0.04)

    
    second=(second*Math.PI/30)
    drawHand(context,second,radius*0.9,radius*0.01)
}

function drawHand(context,pos,length,width){
    context.beginPath();
    context.lineWidth=width
    context.lineCap="round"

    context.moveTo(0,0)
    context.rotate(pos)
    context.lineTo(0,-length)
    context.stroke()
    context.rotate(-pos)
}



setInterval(drawClock, 1000)

function drawClock(){
    drawFace(context, radius);
    drawNumbers(context, radius);
    drawTime(context, radius);
    drawHand(context, radius);
}
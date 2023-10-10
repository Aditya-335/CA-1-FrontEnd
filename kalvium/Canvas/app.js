const colorPicker=document.querySelector(".js-color-picker")
const lineWidthRange= document.querySelector(".js-line-range")
const lineWidthLabel= document.querySelector(".js-range-value")

const canvas = document.querySelector(".js-paint")
const context = canvas.getContext("2d")


context.lineCap=""


colorPicker.addEventListener("change", (event)=> {
    context.strokeStyle = event.target.value;

})

lineWidthRange.addEventListener("input",function(event){
    const width = event.target.value;
    lineWidthLabel.innerHTML=width;
    context.lineWidth=width;

})

let x=0
let y=0
let ismousePressed=false;

function startDrawing(event){
    ismousePressed=true;
    x=event.offsetX
    y=event.offsetY
}

function stopDrawing(){

    ismousePressed=false;
}

function Drawline(event){
    if(ismousePressed===true){
        const newX = event.offsetX
        const newY = event.offsetY

        context.beginPath()
        context.moveTo(x,y)
        context.lineTo(newX,newY)
        context.stroke()

        x=newX
        y=newY

    }

}

canvas.addEventListener("mousedown",startDrawing);
canvas.addEventListener("mouseup",stopDrawing);
canvas.addEventListener("mousemove",Drawline);
canvas.addEventListener("mouseout", stopDrawing);
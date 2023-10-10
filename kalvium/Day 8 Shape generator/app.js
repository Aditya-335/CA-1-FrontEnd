const button=document.getElementById("button");
let numberInDiv= 1;
let initialvalue= 0;

button.onclick= ()=>{
    let circle=document.getElementById("circle");
    let square=document.getElementById("square");
    let rectangle=document.getElementById("rectangle");
    let n=document.getElementById("number").value;
    let box=document.getElementById("box");

    
    let total =Number(n)+Number(initialvalue);
    for(let i=numberInDiv;i<=total;i++){
        let shape = document.createElement("div");
        shape.innerHTML+=numberInDiv;

        if(circle.checked==true){
            shape.classList.add("circle")
        }
        else if(square.checked==true){
            shape.classList.add("square")
        }
        else if(rectangle.checked==true){
            shape.classList.add("rectangle")
        }
        else{
            document.write("click on the radio button first")
        }
    

        box.appendChild(shape);
        numberInDiv++
    initialvalue=document.getElementById("box").lastElementChild.innerHTML;

    }

}

let bucketlist = [];
let container = document.getElementById("list-container")

function addValues(){
    let listitem = document.getElementById("input-field").value;
    bucketlist.push(listitem);
    printvalues()
}

function remove(index){
    bucketlist.splice(index,1)
    printvalues()

}

function reset(){
   bucketlist = [];
   printvalues();
}

function printvalues(){
    container.innerHTML = "";

    for (let i=0;i<bucketlist.length;i++)
    {
        let li = document.createElement("li");
        li.innerHTML = bucketlist[i]+'<span> <img class="checked" src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png"/></span>'
        li.classList.add("list");
        li.onclick = ()=>{
           remove(i)
        }
        container.appendChild(li)
    }

}
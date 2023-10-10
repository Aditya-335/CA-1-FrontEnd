const $climate = document.getElementById("climate")
 const $consumption = document.getElementById("consumption")
 const $resources = document.getElementById("resources")
 const $people = document.getElementById("people")

 $climate.onclick = () => {
    document.body.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')";
    document.body.style.backgroundsize= "100% 100%"
 

 document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";

 $climate.style.backgroundColor="#2F80ED";
 $consumption.style.backgroundColor = "transparent";
 $people.style.backgroundColor = "transparent";
 $resources.style.backgroundColor = "transparent";

 document.getElementById('save').innerHTML= "Do Your Bit! Save Trees, use renewable energy sources and prefer to travel green";
}

$consumption.onclick = () => {
    document.body.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')";
    document.body.style.backgroundsize= "100% 100%"
    
    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    
    $climate.style.backgroundColor="transparent";
    $consumption.style.backgroundColor = "#47D147";
    $people.style.backgroundColor = "transparent";
    $resources.style.backgroundColor = "transparent";

    document.getElementById('save').innerHTML= "Do Your Bit! Save Trees, use renewable energy sources and prefer to travel green";
}
$people.onclick = () => {
    document.body.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')";
    document.body.style.backgroundsize= "100% 100%"

    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";
    
    $climate.style.backgroundColor="transparent";
    $consumption.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "#D27979";
    $resources.style.backgroundColor = "transparent";

    document.getElementById('save').innerHTML= "Do Your Bit! Save Trees, use renewable energy sources and prefer to travel green";
}

$resources.onclick = () => {
    document.body.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')";
    document.body.style.backgroundsize= "100% 100%"

    document.getElementById("frame").src = "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20";        
    
    $climate.style.backgroundColor="transparent";
    $consumption.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
    $resources.style.backgroundColor = "#66B3FF";

     document.getElementById('save').innerHTML= "Do Your Bit! Save Trees, use renewable energy sources and prefer to travel green";
    }
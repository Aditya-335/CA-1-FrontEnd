document.getElementById("Detect Disease").addEventListener("click", function () {
    
    var symptom1 = document.getElementById("symptom 1").value;
    var symptom2 = document.getElementById("symptom 2").value;
    var symptom3 = document.getElementById("symptom 3").value;

    
    var disease = ""

    
    if (symptom1 === "" || symptom2 === "" || symptom3 === "") {
        alert("Please select a symptom for each option.");
    } else {
        
        if (
            (symptom1 === "stomach_pain" && symptom2 ==="cough" &&symptom3 === "fever_and_chills") ||
            (symptom1=== "cough" && symptom2 ==="fever_and_chills" && symptom3 === "stomach_pain")||
            (symptom1=== "fever_and_chills" && symptom2==="stomach_pain" && symptom3==="cough")
        ) {
            disease = "You may have a common cold.";
        } else if (
            (symptom1==="stomach_pain"&& symptom2==="fever_and_chills"&& symptom3==="Breathing problems")||
            (symptom1==="fever_and_chills"&& symptom2==="Breathing Problems"&& symptom3==="stomach_pain")||
            (symptom1==="Breathing problems"&& symptom2==="stomach_pain"&& symptom3==="fever_and_chills")
        ) {
            disease = "You may have the flu.";
        } else {
            disease = "You may have covid 19";
        }

        
        alert(disease);
    }
});






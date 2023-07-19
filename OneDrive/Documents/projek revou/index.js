function Countbmi() {
    var height = document.getElementById("height").value/100;
    var weight = document.getElementById("weight").value;
    var bmi = weight / (height * height);
    document.getElementById("result").innerHTML = bmi.toFixed(1);
    if (bmi < 18.5) {
        document.getElementById("type-bmi").innerHTML = "(Kekurangan Berat Badan)";
        document.getElementById("explain-bmi").innerHTML = "Anda memiliki berat badan yang kurang.";
      
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("type-bmi").innerHTML = "(Ideal)";
        document.getElementById("explain-bmi").innerHTML = "Anda memiliki berat badan yang ideal.";
       
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById("type-bmi").innerHTML = "(Kelebihan Berat Badan)";
        document.getElementById("explain-bmi").innerHTML = "Anda memiliki berat badan berlebih.";
       
    }
    else if (bmi >= 30) {
        document.getElementById("type-bmi").innerHTML = "(Obesitas)";
        document.getElementById("explain-bmi").innerHTML = "Anda mempunyai resiko Obesitas.";
        
    }
    
    
}

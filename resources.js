
function calculate_bmi(){

    var height = document.getElementById("height").value;
    var height_inches = document.getElementById("height_inches").value;
    var weight = document.getElementById("weight").value;

    var height_m = (height * 0.3048) + ((parseFloat(height_inches/12)) * 0.3048); 
    var weight_kg = (weight * 0.453592);

    var bmi = (weight_kg / ((height_m)**2));

    bmi = bmi.toFixed(2);

    const bmicontainer = document.getElementById('bmi-container');
    bmicontainer.innerHTML = bmi;
}

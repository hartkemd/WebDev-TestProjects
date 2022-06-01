var weight = prompt("Weight:");
var height = prompt("Height:");

bmiCalculator(weight, height);

function bmiCalculator (weight, height) {
    var bmi = weight / (height * height);
    bmi = Math.round(bmi);
    
    var interpretation = "";
    
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are normal weight.";
    }
    else if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}
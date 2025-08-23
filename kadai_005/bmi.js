let weight = 68;
let height_cm = 170;

let height_m =height_cm / 100

function calculateBMI(weight,height) {
    return weight / (height * height)
}

let bmi = calculateBMI(weight, height_m);

console.log(bmi); 
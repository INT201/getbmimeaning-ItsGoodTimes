const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //code here
  return weight / (height*height)
}
function getBMIMeaning(weight, height) {
  //code here
  let BMI = calculateBMI(weight,height)
  return BMI < 18.5 ? 'Underweight' : BMI > 25 ? 'Overweight' : 'Normal weight'
}
module.exports = getBMIMeaning

// Conditional
// ? :

// x = a ? true : else
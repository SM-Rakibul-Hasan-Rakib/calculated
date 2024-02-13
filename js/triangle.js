//**
//* object :get base, height of a triangle. Calculate the area by usinng the peovided formula and then display the area.
//*1. step-one: get base value of the triangle
//*2. step-two: added an id in the base input field
//*2. step-three: use getElementId to access the input field
//*4. step-four: get value from the input field..(value is string now)
//*/*5. step-five:convert the value to a number.use parseFloat

function calculateTriangleArea() {
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  // console.log(triangleBase);

  //get triangle height value
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  console.log(height);

  //  calculate triangle area
  const area = 0.5 * base * height;
  console.log("area of the triangle is:", area);

  //display tryangle area
  const tringAngleSpan = document.getElementById("triangle-area");
  tringAngleSpan.innerText = area;
}

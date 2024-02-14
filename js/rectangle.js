function calculateRectangleArea(){
//  get length of rectangle
const reactWidthArea = document.getElementById('rect-length');
const reactText = reactWidthArea.value;
const width = parseFloat(reactText);
   console.log(width);

  //  get in length
const reactHeightArea = document.getElementById('length-height');
const lengthText = reactHeightArea.value;
const length = parseFloat(lengthText);
   console.log(length);

  // calculate rectangle area
  const area  = width * length; 
  console.log("area of the triangle is:", area);

// display rectangleSpan 
const rectangleSpan = document.getElementById('rectangle-area');
rectangleSpan.innerText = area;
}
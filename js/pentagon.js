function calculatePentagonArea(){
//get of pentagaon base
  const pentagonAreaBase = document.getElementById('pentagaon-base');
  const pentagonText = pentagonAreaBase.value;
  const pentagonBase = parseFloat(pentagonText);
  console.log(pentagonBase);
  
  //get of pentagaon height

  const pentagonHeightArea = document.getElementById('pentagon-height');
  const pentagonLetter = pentagonHeightArea.value;
  const pentagonHeight = parseFloat(pentagonLetter);
  console.log(pentagonHeight);

   //calculate Pentagon area
   const area = 0.5 * pentagonBase * pentagonHeight;
   console.log('area of the pentagon is:', area);

   // //Display PentagonSpan
const pentagonSpan = document.getElementById('pentagon-area');
pentagonSpan.innerText = area;
}
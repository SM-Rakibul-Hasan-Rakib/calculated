// function calculateEllispArea(){
//   const majorRadius = getInputValueById('one');
//   const minorRadius = getInputValueById('two');
//   const area = 3.14 * majorRadius *minorRadius;
//   setInnerTextById('ellisp-area',area);
// }

function calculateElispArea(){
  //get of pentagaon base
    const pentagonAreaBase = document.getElementById('one');
    const pentagonText = pentagonAreaBase.value;
    const pentagonBase = parseFloat(pentagonText);
    console.log(pentagonBase);
    
    //get of pentagaon height
  
    const pentagonHeightArea = document.getElementById('two');
    const pentagonLetter = pentagonHeightArea.value;
    const pentagonHeight = parseFloat(pentagonLetter);
    console.log(pentagonHeight);
  
     //calculate Pentagon area
     const area = 3.14 * pentagonBase * pentagonHeight;
     console.log('area of the pentagon is:', area);
  
     // //Display PentagonSpan
  const pentagonSpan = document.getElementById('ellisp-area');
  pentagonSpan.innerText = area;
  }
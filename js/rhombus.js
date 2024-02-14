function calculateRhombusArea(){
  // get of rhombus d1
  const rhombusArea = document.getElementById('rhombus-one');
  const rhombusText = rhombusArea.value;
  const rhombusBase = parseFloat(rhombusText);
  console.log(rhombusBase);

  // get of rhombus d2
  const rhombusMulti = document.getElementById('rhombus-two');
  const rhombusLetter = rhombusMulti.value;
  const d2 = parseFloat(rhombusLetter);
  console.log(d2);

  //calculate Rhombus area
  const area = 0.5 * rhombusBase * d2;
  console.log('area of the parallelogram is:',area);

  //Display RhombusSpan
  const rhombusSpan = document.getElementById('rhombus-area');
  rhombusSpan.innerText = area;
}
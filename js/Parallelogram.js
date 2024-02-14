function calculateParallelogramArea(){
  // get of Parallelogram base
  const ParallelogramArea = document.getElementById('Parallelogram-base');
  const ParallelogramText = ParallelogramArea.value;
  const ParallelogramBase = parseFloat(ParallelogramText);
  console.log(ParallelogramBase);

  //get of Parallelogram height
  const ParallelogramHeightArea = document.getElementById('Parallelogram-height');
  const ParallelogramHeightText = ParallelogramHeightArea.value;
  const ParallelogramHeight = parseFloat(ParallelogramHeightText);
  console.log(ParallelogramHeight);

  //calculate parallelogram area
  const area = ParallelogramBase * ParallelogramHeight;
  console.log('area of the parallelogram is:', area);

  

// display rectangleSpan 
const parallelogramSpan = document.getElementById('parallelogram-area');
parallelogramSpan.innerText = area;
}
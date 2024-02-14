function calculateParallelogramAreas(){
   const base  = getInputValueId('')
}
function getInputValueId(inputFieldId){
  const inputFieldId = document.getElementById(inputFieldId);
  const inputValueText = inputFieldId.value;
  const inputValue = parseFloat(inputValueText);
  console.log(inputValue);
}
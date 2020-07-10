function input(userInput){
    document.calculator.result_field.value += userInput
}
function calculation(){
    var userInput = document.calculator.result_field.value
    document.calculator.result_field.value = eval(userInput)
}
function clearEntry(){
  var userInput = document.calculator.result_field.value  
  var userInputlength = userInput.length
  document.calculator.result_field.value = userInput.slice(0,userInputlength - 1)
}
function checkResult(){
    var obtainedMarks = document.resultCalculator.obtainedMarks.value
    if(obtainedMarks >= 80 && obtainedMarks <= 100){
       document.resultCalculator.result.value = 'A+' 
    }else if(obtainedMarks >= 70 && obtainedMarks <= 79){
       document.resultCalculator.result.value = 'A' 
    }else if(obtainedMarks >= 60 && obtainedMarks <= 69){
       document.resultCalculator.result.value = 'A-' 
    }else if(obtainedMarks >= 50 && obtainedMarks <= 59){
       document.resultCalculator.result.value = 'B' 
    }else if(obtainedMarks >= 40 && obtainedMarks <= 49){
       document.resultCalculator.result.value = 'C' 
    }else if(obtainedMarks >= 33 && obtainedMarks <= 39){
       document.resultCalculator.result.value = 'D' 
    }else if(obtainedMarks >= 0 && obtainedMarks <= 32){
       document.resultCalculator.result.value = 'F' 
    }else {
      alert('Please input number 0-100')
   }
}

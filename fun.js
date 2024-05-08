var display = document.getElementById('display');
var inputValue = document.querySelectorAll(".calbody button");

for(var i=0; i<inputValue.length;i++ ){
   var btn = inputValue[i];
  btn.addEventListener('click', function (e) {
    
    var text = e.target.value;

   

   if (text === '='){
    var result = eval(display.value);
    display.value=result;

   }
   else if (text === 'C'){
    display.value='';

   }
  
   else{
    display.value =display.value+text;
   }
    
  })
}


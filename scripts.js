function findnumbers () {

var string = document.getElementById("myTextArea").value;
var counter = document.getElementById("length").value;
if(string == ''){
  alert('Please write some text in the textarea !')
}

else{

if(Number){
  document.getElementById('result').innerHTML = 'No Number';
}
const numbers = string.match(/\d+/g).map(Number);
const new_number = new Array();
for (i = 0; i < numbers.length; i++) { 

  if (counter == ''){
      document.getElementById('result').innerHTML = numbers;
  }
  else{
      if (numbers[i].toString().length == counter){
      new_number.push(numbers[i]);
      }

      document.getElementById('result').innerHTML = new_number;

  }
}
}


}

function handleEnter(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
        document.getElementById("click").click();
    }
}


let display = document.getElementById("display");


if(display.value===null){
  display.value="0";
}


function edit(elem) {
  display.value=display.value+elem.value ;
  // body...
}

function AC(){
  display.value=null;
}

function calc(elem){
  display.value=eval(display.value);
}
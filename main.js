let display = document.getElementById("display");


if(display.value==""){
  display.value="0";
}

function edit(elem) {
  let start = display.value.slice(0,1);
  
  if(start=="0"){
    
    display.value=null;
    display.value=display.value+elem.value ;
  }
  else{
    display.value=display.value+elem.value ;
  }
  // body...
}

function ope(elem){
  let last = display.value.slice(-1);
  if(last=="+" || last=="-" ||last=="*"||last=="/"){
    display.value=display.value.slice(0,-1);
    display.value=display.value+elem.value ;
  }else{
    display.value=display.value+elem.value ;
  }
  
}
function AC(){
  display.value=null;
}

function calc(elem){
  display.value=eval(display.value);
}
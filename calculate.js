let expression="";
function put(num){
  expression=expression+num;
const idDisplay=document.getElementById("display");
idDisplay.value=expression;
}
function execute(){
  const exp=document.getElementById("display").value;
  const result=eval(exp);
  expression=expression+"="+result;
const idDisplay=document.getElementById("display");
idDisplay.value=expression;
}
function reset(){
  const idDisplay=document.getElementById("display");
idDisplay.value="";
expression="";
}
function CE(){
  expression=expression.slice(0, -1);
  const idDisplay=document.getElementById("display");
  idDisplay.value=expression;
}
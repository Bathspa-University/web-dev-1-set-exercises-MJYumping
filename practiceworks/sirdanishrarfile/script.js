var num1=document.getElementById('num1'); 
var num2=document.getElementById('num2'); 
var add=document.getElementById('add'); 
var sub=document.getElementById('sub'); 
var mult=document.getElementById('mult'); 
var div=document.getElementById('div'); 
var h1=document.getElementById('result');



add.addEventListener('click',function(){
        h1.innerText= parseInt(num1.value)+parseInt(num2.value);
    
});
sub.addEventListener('click',function(){
    h1.innerText= parseInt(num1.value)-parseInt(num2.value);
});
mult.addEventListener('click',function(){
    h1.innerText= parseInt(num1.value)*parseInt(num2.value);
});
div.addEventListener('click',function(){
    h1.innerText= parseInt(num1.value)/parseInt(num2.value);
});

// Syntac of a function 
// function function_name(){
//     // body
// }
// function addEventListener(){
//     // body
// }
// eventlistener just takes two parameters it has no body. So we can remove its curly braces
// it will look like that:
// function addaddEventListener()
// now it takes two parameters a and b. 
// function addaddEventListener(a, b)
// if a is an event CLICK and if b is a function. our add function will look like:
// function addaddEventListener(a,function(){

// });

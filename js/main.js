//calculator 
let my_input = document.querySelector(".my_input")
let my_div = document.querySelectorAll(".my_div")
let result = document.querySelector(".result")
let my_reset = document.querySelector(".my_reset")
let my_del = document.querySelector(".my_del")
//an array loop for the numbers' buttons
my_div.forEach((arr)=>{
arr.addEventListener("click",(i)=>{
  my_input.value += i.target.dataset.number
  // console.log(i.target.dataset.number);
})
})
//a function for the result button
let my_result_btn = document.querySelector(".my_result_btn")
my_result_btn.addEventListener("click",()=>{
  if(my_input.value.includes("x") == true){
    
    result.innerHTML = eval(my_input.value.replace("x","*"))
    // console.log("yes");
  }else if(my_input.value.includes("÷") == true){
    result.innerHTML = eval(my_input.value.replace("÷","/"))
  }else{
    result.innerHTML = eval(my_input.value)
  }
  
// console.log(my_input.value);
})
//a function for the reset button.
my_reset.addEventListener("click",()=>{
  my_input.value = ``
  result.innerHTML = `0000`
})
//a function for the delete button.
my_del.addEventListener("click",()=>{
  my_input.value = my_input.value.slice(0,-1)
})

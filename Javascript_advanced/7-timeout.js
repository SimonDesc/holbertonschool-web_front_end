console.log("Start of the execution queue");


function callstack() {
  console.log("Final code block to be executed");  
}

setTimeout(callstack, 0);

i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}

console.log("End of the loop printing");

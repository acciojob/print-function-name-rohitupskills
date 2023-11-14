//your JS code here. If required.
// function functionName(){
// 	// alert(arguments.callee.name);
// 	return arguments.callee.name;
// }
// alert(functionName())

function printMyName() {
  console.log(printMyName.name);
}

// Call the function
printMyName();

// Stack is a type of data structure
// Stacks are used in recusssion - where call stack is used for executing the recurssion fucntion

function greet1(nam) {
  console.log(`Hello ${nam}`);

  function greet2() {
    console.log(`Bye ${nam}`);
  }
  greet2();
}

greet1("abhi");

function greet1(nam) {
  console.log(`Hello ${nam}`);

  function greet2() {
    console.log(`Bye ${nam}`);
  }
  greet2();
}

greet1("abhi");

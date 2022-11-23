// Recurssion:
// It has two parts : Base case and Recurssion case
// there should be also a end case whihc will end the recurssion

function countdown(i) {
  if (i <= 0) return;
  else {
    console.log(i);
    countdown(i - 1);
  }
}

countdown(5);

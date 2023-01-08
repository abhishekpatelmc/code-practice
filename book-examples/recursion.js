// Recurssion:
// It has two parts : Base case and Recurssion case
// there should be also a end case whihc will end the recurssion

function countdown(i) {
  console.log(i);
  if (i <= 1) return;
  else {
    countdown(i - 1);
  }
}

countdown(5);

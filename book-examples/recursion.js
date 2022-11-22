function countdown(i) {
  if (i <= 0) return;
  else {
    console.log(i);
    countdown(i - 1);
  }
}

countdown(5);

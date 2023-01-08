function checkVoter(str) {
  const vote = {};
  if (vote[str]) {
    console.log("Kick this person out!!!");
  } else {
    vote[str] = true;
    console.log("Let them Vote");
  }
}

checkVoter("tom");
checkVoter("tom");


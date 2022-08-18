const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names) {
  const appreciation = [];
  for (let i = 0; i < names.length; i++) {
    const thankYou = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    appreciation.push(thankYou);
  }
  return appreciation;
}

//writeCards(surprise);

writeCards(names, "surprise");

const interger = 10;
function countDown(interger) {
  let i = 10;
  while (i >= 0) {
    console.log(i--);
  }
  return interger;
}
countDown(interger);

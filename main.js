const birthdate = document.querySelector("#birthdate");
const luckyNum = document.querySelector("#lucky-num");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");
const reset = document.querySelector("#reset");
const tweet = document.querySelector("#tweet");
const policy = document.querySelector("#policy");
const policyCard = document.querySelector("#policy-card");

btn.addEventListener("click", function () {
  const date = birthdate.value;
  if (date === "") {
    alert("Please, Enter your Birth Date!");
  } else {
    const dateInt = parseInt(date.replaceAll("-", ""));
    const number = luckyNum.value;
    if (number === "") {
      alert("Please, Enter your Lucky Number!");
    } else {
      sumOfDigitsNDivisible(dateInt, number);
    }
  }
});

function sumOfDigitsNDivisible(date, number) {
  let sum = 0;
  while (date > 0) {
    let lastDigit = date % 10;
    sum = sum + lastDigit;
    date = date / 10;
  }
  let sumOfDigits = parseInt(sum);
  if (sumOfDigits % number == 0) {
    output.innerText = "Congratulations, your Birthday is a Lucky day!💯🎉";
  } else {
    output.innerText = "Sorry, your birthday is not a lucky day!😉🤗";
  }
}

reset.addEventListener("click", function () {
  birthdate.value = "";
  output.innerText = "";
  luckyNum.value = "";
});

tweet.addEventListener("click", function () {
  let message = output.textContent;
  if (message === "") {
    output.innerText = `Please Enter a Birth Date!`;
  } else {
    let twitterUrl = `https://twitter.com/intent/tweet?text=${message} - by Adarsh Balika`;
    window.open(twitterUrl, "_blank");
  }
});

policy.addEventListener("click", function () {
  policyCard.className = "show";
  setTimeout(function () {
    policyCard.className = policyCard.className.replace("show", "");
  }, 3000);
});

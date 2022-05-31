// jQuery("h1").click(function () {
//   alert("This is a heading.");
// });

// jQuery("p").click(function () {
//   alert("This is a paragraph.");
// });

// jQuery("img").click(function () {
//   alert("This is an image.");
// });

let answer = prompt("Say something!!");

function capitalizeFirstAndLast(sentence) {
  let test = sentence.charAt(0).toUpperCase();
  let test2 = sentence.charAt(sentence.length - 1).toUpperCase();
  let final = test + test2;
  //console.log(final);
}

function reverseFirstAndLast(sentence) {
  let test = sentence.charAt(0).toUpperCase();
  let test2 = sentence.charAt(sentence.length - 1).toUpperCase();
  let final = test2 + test;
  return final;
}

function thirdFunction(answer) {
  return answer + reverseFirstAndLast(answer);
}

function finalFunction(answer) {
  let firstSentence = answer.length / 2;
  let charlocation = answer.charAt(firstSentence);
  let firstpart = charlocation.concat(answer);
  return firstpart.concat(reverseFirstAndLast(answer));
}

// finalFunction(answer);
function bonus(answer) {
  const myName = finalFunction(answer);
  const splitName = myName.split("");
  const reverseName = splitName.reverse();
  const result = reverseName.join("");
  console.log(result);
}

bonus(answer);

// function thirdFunction(answer) {
//   capitalizeFirstAndLast(answer);
//   reverseFirstAndLast(answer);
// }

"use strict";


/**showNumberTrivia takes a whole number "num" and console logs trivia about
 * this number */
async function showNumberTrivia(num) {
  const response = await fetch(`http://numbersapi.com/${num}?json`);

  const responseJson = await response.json();

  const numTrivia = responseJson.text;

  console.log(numTrivia);
}

/**showNumberRace takes 4 whole numbers "num1" "num2" "num3" "num4", makes
 * requests for trivia associated with each number, and console logs trivia
 * associated with the first response. */
async function showNumberRace(num1, num2, num3, num4) {
  const resp1 = await fetch(`http://numbersapi.com/${num1}?json`);
  const resp2 = await fetch(`http://numbersapi.com/${num2}?json`);
  const resp3 = await fetch(`http://numbersapi.com/${num3}?json`);
  const resp4 = await fetch(`http://numbersapi.com/${num4}?json`);

  const firstResp = await Promise.race([resp1, resp2, resp3, resp4]);

  const firstRespJson = await firstResp.json();

  const firstNumTrivia = firstRespJson.text;

  console.log(firstNumTrivia);
}



"use strict";

const NUMBERS_API_URL = "http://numbersapi.com";


/**showNumberTrivia takes a whole number "num" and console logs trivia about
 * this number */
async function showNumberTrivia(num) {
  const response = await fetch(`${NUMBERS_API_URL}/${num}?json`);

  const responseJson = await response.json();

  const numTrivia = responseJson.text;

  console.log(numTrivia);
}

/**showNumberRace takes 4 whole numbers "num1" "num2" "num3" "num4", makes
 * requests for trivia associated with each number, and console logs trivia
 * associated with the first response. */
async function showNumberRace(num1, num2, num3, num4) {
  const promise1 = fetch(`${NUMBERS_API_URL}/${num1}?json`);
  const promise2 = fetch(`${NUMBERS_API_URL}/${num2}?json`);
  const promise3 = fetch(`${NUMBERS_API_URL}/${num3}?json`);
  const promise4 = fetch(`${NUMBERS_API_URL}/${num4}?json`);

  const firstResp = await Promise.race([promise1, promise2, promise3, promise4]);

  const firstRespJson = await firstResp.json();

  const firstNumTrivia = firstRespJson.text;

  console.log(firstNumTrivia);
}

/**showNumberAll takes an array of inputs (should be numbers but at least one
 * will not be), makes a simultaneous request for trivia about each input, and
 * console logs the array of trivia that had a successful response, then console
 * logs the array of error messages for failed responses */
async function showNumberAll(inputs) {
  const promises = inputs.map(input => fetch(`${NUMBERS_API_URL}/${input}?json`));

  const responses = await Promise.allSettled(promises);

  console.log(responses);

}


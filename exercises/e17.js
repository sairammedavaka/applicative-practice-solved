/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods.
 * In order to do this it is ok to use any type of FOR loops.
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {
  if (array.length > 0) {
    const typeOfCallBack = cb(array[0]);

    if (typeof typeOfCallBack === "number") {
      let personDetails = array[0];
      for (let index in array) {
        if (cb(array[index]) < cb(personDetails)) {
          personDetails = array[index];
        }
      }
      return personDetails;
    } else if (typeof typeOfCallBack === "string") {
      for (let person of array) {
        for (let char of cb(person)) {
          if (char == "a") {
            return person;
          }
        }
      }
    }
  } else {
    return undefined;
  }
}

export function maxBy(array, cb) {
  if (array.length > 0) {
    const typeOfCallBack = cb(array[0]);

    if (typeof typeOfCallBack === "number") {
      let personDetails = array[0];
      for (let index in array) {
        if (cb(array[index]) > cb(personDetails)) {
          personDetails = array[index];
        }
      }
      return personDetails;
    } else if (typeof typeOfCallBack === "string") {
      let name = array[0];
      for (let person of array) {
        if (cb(person).length > cb(name)) {
          name = person;
        }
      }
      return name;
    }
  } else {
    return undefined;
  }
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

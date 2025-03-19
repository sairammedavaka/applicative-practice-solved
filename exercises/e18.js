/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const obj = {};
  data.asteroids.map((item) => {
    obj[item.discoveryYear] = (obj[item.discoveryYear] || 0) + 1;
  });

  let count = 0;
  let year = 0;
  Object.entries(obj).map((item) => {
    if (item[1] > count) {
      count = item[1];
      year = item[0];
    }
  });

  return parseInt(year);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

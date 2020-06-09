/** This module offers search's suggestions to a user */

import queryList from './data/query-list';
import renderAdvices from './render-advices';
import addGreenColor from './add-green-color';

function checkAdvices () {
  // Initialization variables
  const userQuery = document.getElementById('SearchInput').value.toLowerCase();
  let counter = -1;
  const suggestionList = [];
  let error = '';

  // Checking that the query is equal to any item from query list
  console.clear();

  for (let serviceQuery of queryList) {
    serviceQuery = serviceQuery.value;
    const serviceLowercaseQuery = serviceQuery.toLowerCase();

    counter++;

    // Checking user's query length to choose best handling way
    const firstServiceLetters = serviceLowercaseQuery.substring(0, userQuery.length);

    if (userQuery.length === 1) {
      if (firstServiceLetters === userQuery) {
        suggestionList.push(serviceQuery);
      }
    } else if (userQuery.length > 1) {
      if (firstServiceLetters === userQuery) {
        suggestionList.push(serviceQuery);
      }
    }
  }

  // Handling non-existent queries
  const isSuggestionListFull = (suggestionList.length === 0);

  if (isSuggestionListFull && userQuery.length > 0) {
    error = 'Результатов нет. Попробуйте переформулировать.';
  }

  // Rendering suggestions
  renderAdvices(
    suggestionList,
    error,
  );

  // Add green color to first, concurrence letters
  if (isSuggestionListFull) {
    addGreenColor(suggestionList);
  }

  // Returning the result to the console
  console.log(`suggestionList.length: ${suggestionList.length}`);
  console.log(`suggestionList: ${suggestionList}`);
  console.log(`error: ${error}`);
}

export default checkAdvices;

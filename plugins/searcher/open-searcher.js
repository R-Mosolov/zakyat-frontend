function openSearcher () {
  const searchModalWindow = document.getElementById(
    'SearchContainer',
  );

  searchModalWindow
    .classList
    .remove(
      'd-none',
    );
}

export default openSearcher;

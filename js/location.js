const searchForm = document.getElementById('searchForm');
const searchBox = document.getElementById('box');
const searchResult = document.querySelector('.result');
const btn = document.querySelector('.show-more');

let keyword = '';
let page = 1;
// Load API from Unsplash API
const loadData = async () => {
  try {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=wggD8lARSaMiJLDJt68h7bzM4yJDyS25Pypqjvt_e_M&per_page=9`;
    const res = await fetch(url);
    const data = await res.json();
    const searchResults = data.results;
    searchResults.forEach((result) => {
      const image = document.createElement('img');
      image.src = result.urls.small;
      searchResult.appendChild(image);
    });
    btn.style.visibility = 'visible';
  } catch (error) {
    const h3 = document.querySelector('.error');
    h3.innerHTML = `There are something wrongs: ${error}`;
  }
};

// Add submit into form
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  page = 1;
  loadData();
  searchResult.innerHTML = '';
});

// Add click into button to show more images
btn.addEventListener('click', (e) => {
  e.preventDefault();
  page += 1;
  loadData();
});

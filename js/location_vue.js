// --Doing Vue to fetch data from Unsplash---
const app = new Vue({
  el: '#app',
  data: {
    keyword: '',
    page: 1,
    searchResults: [],
    errorMessage: '',
    showMoreButton: false,
  },
  methods: {
    async loadData() {
      try {
        const url = `https://api.unsplash.com/search/photos?page=${this.page}&query=${this.keyword}&client_id=wggD8lARSaMiJLDJt68h7bzM4yJDyS25Pypqjvt_e_M&per_page=9`;
        const res = await fetch(url);
        const data = await res.json();
        this.searchResults = data.results;
        this.showMoreButton = true;
      } catch (error) {
        this.errorMessage = `There are something wrongs: ${error}`;
      }
    },
    submitForm() {
      this.page = 1;
      this.loadData();
    },
    loadMore() {
      this.page += 1;
      this.loadData();
    },
  },
});

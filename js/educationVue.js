const app = new Vue({
  el: '#app',
  data: {
    image: './pic/uni.jpeg',
    youtubeLink: 'https://www.youtube.com/embed/E0TVI6PhX_8',
    program: 'http://www.bu.edu/csmet/',
    courses: [
      { id: 'CS300', name: 'CS300 INTRO SOFT DEV', checked: true },
      { id: 'CS521', name: 'CS521-INFO STR PYTHON', checked: true },
      { id: 'CS625', name: 'CS625-BUS DATA COM NW', checked: true },
      { id: 'CS669', name: 'CS669-DB DES IMP BUS', checked: true },
      { id: 'CS682', name: 'CS682-INFO SYS ANALYS', checked: true },
      { id: 'CS689', name: 'CS689-DES DATA WAREHS', checked: true },
      { id: 'CS601', name: 'CS601-WEB DEV', checked: true },
      { id: 'CS602', name: 'CS602-SERVER-SIDE DEV', checked: false },
    ],
    unvisersity: ['Vietnam National University', 'Boston University']
  },
  method: {

  },
});

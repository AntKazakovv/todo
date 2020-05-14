import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    listNotes: [
      {
        title: 'Test Note 1',
        date: '02.04.20',
        listItems: [
          {
            task: 'daawd awdwadawd awdawdawd awdawdaw awdwad',
            isDone: false
          },
          {
            task: 'fsefgl lkwjd dvnwdj wadkawkk dnvnvee',
            isDone: false
          },
        ]
      },
      {
        title: 'Test Note 2',
        date: '02.04.20',
        listItems: [
          {
            task: 'daawd awdwadawd awdawdawd awdawdaw awdwad',
            isCompleted: false
          },
          {
            task: 'fsefgl lkwjd dvnwdj wadkawkk dnvnvee',
            isCompleted: false
          },
        ]
      },

    ]
  },
  getters: {},
  mutations: {
    createNote: function(){
      //допилить сохраниение заметки
    }
  },
  actions: {},
});
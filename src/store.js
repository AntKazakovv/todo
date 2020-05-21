import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    popup: {
      msg: '',
      show: false
    },
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
    createNote(state, newNote){
      state.listNotes.push(newNote)
    },
    deleteNote(state, delPack){
      let deleteFunc = delPack[1]
      let indexArray = delPack[0]
      deleteFunc(state.listNotes, indexArray)
    },
    showPopup(state, message){
      state.popup.msg = message
      state.popup.show = true
      // setInterval(()=>{state.popup.show = false}, 500)
    },
    hidePopup(state){
      state.popup.msg = ''
      state.popup.show = false
    }
  },
  actions: {},
});
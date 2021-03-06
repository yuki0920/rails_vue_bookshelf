import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    bookInfo: {},
    bookInfoBool: false,
    signedIn: '',
  },
  mutations: {
    fetchSignedIn(state) {
      state.signedIn = !!localStorage.signedIn
    },
    fetchBooks(state) {
      state.books = [];
      axios.get('/api/books').then(
        response => { response.data.books.forEach(book => state.books.push(book)) },
        error => { console.log(error) }
      );
    },
    setBookInfo(state, id){
      axios.get(`api/books/${id}`).then(
        response => {
          state.bookInfo = response.data;
          state.bookInfoBool = true;
        },
        error => { console.log(error) }
      );
    },
    deleteBook(state, id) {
      axios.delete(`api/books/${id}`).then(
        response => {
          state.books = [];
          state.bookInfo = '';
          state.bookInfoBool = false;
        },
        error => console.log(error)
      )
    }
  },
  actions: {
    doFetchSignedIn({ commit }) {
      commit('fetchSignedIn')
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// let cart = window.localStorage.getItem('cart');

const createStore = () => {
  return new Vuex.Store({
    state: {
      courses: [{
          courseID: 1,
          img: 'https://firebasestorage.googleapis.com/v0/b/darklab2037.appspot.com/o/Hoodie_Green.png?alt=media&token=88434e76-11b4-4f12-ae73-a4d1682ddcb8',
          title: "Javascript Essentials",
          link: "codecademy.com",
          description: "This is a course about javascript",
          language: "Javascript",
          rating: 3.5,
          date: "21 Jan 2012"
        },
        {
          courseID: 2,
          img: 'https://firebasestorage.googleapis.com/v0/b/darklab2037.appspot.com/o/Hoodie_Green.png?alt=media&token=88434e76-11b4-4f12-ae73-a4d1682ddcb8',
          title: "Typescript Intermediate",
          link: "codecademy.com",
          description: "This is a course about typescript",
          language: "Typescript",
          rating: 4.8,
          date: "21 Jan 2017"
        },
      ]
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName;
      },
      cartPersistence(state) {
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    }
  })
}

export default createStore

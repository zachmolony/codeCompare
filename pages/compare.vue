<template>
  <div>
    <Navbar />

    <div class="search-container">
      <Search />
    </div>

    <div class="page_content">
      <div class="content">
        <Results v-bind:courses="courses"/>
      </div>
    </div>


  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Card from '~/components/Card.vue'
import Search from '~/components/Search.vue'
import Results from '~/components/Results.vue'
import {fireDb} from '~/plugins/firebase.js'
import Vue from "vue"

export default {
  components: {
    Navbar,
    Card,
    Search,
    Results
  },
  data() {
    return {
      courses: []
    }
  },
  created() {
    console.log("read............")
    fireDb.collection('Courses').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc.data());
        const data = {
          'id': doc.id,
          'date': doc.data().date,
          'description': doc.data().description,
          'img': doc.data().img,
          'language': doc.data().language,
          'link': doc.data().link,
          'proficiency': doc.data().proficiency,
          'rating': doc.data().rating,
          'title': doc.data().title
        }
        this.courses.push(data)
      })
    })
  }
}
</script>

<style scoped>
.logo-text {
  position: absolute;
}

.page_content {
  margin-left: 25vw;
  max-width: 80vw;
  margin-top: 9vh;
}

.search-container {
  position: absolute;
  margin-left: 10vw;
  max-width: 20vw;
  margin-top: 10vh;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>

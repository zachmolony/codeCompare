<template>
  <div>
    <Navbar />

    <div class="search-container">
      <Search />
    </div>

    <div class="page_content">
      <div class="content">
        <Results />
      </div>
    </div>


  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Card from '~/components/Card.vue'
import Search from '~/components/Search.vue'
import Results from '~/components/Results.vue'

export default {
  components: {
    Navbar,
    Card,
    Search,
    Results
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
  margin-top: 15vh;
}

.search-container {
  position: absolute;
  margin-left: 10vw;
  max-width: 20vw;
  margin-top: 18vh;
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

<template>
  <div>
    <div class="container hero is-primary is-bold">
      <div class="hero-content">
        <img class="logo-main" src="../assets/logo.png" alt="">
        <h1 class="title has-text-grey">
          CodeCompare
        </h1>
        <h2 class="subtitle">
          The No.1 Destination for Coding Resources
        </h2>
        <div class="links">
          <nuxt-link to="/compare" class="button--green">
            Compare Resources
          </nuxt-link>
          <nuxt-link to="/compare" class="button--grey">
            Sign-up
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="info">
      <div class="columns">
        <div class="column">
          <div class="three">
            <img src="~/assets/logo.png" alt="" class="image is-64x64">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci quo possimus quasi quibusdam.</p>
          </div>
        </div>
        <div class="column">
          <div class="three">
            <img src="~/assets/logo.png" alt="" class="image is-64x64">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci quo possimus quasi quibusdam.</p>
          </div>
        </div>
        <div class="column">
          <div class="three">
            <img src="~/assets/logo.png" alt="" class="image is-64x64">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad adipisci quo possimus quasi quibusdam.</p>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong class="has-text-success">CodeCompare</strong> by <a href="https://github.com/zachmolony">Team 000D</a>. © 2019
        </p>
      </div>
    </footer>

  </div>
  
</template>

<script>
export default {
  components: {
    
  }
}
</script>

<style>
.three {
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
}

.three img {
  margin: auto auto 4vh;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-content {
  margin-top: -10vh;
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

.links {
  padding-top: 15px;
}

.links * {
  margin-left: 5px;
}

.info {
  margin-left: auto;
  margin-right: auto;
  width: 60vw;
  min-height: 60vh;
}

footer {
  color: white;
  background-color: #526488 !important;
}

a {
  color: white;
  text-decoration-line: underline;
}

.logo-main {
  height: 30vh;
}
</style>

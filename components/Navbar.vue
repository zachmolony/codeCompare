<template>
  <div>
    <nav class="navbar hero is-primary is-bold" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <img class="img" src="../assets/logo.png" height="28">
          <h1 class="title is-size-4">CodeCompare</h1>
        </nuxt-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>


        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <nuxt-link to="/" class="navbar-item">
              Home
            </nuxt-link>

            <nuxt-link to="/" class="navbar-item">
              Compare
            </nuxt-link>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">              
              <img class="signin" src="https://raw.githubusercontent.com/react-native-community/react-native-google-signin/HEAD/img/signin-button.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
    name: 'Navbar',
    components: {
        Logo
    }
}
</script>

<style lang="sass" scoped>
.navbar
    height: 10vh
    background-color: grey !important

.navbar
    padding-top: 1.5vh

.img
    max-width: 100% !important
    padding-right: 20px

h1
    text-decoration: none !important

.signin
  min-height: 2.8em
  transform: translateY(-4px)
</style>
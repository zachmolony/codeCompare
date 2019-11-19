<template>
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img src="../assets/cc-logo.jpeg" class="card-img">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Javascript</p>
            <p class="subtitle is-6"><a href="https://codecademy.com">codecademy.com</a></p>
          </div>
        </div>

        <div class="ccontent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <br>
          <div class="rating">
            <img src="../assets/like.png" alt="">
            <p class="has-text-weight-bold is-size-5 has-text-success ">+30</p>
            <img src="../assets/dislike.png" alt="">
          </div>
          <time class="is-size-7" datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Card'
}
</script>

<style lang="sass" scoped>
.card
    max-width: 15vw
    margin: 1vw

a 
    color: grey

.subtitle
    padding-bottom: 0px !important

.card-img
    padding-top: 2em
    max-width: 20vw

.rating
    padding-top: 20px
    width: 100%
    display: flex
    justify-content: space-between
    align-self: center
    vertical-align: middle

.rating > img
    width: auto
    height: 30px
</style>
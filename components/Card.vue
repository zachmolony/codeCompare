<template>
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img v-bind:src="course.img" class="card-img">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4"> {{ course.language }}</p>
            <p class="subtitle is-6"><a> {{ course.link }}</a></p>
          </div>
        </div>

        <div class="ccontent">
          {{ course.description }} <br>
          <div class="rating">
            <img src="../assets/like.png" alt="">
            <p class="has-text-weight-bold is-size-5 has-text-success "> {{ course.rating }}</p>
            <img src="../assets/dislike.png" alt="">
          </div>
          <time class="is-size-7" datetime="2016-1-1"> {{ course.date }}</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: ["course"]
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
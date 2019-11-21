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
            <p class="title is-5"> {{ course.title }}</p>
            <p class="subtitle is-6"><a :href="course.link"> {{ course.link }}</a></p>
          </div>
        </div>

        <div class="ccontent">
          {{ course.description }} <br>
          <div class="rating">
            <img class="arrow" v-on="{click: doot}" v-bind:class="{like: updooted}" src="../assets/like.png" alt="">
            <p class="has-text-weight-bold is-size-5 has-text-success "> {{ course.rating }}</p>
            <img class="arrow dislike" v-on="{click: downdoot}" v-bind:class="{dislike_colour: downdooted}" src="../assets/like.png" alt="">
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
    props: ["course"],
    data() {
      return {
        updooted: false,
        downdooted: false
      }
    },
    methods: {
      doot() {
        this.updooted = !this.updooted
      },
      downdoot() {
        this.downdooted = !this.downdooted
      }
    }
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
    max-height: 14vw
    width: auto

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

.arrow
  cursor: pointer

.like
  filter: invert(61%) sepia(51%) saturate(671%) hue-rotate(88deg) brightness(98%) contrast(90%)

.dislike_colour
  filter: invert(28%) sepia(92%) saturate(2153%) hue-rotate(331deg) brightness(112%) contrast(101%)

.dislike
  transform: rotate(180deg)
</style>
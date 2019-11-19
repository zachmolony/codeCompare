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
                <figure class="image is-32x32">
                    <img src="../assets/thumbs-up.png" alt="">
                </figure>
                <figure class="image is-32x32">
                    <img src="../assets/thumbs-down.png" alt="">
                </figure>
                <p>+30</p>
            </div>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
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
a 
    color: grey

.subtitle
    padding-bottom: 0px !important

.card-img
    padding-top: 2em

.rating
    width: 100%
    display: flex
    justify-content: space-between
    align-self: center


</style>
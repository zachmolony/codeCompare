<template>
  <div class="box">
    <article class="media">
        <div class="media-content">
            <h1 class="subtitle is-size-3">Filter Results</h1>
            <div class="content">
                <strong>Language</strong><br>
                <label class="checkbox">
                    <input type="checkbox" id="js" value="Javascript" v-model="searchFilter">
                    Javascript
                </label><br>
                <label class="checkbox">
                    <input type="checkbox" id="python" value="Python" v-model="searchFilter">
                    Python
                </label><br>
                <label class="checkbox">
                    <input type="checkbox" id="html/css" value="HTML/CSS" v-model="searchFilter">
                    HTML/CSS
                </label><br>
                <label class="checkbox">
                    <input type="checkbox" id="c++" value="C++" v-model="searchFilter">
                    C++
                </label><br>
                <label class="checkbox">
                    <input type="checkbox" id="java" value="Java" v-model="searchFilter">
                    Java
                </label><br>
            </div>
            <div class="content">
                <strong>Proficiency</strong><br>
                <label class="checkbox">
                    <input type="checkbox">
                    Beginner
                </label><br>
                <label class="checkbox">
                    <input type="checkbox">
                    Intermediate
                </label><br>
                <label class="checkbox">
                    <input type="checkbox">
                    Advanced
                </label><br>
            </div>
            <div class="content">
                <strong>Learning Style</strong><br>
                <label class="checkbox">
                    <input type="checkbox">
                    Kinestetic
                </label><br>
                <label class="checkbox">
                    <input type="checkbox">
                    Visual
                </label><br>
                <label class="checkbox">
                    <input type="checkbox">
                    Auditory
                </label><br>
                <label class="checkbox">
                    <input type="checkbox">
                    Reading/Writing
                </label>
                {{searchFilter}}
            </div>
        </div>
    </article>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
      return {
        searchFilter: []
      }
    },
    watch: {
        searchFilter: function(){
            this.$store.commit('updateSearchFilter', this.searchFilter)
        }
    }
}
</script>

<style lang="sass" scoped>
.subtitle
    margin-bottom: 0px !important
</style>
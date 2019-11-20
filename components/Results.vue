<template>
    <div class="results">
        <div v-bind:key="course.id" v-for="course in filteredItems">
            <Card v-bind:course="course" />
        </div>
    </div>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
    name: 'Results',
    components: {
        Card
    },
    props: ["courses"],
    data() {
        return {
            searchTerms: this.$store.state.searchFilter
        }
    },
    computed: {
        filteredItems() {
            let terms = this.$store.state.searchFilter
            if (terms.length == 0) {
                return this.courses
            }
            let filtered = this.courses.filter(course => 
                terms.includes(course.language)
            );
            return filtered
        }
    }
}
</script>

<style lang="sass" scoped>
.results
  display: flex
  flex-wrap: wrap
</style>
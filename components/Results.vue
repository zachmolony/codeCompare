<template>
    <div class="results">
        <div v-bind:key="course.id" v-for="course in courses">
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
    props: ["courses"]
}
</script>

<style lang="sass" scoped>
.results
  display: flex
  flex-wrap: wrap
</style>
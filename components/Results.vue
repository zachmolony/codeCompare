<template>
    <div class="results">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
    name: 'Results',
    components: {
        Card
    }
}
</script>

<style lang="sass" scoped>
.results
  display: flex
  flex-wrap: wrap
</style>
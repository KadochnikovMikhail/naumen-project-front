<template>
  <section class="cards-grid">
    <component :is="CardComponent"></component>
    <component :is="CardComponent"></component>
    <component :is="CardComponent"></component>
  </section>
</template>

<script>
import CardComponent from "../Card/Card"

export default {
  name: "CardsGridComponent",
  data() {
    return {
      CardComponent: CardComponent,
    }
  },
  components: {
    CardComponent
  },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  }
}
</script>

<style src="./cards-grid.css" scoped>

</style>
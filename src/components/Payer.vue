<template>
    <div class="card">
        <input type="text" placeholder="jméno" v-model="name"/>
        <input type="number" placeholder="zaplatil" v-model="paid" />
    </div>
</template>

<script>
export default {
  name: 'Payer',
  props: ['debt'],
  data () {
    return {
      name: '',
      paid: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

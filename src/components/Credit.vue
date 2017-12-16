<template>
    <div class="card">
        <h2>Created by {{ author }}</h2>
        <a href="/">Back to Application</a>
    </div>
</template>

<script>
export default {
  name: 'Credit',
  data () {
    return {
      author: 'Jiri Honc'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

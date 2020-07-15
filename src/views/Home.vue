<template>
  <div class="home">
    <Addresses/>
  </div>
</template>

<script>
// @ is an alias to /src
import Addresses from '../views/Addresses.vue'

export default {
  name: 'Home',
  components: {
    Addresses
  }
}
</script>

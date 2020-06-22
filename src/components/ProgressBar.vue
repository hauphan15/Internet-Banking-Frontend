<template>
  <div>
    <b-progress :value="value" show-progress animated></b-progress>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: 100,
      }
    }
  }
</script>
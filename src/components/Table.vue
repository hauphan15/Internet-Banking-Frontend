<template>
  <div>
    <b-table hover
      selectable
      :select-mode="selectMode"
      :items="items"
      @row-selected="onRowSelected"
      responsive="sm" sticky-header>
    </b-table>
  </div>
</template>

<script>
  export default {
      props:['items'],
      data() {
        return {
          selectMode: 'single',
        }
      },
      methods:{
        onRowSelected(items){
          this.$store.dispatch('selectedRow', items);
        }
      }
  }
</script>
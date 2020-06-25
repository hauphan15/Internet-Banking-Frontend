<template>
  <div>
    <b-table hover :items="items" :key="items.ID" selectable  @row-selected="onRowSelected">
    </b-table>
  </div>
</template>

<script>
  export default {
      props:['items'],
      data() {
        return {
          selected:{}
        }
      },
      methods:{
        onRowSelected(items){
          this.$store.dispatch('selectedRow', items);
        }
      }
  }
</script>
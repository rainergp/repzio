<template>
  <div class="content-wrapper">
    <img alt="Company logo"
         :src="'http://images.repzio.com/productimages/' + jsonData.ManufacturerID + '/logo' + jsonData.ManufacturerID + '_lg.jpg?height=150'">
    <h1>{{jsonData.CompanyName}}</h1>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import jsonData from '@/db/data.json'

  @Component({
    name: 'HeaderCmp',
  })

  export default class HeaderCmp extends Vue {

    get jsonData(): object {
      return jsonData;
    }
  }
</script>

<style scoped lang="scss">
  .content-wrapper {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
</style>

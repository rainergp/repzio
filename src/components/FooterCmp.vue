<template>
  <div class="content-wrapper">
    <company-info-cmp v-bind:data="jsonData.SalesRep"></company-info-cmp>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import CompanyInfoCmp from '@/components/CompanyInfoCmp.vue'
  import jsonData from '@/db/data.json'

  @Component({
    name: 'HeaderCmp',
    components: {
      CompanyInfoCmp,
    }
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

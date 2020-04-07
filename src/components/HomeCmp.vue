<template>
  <div class="content-wrapper">
    <img alt="Company logo"
         :src="'http://images.repzio.com/productimages/' + jsonData.ManufacturerID + '/logo' + jsonData.ManufacturerID + '_lg.jpg?height=150'">
    <h1>{{jsonData.CompanyName}}</h1>
    <product-list-cmp v-bind:data="jsonData.items"></product-list-cmp>
    <company-info-cmp v-bind:data="jsonData.SalesRep"></company-info-cmp>
  </div>
</template>

<script lang="ts">
  import {Component, Vue, Prop} from 'vue-property-decorator';
  import CompanyInfoCmp from '@/components/CompanyInfoCmp.vue'
  import ProductListCmp from "@/components/ProductListCmp.vue";

  import jsonData from '@/db/data.json'

  import { inject } from 'inversify-props'
  import { Registry } from '@/registry'
  import IProduct from '@/models/IProduct'
  import IDataService from '@/services/IDataService'

  @Component({
    name: 'HomeCmp',
    components: {
      CompanyInfoCmp,
      ProductListCmp,
    }
  })

  export default class HomeCmp extends Vue {

    @Prop(Object) products!: IProduct[];

    @inject(Registry.IDataService)
    private jsonDataService!: IDataService;

    get jsonData(): object {
      return jsonData;
    }

    protected async mounted (): Promise<void> {
      await this.jsonDataService.getProducts().then((result) => {
        console.log('RESULTS: ', result);
        // this.products = result
      })
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

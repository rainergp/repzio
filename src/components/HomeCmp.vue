<template>
  <div class="content-wrapper">
    <product-list-cmp v-bind:products="products"></product-list-cmp>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import ProductListCmp from "@/components/ProductListCmp.vue";
  import { inject } from 'inversify-props'
  import { Registry } from '@/registry'
  import IProduct from '@/models/IProduct'
  import IDataService from '@/services/IDataService'

  @Component({
    name: 'HomeCmp',
    components: {
      ProductListCmp,
    }
  })

  export default class HomeCmp extends Vue {

    @inject(Registry.IDataService)
    private jsonDataService!: IDataService;

    private products: IProduct[] | null = null;

    protected async mounted (): Promise<void> {
      await this.jsonDataService.getProducts().then((result) => {
        console.log('PRODUCTS: ', result);
        this.products = result
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

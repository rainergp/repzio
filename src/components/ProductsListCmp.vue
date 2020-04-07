<template>
  <div v-if="products" class="container">
    <div class="item" v-for="product in products" :key="product.id">
      <product-cmp v-bind:product="product"></product-cmp>
    </div>
  </div>
</template>

<script lang="ts">
  import 'reflect-metadata'
  import {Component, Vue} from 'vue-property-decorator'
  import ProductCmp from '@/components/ProductCmp.vue'
  import ProductDetailsCmp from "@/components/ProductDetailsCmp.vue";
  import IProduct from "@/models/IProduct";
  import {inject} from "inversify-props";
  import {Registry} from "@/registry";
  import IDataService from "@/services/IDataService";

  @Component({
    name: 'ProductsListCmp',
    components: {
      ProductCmp,
      ProductDetailsCmp
    }
  })

  export default class ProductsListCmp extends Vue {
    @inject(Registry.IDataService)
    private jsonDataService!: IDataService;

    private products: IProduct[] | null = null;

    protected async mounted (): Promise<void> {
      await this.jsonDataService.getProducts().then((result) => {
        this.products = result
      })
    }
  }
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    align-items: flex-start;
    max-width: 1320px;
  }

  .item {
    margin: 0 20px;
    order: 0;
    flex: 0 0 auto;
    align-self: auto;
  }
</style>

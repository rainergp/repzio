<template>
  <div v-if="products" class="view-wrapper">
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
  import {namespace} from "vuex-class";

  const jsonData = namespace('jsonDataVuexModule')

  @Component({
    name: 'ProductsListCmp',
    components: {
      ProductCmp,
      ProductDetailsCmp
    }
  })

  export default class ProductsListCmp extends Vue {

    @jsonData.Getter private products: IProduct[] | undefined;

    @jsonData.Action private getProducts!: () => Promise<void>;

    protected async mounted (): Promise<void> {
      await this.getProducts();
      // window.scrollTo(0, 0);
    }
  }
</script>

<style scoped lang="scss">
  .view-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-around;
    align-items: center;
    max-width: 1680px;
    margin: 0 auto;
  }

  .item {
    margin: 0 25px 30px;
    order: 0;
    flex: 0 0 auto;
    align-self: auto;
  }
</style>

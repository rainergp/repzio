<template>
  <div v-if="products" class="view-wrapper">
    <h2>{{count}}</h2>
    <h3>{{doneTodos}}</h3>
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
  import {State, Getter} from "vuex-class";

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

    @State private count!: number;
    @Getter private doneTodos: any;

    protected async mounted (): Promise<void> {
      await this.jsonDataService.getProducts().then((result) => {
        this.products = result
      });
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

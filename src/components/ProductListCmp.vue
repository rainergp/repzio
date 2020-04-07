<template>
  <div class="container">
    <div class="item" v-for="item in products" :key="item.id">
      <product-cmp v-bind:data="item" @click.native="productClick(item)"></product-cmp>
    </div>
    <details-modal-cmp></details-modal-cmp>
  </div>
</template>

<script lang="ts">
  import 'reflect-metadata'
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import ProductCmp from '@/components/ProductCmp.vue'
  import DetailsModalCmp from "@/components/DetailsModalCmp.vue";
  import IProduct from "@/models/IProduct";

  @Component({
    name: 'ProductListCmp',
    components: {
      ProductCmp,
      DetailsModalCmp
    }
  })

  export default class ProductListCmp extends Vue {
    @Prop() private products!: IProduct[];

    private productClick(product: IProduct): void {
      this.$root.$emit('showDetailsPopup', product)
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

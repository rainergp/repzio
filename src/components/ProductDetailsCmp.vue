<template>
  <div v-if="product" class="modal">
    <div>
      <router-link :to="{ name: 'ProductsListView' }">All Products</router-link>
      <p>/ {{product.name}}</p>
    </div>
    <div class="image" v-bind:style="{ 'background-image': 'url(' + product.photo + '?width=500' + ')' }"/>
    <h3 class="name">{{product.name}}</h3>
    <h2 class="price">{{product.price | priceFilter}}</h2>
    <div class="info"><b>Id:</b> {{product.id}}</div>
    <div class="info" v-if="product.description !== '' "><b>Description:</b> {{product.description}}</div>
    <div class="info"><b>Dimensions:</b> {{product.dimensions}}</div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {priceFilter} from '@/filters/priceFilter'
  import {inject} from "inversify-props";
  import {Registry} from "@/registry";
  import IDataService from "@/services/IDataService";
  import IProduct from "@/models/IProduct";

  @Component({
    name: 'ProductDetailsCmp',
    filters: {
      priceFilter
    }
  })

  export default class ProductDetailsCmp extends Vue {
    @inject(Registry.IDataService)
    private jsonDataService!: IDataService;

    private product: IProduct | null = null;

    protected async mounted (): Promise<void> {
      await this.jsonDataService.getProduct(Number(this.$route.params.id)).then((result) => {
        this.product = result
      })
    }

  }
</script>

<style scoped lang="scss">
  .modal {
    .image {
      width: 500px;
      height: 500px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      margin-bottom: 40px;
    }

    .info {
      box-sizing: border-box;
      float: left;
      width: 100%;
      text-align: left;
      padding: 0 30px;
      margin-bottom: 15px;
      font-size: 14px;
    }

    .price {
      clear: both;
    }
  }

  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
</style>

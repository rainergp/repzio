<template>
  <div v-if="product" class="view-wrapper">
    <p class="breadcrumb"><router-link :to="{ name: 'ProductsListView' }">All Products</router-link> / {{product.name}}</p>
    <div class="img-wrapper">
      <img :alt="product.name" :src="product.photo + '?height=340'"/>
    </div>
    <div class="info-wrapper">
      <h3 class="name">{{product.name}}</h3>
      <h2 class="price">{{product.price | priceFilter}}</h2>
      <div class="info">Item Id: {{product.id}}</div>
      <div class="info" v-if="product.description !== '' ">Description: {{product.description}}</div>
      <div class="info">Dimensions: {{product.dimensions}}</div>
    </div>
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
      });

      window.scrollTo(0, 0);
    }

  }
</script>

<style scoped lang="scss">

  .view-wrapper {
    max-width: 1100px;
    margin: 0 auto;

    .breadcrumb {
      color: #585858;
      float: left;
      width: 100%;
      font-size: 17px;

      a {
        &:visited {
          color: #585858;
        }

        &:hover {
          color: #ff7700;
        }
      }

    }

    .img-wrapper {
      float: left;
      text-align: center;
      width: 540px;
      height: 395px;
      background-color: white;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: center;
      align-items: center;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
      margin-bottom: 50px;

      img {
        max-width: 340px;
        max-height: 340px;
        outline: 8px solid #ffffff;
        outline-offset: -8px;

      }
    }

    .info-wrapper {
      float: left;
      width: 560px;
      box-sizing: border-box;
      padding: 0 0 0 40px;

      .name {
        color: #555;
        font-weight: 600;
        margin: 0;
        line-height: 19px;
        font-size: 22px;
      }

      .price {
        font-size: 30px;
        font-weight: 400;
        color: #888;
        margin: 10px 0;
      }

      .info {
        color: #585858;
        box-sizing: border-box;
        float: left;
        width: 100%;
        text-align: left;
        padding: 0;
        margin-bottom: 15px;
        font-size: 17px;
      }

    }

  }

  @media screen and (max-width: 880px) {
    .view-wrapper {
      width: 100%;
      text-align: center;

      .breadcrumb, .img-wrapper, .info-wrapper {
        float: none;
      }

      .img-wrapper {
        margin: 40px auto;
      }

      .info-wrapper {
        text-align: center;
        padding: 0 20px;
        margin: 0 auto;
        width: 100%;

        .info {
          text-align: center;
        }
      }
    }
  }

  @media screen and (max-width: 499px) {
    .view-wrapper .img-wrapper {
      width: calc(100% - 40px);
    }
  }

</style>

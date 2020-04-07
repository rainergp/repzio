<template>
    <router-link class="link" :to="{ name: 'ProductDetailsView', params: { id: product.id } }">
      <div v-if="product" class="product-thumbnail">
        <div class="img-wrapper">
          <img :alt="product.name" :src="product.photo + '?height=245'"/>
        </div>
        <div class="name">{{product.name}}</div>
        <div class="price">{{product.price | priceFilter}}</div>
      </div>
    </router-link>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import {priceFilter} from '@/filters/priceFilter'

  @Component({
    name: 'ProductCmp',
    filters: {
      priceFilter
    }
  })

  export default class ProductCmp extends Vue {
    @Prop() private product!: object;
  }
</script>

<style scoped lang="scss">

  .link {
    text-decoration: none;
  }

  .product-thumbnail {
    width: 350px;
    height: 430px;
    padding: 0;
    text-align: left;
    cursor: pointer;
    user-select: none;

    &:hover {
      .name {
        color: #ff7700;
        transition: color 0.2s ease;
      }
    }

    .img-wrapper {
      text-align: center;
      width: 350px;
      height: 300px;
      background-color: white;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-content: center;
      align-items: center;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);

      img {
        max-width: 245px;
        max-height: 245px;
        outline: 6px solid #ffffff;
        outline-offset: -6px;

      }
    }

    .name {
      font-size: 24px;
      margin: 15px 0 0;
      color: #555;
      padding: 0 10px;
      font-weight: 600;
      transition: color 0.2s ease;

    }

    .price {
      font-size: 26px;
      font-weight: 400;
      color: #888;
      padding-left: 10px;
    }
  }
</style>

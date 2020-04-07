<template>
  <transition name="modal-fade">
    <div v-if="isOpen">
      <div class="overlay" @click.self="isOpen = false">
        <div class="modal">
          <div class="image" v-bind:style="{ 'background-image': 'url(' + product.photo + '?width=500' + ')' }"/>
          <h3 class="name">{{product.name}}</h3>
          <h2 class="price">{{product.price | priceFilter}}</h2>
          <div class="info"><b>Id:</b> {{product.id}}</div>
          <div class="info" v-if="product.description !== '' "><b>Description:</b> {{product.description}}</div>
          <div class="info"><b>Dimensions:</b> {{product.dimensions}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {priceFilter} from '@/filters/priceFilter'
  import IProduct from "@/models/IProduct";

  @Component({
    name: 'ProductDetailsModalCmp',
    filters: {
      priceFilter
    }
  })

  export default class ProductDetailsModalCmp extends Vue {
    private isOpen: boolean | null = false;

    private product: IProduct | null = null;

    protected mounted(): void {
      this.$root.$on('showProductDetails', (product: IProduct) => {
        this.isOpen = true;
        this.product = product;
      })
    }
  }
</script>

<style scoped lang="scss">
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #00000050;
    z-index: 999;
    transition: opacity 0.2s ease;

  }

  .modal {
    overflow-y: scroll;
    box-sizing: border-box;
    width: calc(100% - 50px);
    height: calc(100% - 50px);
    max-width: 500px;
    max-height: 750px;
    min-height: 520px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px 3px rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease-in;

    .image {
      width: 100%;
      height: calc(100% - 350px);
      max-height: 400px;
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

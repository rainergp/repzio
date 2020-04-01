<template>
    <div class="container">
        <div class="item" v-for="item in data" :key="item.ProductID">
            <product-cmp v-bind:data="item" @click.native="productClick(item)"></product-cmp>
        </div>
        <details-modal-cmp></details-modal-cmp>
    </div>
</template>

<script lang="ts">
    import 'reflect-metadata'
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import ProductCmp from '@/components/ProductCmp.vue'
    import DetailsModalCmp from "@/components/DetailsModalCmp.vue";

    @Component({
        name: 'ProductListCmp',
        components: {
            ProductCmp,
            DetailsModalCmp
        }
    })

    export default class ProductListCmp extends Vue {
        @Prop() private data!: object;

        private productClick(data: object): void {
            this.$root.$emit('showDetailsPopup', data )
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
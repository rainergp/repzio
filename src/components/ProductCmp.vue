<template>
    <div class="product-thumbnail">
        <img :alt="data.ItemName" :src="data.PhotoName + '?height=100'" />
        <div class="name">{{data.ItemName}}</div>
        <div class="price">{{data.BasePrice | priceFilter}}</div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { priceFilter } from '@/filters/priceFilter'

    @Component({
        name: 'ProductCmp',
        filters: {
            priceFilter
        }
    })

    export default class ProductCmp extends Vue {
        @Prop() private data!: object;
    }
</script>

<style scoped lang="scss">
    .product-thumbnail {
        background-color: white;
        width: 200px;
        height: 200px;
        padding: 20px 10px;
        text-align: center;
        cursor: pointer;
        user-select: none;

        &:hover {
            background-color: #f3f1f1;
            border-radius: 5px;
        }

        .name {
            font-size: 12px;
            margin: 20px 0;
        }

        .price {
            font-size: 14px;
            font-weight: bold;
        }
    }
</style>
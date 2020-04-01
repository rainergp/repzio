<template>
    <div class="content-wrapper">
        <img alt="Company logo" :src="'http://images.repzio.com/productimages/' + jsonData.ManufacturerID + '/logo' + jsonData.ManufacturerID + '_lg.jpg?height=150'">
        <h1>{{jsonData.CompanyName}}</h1>
        <product-list-cmp v-bind:data="jsonData.items"></product-list-cmp>
        <company-info-cmp v-bind:data="jsonData.SalesRep"></company-info-cmp>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import CompanyInfoCmp from '@/components/CompanyInfoCmp.vue'
    import ProductListCmp from "@/components/ProductListCmp.vue";
    import jsonData from '@/db/data.json'

    @Component({
        name: 'HomeCmp',
        components: {
            CompanyInfoCmp,
            ProductListCmp,
        }
    })

    export default class HomeCmp extends Vue {

        get jsonData(): object {
            return jsonData;
        }
    }
</script>

<style scoped lang="scss">
    .content-wrapper {
        display: flex;
        text-align: center;
        flex-direction: column;
        align-items: center;
    }
</style>
<template>
  <products-list-cmp></products-list-cmp>
</template>

<script>
  // @ is an alias to /src
  import ProductsListCmp from '@/components/ProductsListCmp';

  export default {
    name: 'ProductsListView',
    components: {
      ProductsListCmp
    }
  }
</script>

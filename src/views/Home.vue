<template>
  <div class="home">
    <home-cmp></home-cmp>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HomeCmp from '@/components/HomeCmp';

  export default {
    name: 'Home',
    components: {
      HomeCmp
    }
  }
</script>

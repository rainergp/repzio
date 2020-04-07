<template>
  <fragment>
    <header>

    </header>
    <div id="app">
      <router-view/>
    </div>
    <footer>

    </footer>
  </fragment>
</template>

<style lang="scss">
  @import 'sass/styles';

  #app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>

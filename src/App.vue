<template>
  <fragment>
    <header-cmp v-bind:contact-info="contactInfo" v-bind:manufacturer-settings="manufacturerSettings"></header-cmp>
    <div id="app">
      <router-view/>
    </div>
    <footer-cmp v-bind:contact-info="contactInfo"></footer-cmp>
    <footer>

    </footer>
  </fragment>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import { inject } from 'inversify-props';
  import { Registry } from '@/registry';
  import IContactInfo from "@/models/IContactInfo";
  import IDataService from '@/services/IDataService';
  import HeaderCmp from '@/components/HeaderCmp.vue';
  import IManufacturerSettings from "@/models/IManufacturerSettings";
  import FooterCmp from "@/components/FooterCmp.vue";

  @Component({
    name: 'App',
    components: {
      HeaderCmp,
      FooterCmp,
    }
  })

  export default class App extends Vue {

    @inject(Registry.IDataService)
    private jsonDataService!: IDataService;

    private contactInfo: IContactInfo | null = null;
    private manufacturerSettings: IManufacturerSettings | null = null;

    protected async mounted (): Promise<void> {
      await this.jsonDataService.getContactInfo().then((result) => {
        this.contactInfo = result
      });
      await this.jsonDataService.getManufacturerSettings().then((result) => {
        this.manufacturerSettings = result
      });
    }
  }
</script>

<style lang="scss">
  @import 'sass/styles';

  #app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
</style>

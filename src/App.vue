<template>
  <fragment>
<!--    <header-cmp v-bind:contact-info="contactInfo" v-bind:manufacturer-settings="manufacturerSettings"></header-cmp>-->
<!--    <div id="content">-->
<!--      <router-view/>-->
<!--    </div>-->
    <footer-cmp v-bind:contact-info="contactInfo"></footer-cmp>
  </fragment>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  // import { inject } from 'inversify-props';
  // import { Registry } from '@/registry';
  import IContactInfo from "@/models/IContactInfo";
  // import IDataService from '@/services/IDataService';
  // import IManufacturerSettings from "@/models/IManufacturerSettings";
  import HeaderCmp from '@/components/HeaderCmp.vue';
  import FooterCmp from "@/components/FooterCmp.vue";
  import {Action, Getter} from "vuex-class";

  @Component({
    name: 'App',
    components: {
      HeaderCmp,
      FooterCmp,
    }
  })

  export default class App extends Vue {

    // @inject(Registry.IDataService)
    // private jsonDataService!: IDataService;

    @Getter private contactInfo: IContactInfo | null = null;
    // private manufacturerSettings: IManufacturerSettings | null = null;

    @Action private getContactInfo!: () => Promise<void>;

    protected async mounted (): Promise<void> {
      // await this.jsonDataService.getContactInfo().then((result) => {
      //   this.contactInfo = result
      // });
      await this.getContactInfo();
      // await this.jsonDataService.getManufacturerSettings().then((result) => {
      //   this.manufacturerSettings = result
      // });
    }
  }
</script>

<style lang="scss">
  @import 'sass/styles';

  #content {
    flex: 1;
  }
</style>

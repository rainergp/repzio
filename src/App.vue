<template>
  <fragment>
    <header-cmp v-bind:contact-info="contactInfo" v-bind:manufacturer-settings="manufacturerSettings"></header-cmp>
    <div id="content">
      <router-view/>
    </div>
    <footer-cmp v-bind:contact-info="contactInfo"></footer-cmp>
  </fragment>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import HeaderCmp from '@/components/HeaderCmp.vue';
  import FooterCmp from "@/components/FooterCmp.vue";
  import {namespace} from "vuex-class";
  import IContactInfo from "@/models/IContactInfo";
  import IManufacturerSettings from "@/models/IManufacturerSettings";

  const jsonData = namespace('jsonDataVuexModule')

  @Component({
    name: 'App',
    components: {
      HeaderCmp,
      FooterCmp,
    }
  })

  export default class App extends Vue {

    @jsonData.Getter private contactInfo: IContactInfo | undefined;
    @jsonData.Getter private manufacturerSettings: IManufacturerSettings | undefined;

    @jsonData.Action private getContactInfo!: () => Promise<void>;
    @jsonData.Action private getManufacturerSettings!: () => Promise<void>;

    protected async mounted (): Promise<void> {
      await this.getContactInfo();
      await this.getManufacturerSettings();
    }
  }
</script>

<style lang="scss">
  @import 'sass/styles';

  #content {
    flex: 1;
  }
</style>

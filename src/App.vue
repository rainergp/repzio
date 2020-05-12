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
  const httpStatusMock = namespace('httpStatusMockVuexModule')

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

    @httpStatusMock.Action private getMockResponse!: (code: number) => Promise<void>;

    protected async mounted (): Promise<void> {
      await this.getContactInfo();
      await this.getManufacturerSettings();

      await this.getMockResponse(404); // Not Found
      await this.getMockResponse(403); // Forbidden
      await this.getMockResponse(500); // Internal Server Error
      await this.getMockResponse(503); // Service Unavailable
      await this.getMockResponse(504); // Gateway Timeout
    }
  }
</script>

<style lang="scss">
  @import 'sass/styles';

  #content {
    flex: 1;
  }
</style>

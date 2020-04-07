<template>
  <header>
    <img v-if="manufacturerSettings" alt="Company logo" :src="'http://images.repzio.com/productimages/' + manufacturerSettings.id + '/logo' + manufacturerSettings.id + '_lg.jpg?height=150'">
    <h1 v-if="contactInfo">{{contactInfo.firstName}} {{contactInfo.lastName}} - {{contactInfo.email}}</h1>
  </header>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import IManufacturerSettings from "@/models/IManufacturerSettings";
  import IContactInfo from "@/models/IContactInfo";

  @Component({
    name: 'HeaderCmp',
  })

  export default class HeaderCmp extends Vue {
    @Prop() private manufacturerSettings!: IManufacturerSettings;
    @Prop() private contactInfo!: IContactInfo;
  }
</script>

<style scoped lang="scss">
  header {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
  }

</style>

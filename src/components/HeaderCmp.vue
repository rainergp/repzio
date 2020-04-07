<template>
  <header>
    <div>
      <img v-if="manufacturerSettings" alt="Company logo" :src="'http://images.repzio.com/productimages/' + manufacturerSettings.id + '/logo' + manufacturerSettings.id + '_lg.jpg?height=150'">
      <h3 v-if="contactInfo">{{contactInfo.firstName}} {{contactInfo.lastName}} - {{contactInfo.email}}</h3>
    </div>

    <h1>A Test Demo</h1>
    <p>Check out these great products I have selected for you.</p>
    <p>Email me back which ones you are interested in.</p>
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

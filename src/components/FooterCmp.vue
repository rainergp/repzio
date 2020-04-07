<template>
  <footer>
    <ul v-if="contactInfo">
      <li><b>Company Name:</b> {{contactInfo.companyName}}</li>
      <li><b>Name:</b> {{contactInfo.firstName}} {{contactInfo.lastName}}</li>
      <li><b>Email:</b> {{contactInfo.email}}</li>
      <li><b>Phone:</b> {{contactInfo.phone | phoneFilter}} - <b>Cell:</b> {{contactInfo.cellPhone | phoneFilter}}</li>
      <li><b>Location:</b> {{contactInfo.city}}, {{contactInfo.state}}, {{contactInfo.postalCode}}</li>
    </ul>
  </footer>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import IContactInfo from "@/models/IContactInfo";
  import {phoneFilter} from "@/filters/phoneFilter";

  @Component({
    name: 'FooterCmp',
    filters: {
      phoneFilter
    }
  })

  export default class FooterCmp extends Vue {
    @Prop() private contactInfo!: IContactInfo;
  }
</script>

<style scoped lang="scss">
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  footer {
    width: 100%;
    background-color: #eae9e9;
    /*border-radius: 11px;*/
    padding: 0 15px;
    margin-top: 20px;
    font-size: 14px;
  }
</style>

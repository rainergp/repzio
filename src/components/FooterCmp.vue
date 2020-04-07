<template>
  <footer>
    <div v-if="contactInfo">
      <h1>{{contactInfo.firstName}} {{contactInfo.lastName}}</h1>
      <hr/>
      <a class="contact" v-if="contactInfo" v-bind:href="'mailto:' + contactInfo.email">{{contactInfo.email}}</a>
      <p>Phone: {{contactInfo.phone | phoneFilter}} - <b>Cell:</b> {{contactInfo.cellPhone | phoneFilter}}</p>
      <p>{{contactInfo.city}}, {{contactInfo.state}}, {{contactInfo.postalCode}}</p>
    </div>
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
  footer {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    height: 200px;
    max-height: 200px;
    width: 100%;
    background-color: #262122;
    color: #a4a1a3;
    margin-top: 20px;

    h1 {
      font-weight: 400;
      font-size: 26px;
      margin: 26px 0 12px;
    }

    h2 {
      font-weight: 400;
      font-size: 20px;
      margin: 10px 0;
    }

    a {
      color: #a4a1a3;
      font-weight: 400;
      font-size: 20px;
      margin: 15px 0;
      text-decoration: none;

      &:hover {
        color: #ff7700;
      }
    }

    p {
      font-weight: 400;
      margin: 12px 0 0;
      line-height: 12px;
    }

    hr {
      width: 36px;
      border: 1px solid #888;
      height: 0;
      margin: 0 auto 15px;
      padding: 0;
    }
  }
</style>

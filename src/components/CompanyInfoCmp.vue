<template>
  <div class="content-wrapper">
    <ul>
      <li><b>Company Name:</b> {{data.CompanyName}}</li>
      <li><b>Name:</b> {{data.FirstName}} {{data.LastName}}</li>
      <li><b>Email:</b> {{data.EmailAddress}}</li>
      <li><b>Phone:</b> {{data.Phone | phoneFilter}}</li>
      <li><b>Location:</b> {{data.City}}, {{data.State}}, {{data.PostalCode}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import {phoneFilter} from '@/filters/phoneFilter'

  @Component({
    name: 'CompanyInfoCmp',
    filters: {
      phoneFilter
    }
  })

  export default class CompanyInfoCmp extends Vue {
    @Prop() private data!: object;
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  .content-wrapper {
    width: 100%;
    background-color: #eae9e9;
    /*border-radius: 11px;*/
    padding: 0 15px;
    margin-top: 20px;
    font-size: 14px;
  }
</style>

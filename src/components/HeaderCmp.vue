<template>
  <header>
    <div class="bar-wrapper">
      <div class="bar">
        <img class="logo" v-if="manufacturerSettings" alt="Company logo" :src="'http://images.repzio.com/productimages/' + manufacturerSettings.id + '/logo' + manufacturerSettings.id + '_lg.jpg?height=150'">
        <a class="contact" v-if="contactInfo" v-bind:href="'mailto:' + contactInfo.email">{{contactInfo.firstName}} {{contactInfo.lastName}} - {{contactInfo.email}}</a>
      </div>
    </div>
    <h1>A Test Demo</h1>
    <button v-on:click="btnIncrementClick">Increment</button>
    <button v-on:click="btnDecrementClick">Decrement</button>
    <h2>{{count}}</h2>
    <hr/>
<!--    <p>Check out these great products I have selected for you.</p>-->
<!--    <p>Email me back which ones you are interested in.</p>-->
  </header>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';
  import IManufacturerSettings from "@/models/IManufacturerSettings";
  import IContactInfo from "@/models/IContactInfo";
  import {State, Mutation} from "vuex-class";
  import {MutationType} from "@/store/mutation-types";

  @Component({
    name: 'HeaderCmp',
  })

  export default class HeaderCmp extends Vue {
    @Prop() private manufacturerSettings!: IManufacturerSettings;
    @Prop() private contactInfo!: IContactInfo;

    @State private count!: number;
    @Mutation(MutationType.INCREMENT) private increment: any;
    @Mutation(MutationType.DECREMENT) private decrement: any;

    private btnIncrementClick(event: Event): void {
      this.increment(10);
    }

    private btnDecrementClick(event: Event): void {
      this.decrement(10);
    }
  }
</script>

<style scoped lang="scss">
  header {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    height: 417px;
    max-height: 417px;

    button {
      width: 100px;
      height: 50px;
    }

    .bar-wrapper {
      width: 100%;
      height: 115px;
      background-color: white;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
    }

    .bar {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-content: space-between;
      align-items: flex-start;

      width: 100%;
      height: 100%;
      max-width: 1680px;
      margin: 0 auto;

      .logo {
        order: 0;
        flex: 0 1 auto;
        align-self: auto;
        width: 112px;
        margin: 13px 0 0 33px;
      }

      .contact {
        order: 0;
        flex: 0 1 auto;
        align-self: auto;
        font-size: 24px;
        color: #555;
        line-height: 19px;
        margin: 57px 57px 0 0;
        text-decoration: none;
        font-weight: 600;

        &:hover {
          color: #ff7700;
        }
      }
    }

    h1 {
      font-size: 46px;
      line-height: 41px;
      margin: 39px 0 33px;
      color: #555;
    }

    hr {
      width: 62px;
      border: 1px solid #888;
      height: 0;
      margin: 0;
      padding: 0;
    }

    p {
      color: #888;
      font-weight: 300;;
      line-height: 23px;
      font-size: 30px;
      margin: 36px 0 0;
    }

    @media screen and (min-width: 1165px) {
      h1 {
        font-size: 56px;
      }

      hr {
        width: 82px;
      }

      p {
        line-height: 34px;
        font-size: 43px;
        margin: 21px;
      }
    }

    @media screen and (max-width: 767px) {
      h1 {
        font-size: 30px;
      }

      hr {
        width: 22px;
      }

      p {
        line-height: 27px;
        font-size: 20px;
        margin: 22px 0 0;
        padding: 0 50px;
      }
    }

    @media screen and (max-width: 600px) {
      .bar {
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: center;

        .logo {
          margin: 0;
        }

        .contact {
          font-size: 18px;
          line-height: 19px;
          margin: 0;
        }
      }
    }

  }
</style>

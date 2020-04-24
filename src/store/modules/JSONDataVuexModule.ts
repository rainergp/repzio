import {Module, MutationAction, VuexModule} from 'vuex-module-decorators'
import {inject} from 'inversify-props'
import {Registry} from '@/registry';
import IContactInfo from "@/models/IContactInfo";
import IDataService from '@/services/IDataService';
import store from '@/store';

@Module({
  namespaced: true,
  name: 'jsonDataVuexModule',
  store,
  // dynamic: true,
})
export default class JSONDataVuexModule extends VuexModule {

  @inject(Registry.IDataService)
  private jsonDataService!: IDataService;

  public _contactInfo: IContactInfo | null = null;
  // public manufacturerSettings: IManufacturerSettings | null = null;

  get contactInfo(): IContactInfo {
    return this._contactInfo as IContactInfo || null;
  }

  // @Action
  // public async getContactInfo(): Promise<void> {
  //   await this.jsonDataService.getContactInfo().then((result) => {
  //     this.contactInfo = result
  //   });
  // }

  // @Action
  // public async getManufacturerSettings(): Promise<void> {
  //   await this.jsonDataService.getManufacturerSettings().then((result) => {
  //     this.manufacturerSettings = result
  //   });
  // }
  //
  // @Mutation
  // public setManufacturerSettings(manufacturerSettings: IManufacturerSettings): void {
  //   this.manufacturerSettings = manufacturerSettings;
  // }

  @MutationAction({mutate: ['_contactInfo']})
  public async getContactInfo(): Promise<any> {
    const _contactInfo = await this.jsonDataService.getContactInfo();
    return { _contactInfo };
  }
}

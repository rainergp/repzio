import {Action, Module, Mutation, MutationAction, VuexModule} from 'vuex-module-decorators'
import {inject} from 'inversify-props'
import {Registry} from '@/registry';
import IContactInfo from "@/models/IContactInfo";
import IDataService from '@/services/IDataService';
import IManufacturerSettings from "@/models/IManufacturerSettings";

@Module
export default class JSONDataVuexModule extends VuexModule {

  @inject(Registry.IDataService)
  private jsonDataService!: IDataService;

  private _contactInfo: IContactInfo | null = null;
  public manufacturerSettings: IManufacturerSettings | null = null;

  // @Action
  // public async getContactInfo(): Promise<void> {
  //   await this.jsonDataService.getContactInfo().then((result) => {
  //     this.contactInfo = result
  //   });
  // }

  @Action
  public async getManufacturerSettings(): Promise<void> {
    await this.jsonDataService.getManufacturerSettings().then((result) => {
      this.manufacturerSettings = result
    });
  }

  @Mutation
  public setManufacturerSettings(manufacturerSettings: IManufacturerSettings): void {
    this.manufacturerSettings = manufacturerSettings;
  }

  @MutationAction({mutate: ['contactInfo']})
  public async getContactInfo(): Promise<any> {
    // return await this.jsonDataService.getContactInfo();
    let contactInfo = {} as IContactInfo;

    contactInfo = {
      firstName: 'Max',
      lastName: 'Fraser',
      companyName: 'RepZio',
      email: 'max@repzio.com',
      phone: '561-351-7416',
      cellPhone: '5613517416',
      city: 'Juno Beach',
      state: 'FL',
      postalCode: '33408',
    };

    return contactInfo;
  }

  get contactInfo(): IContactInfo {
    return this._contactInfo as IContactInfo;
  }
}

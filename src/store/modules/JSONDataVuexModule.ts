import {Mutation, Action, Module, MutationAction, VuexModule} from 'vuex-module-decorators'
import {inject} from 'inversify-props'
import {Registry} from '@/registry';
import IContactInfo from "@/models/IContactInfo";
import IDataService from '@/services/IDataService';
import store from '@/store';
import IManufacturerSettings from "@/models/IManufacturerSettings";
import IProduct from "@/models/IProduct";

@Module({
  store: store,
  namespaced: true,
})
export default class JSONDataVuexModule extends VuexModule {

  @inject(Registry.IDataService)
  private jsonDataService!: IDataService;

  private _contactInfo: IContactInfo | null = null;
  private _manufacturerSettings: IManufacturerSettings | null = null;
  private _product: IProduct | null = null;
  private _products: IProduct[] | null = null;

  // GETTERS
  public get contactInfo(): IContactInfo {
    return this._contactInfo as IContactInfo || null;
  }

  public get manufacturerSettings(): IManufacturerSettings {
    return this._manufacturerSettings as IManufacturerSettings || null;
  }

  public get product(): IProduct {
    return this._product as IProduct || null;
  }

  public get products(): IProduct[] {
    return this._products as IProduct[] || null;
  }

  // MUTATIONS
  @Mutation
  public setContactInfo (newContactInfo: IContactInfo): void {
    this._contactInfo = newContactInfo
  }

  @Mutation
  public setManufacturerSettings(manufacturerSettings: IManufacturerSettings): void {
    this._manufacturerSettings = manufacturerSettings;
  }

  @Mutation
  public setProduct(product: IProduct): void {
    this._product = product;
  }

  @Mutation
  public setProducts(products: IProduct[]): void {
    this._products = products;
  }

  // ACTIONS
  @Action({ rawError: true })
  public async getContactInfo (): Promise<void> {
    try {
      const data = await this.jsonDataService.getContactInfo()
      this.context.commit('setContactInfo', data)
    } catch (error) {
      console.error(error)
    }
  }

  @Action({ rawError: true })
  public async getManufacturerSettings(): Promise<void> {
    try {
      const data = await this.jsonDataService.getManufacturerSettings()
      this.context.commit('setManufacturerSettings', data)
    } catch (error) {
      console.error(error)
    }
  }

  @Action({ rawError: true })
  public async getProduct(id: number): Promise<void> {
    try {
      const data = await this.jsonDataService.getProduct(id)
      this.context.commit('setProduct', data)
    } catch (error) {
      console.error(error)
    }
  }

  @Action({ rawError: true })
  public async getProducts(): Promise<void> {
    try {
      const data = await this.jsonDataService.getProducts()
      this.context.commit('setProducts', data)
    } catch (error) {
      console.error(error)
    }
  }

  // @MutationAction({mutate: ['_contactInfo']})
  // public async getContactInfo(): Promise<any> {
  //   const _contactInfo = await this.jsonDataService.getContactInfo();
  //   return { _contactInfo };
  // }
}

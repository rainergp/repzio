import {Action, Module, VuexModule} from 'vuex-module-decorators'
import {inject} from 'inversify-props'
import {Registry} from '@/registry';
import store from '@/store';
import IHttpStatusMockService from "@/services/IHttpStatusMockService";

@Module({
  store: store,
  namespaced: true,
})
export default class HttpStatusMockVuexModule extends VuexModule {

  @inject(Registry.IHttpStatusMockService)
  private httpStatusMockService!: IHttpStatusMockService;

  // ACTIONS
  @Action({ rawError: true })
  public async getMockResponse (code: number): Promise<void> {
    try {
      await this.httpStatusMockService.getMockResponse(code)
    } catch (error) {
      console.error(error)
    }
  }

}

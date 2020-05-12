import { container } from 'inversify-props';
import { Registry } from "@/registry";
import IDataService from "@/services/IDataService";
import JSONDataService from '@/services/impl/JSONDataService'
import IHttpStatusMockService from "@/services/IHttpStatusMockService";
import HttpStatusMockService from "@/services/impl/HttpStatusMockService";

export default function buildDependencyContainer (): void {
  // container.addSingleton<IDataService>(JSONDataService, Registry.IDataService);
  container.bind<IDataService>(Registry.IDataService).to(JSONDataService);
  container.bind<IHttpStatusMockService>(Registry.IHttpStatusMockService).to(HttpStatusMockService);
}

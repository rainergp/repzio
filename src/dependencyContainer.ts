import { container } from 'inversify-props';
import IDataService from "@/services/IDataService";
import JSONDataService from '@/services/impl/JSONDataService'
import { Registry } from "@/registry";

export default function buildDependencyContainer (): void {
  // container.addSingleton<IDataService>(JSONDataService);
  container.bind<IDataService>(Registry.IDataService).to(JSONDataService);
}

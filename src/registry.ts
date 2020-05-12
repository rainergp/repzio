export interface IRegistry {
  [name: string]: symbol;
}

export const Registry: IRegistry = {
  IDataService: Symbol('IDataService'),
  IHttpStatusMockService: Symbol('IHttpStatusMockService'),
};

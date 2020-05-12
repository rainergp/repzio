export default interface IHttpStatusMockService{
  getMockResponse(code: number): Promise<void>;
}

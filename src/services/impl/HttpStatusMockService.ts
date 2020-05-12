import { injectable } from 'inversify-props';
import axios from "axios";
import IHttpStatusMockService from "@/services/IHttpStatusMockService";

@injectable()
export default class HttpStatusMockService implements IHttpStatusMockService {

  public async getMockResponse(code: number): Promise<void> {
    axios.get(`http://httpstat.us/${code}`)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.status + " - " + response.statusText);
        }
      })
      .catch((error) => {
        throw error;
      });
  }
}

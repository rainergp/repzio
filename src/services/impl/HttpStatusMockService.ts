import { injectable } from 'inversify-props';
import axios from "axios";
import IHttpStatusMockService from "@/services/IHttpStatusMockService";
import * as Sentry from '@sentry/browser';

@injectable()
export default class HttpStatusMockService implements IHttpStatusMockService {

  public async getMockResponse(code: number): Promise<void> {
    axios.get(`http://httpstat.us/${code}`)
      .then((response) => {
        if (response.status !== 200) {
          Sentry.captureException(`${response.status}-${response.statusText}`);
        }
      })
      .catch((error) => {
        Sentry.captureException(error);
        throw error;
      });
  }
}

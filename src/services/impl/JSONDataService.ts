import { injectable } from 'inversify-props'
import IProduct from '@/models/IProduct'
import IContactInfo from '@/models/IContactInfo'
import IDataService from "@/services/IDataService";
import jsonData from '@/db/data.json'
import IManufacturerSettings from "@/models/IManufacturerSettings";

@injectable()
export default class DataService implements IDataService {

  public async getProduct(id: number): Promise<IProduct> {
    let product = {} as IProduct;

    try {
      const item: any = jsonData.items.find(p => p.ProductID === id);

      // TODO: Implement object mapper so we can avoid this
      product = {
        id: item.ProductID,
        name: item.ItemName,
        photo: item.PhotoName,
        price: item.BasePrice,
        description: item.Description,
        dimensions: item.Dimensions
      };
    }
    catch (e) {
      return e.message;
    }

    return product;
  }

  public async getProducts(): Promise<IProduct[]> {
    const products = [] as IProduct[];

    try {
      const items = jsonData.items;

      // TODO: Implement object mapper so we can avoid this
      for(let i=0; i<items.length; i++){
        const product: IProduct = {
          id: items[i].ProductID,
          name: items[i].ItemName,
          photo: items[i].PhotoName,
          price: items[i].BasePrice,
          description: items[i].Description,
          dimensions: items[i].Dimensions
        };

        products.push(product);
      }
    }
    catch (e) {
      return e.message;
    }

    return products;
  }

  public async getContactInfo(): Promise<IContactInfo> {
    let contactInfo = {} as IContactInfo;

    try {
      const infoData = jsonData.SalesRep;

      // TODO: Implement object mapper so we can avoid this
      contactInfo = {
        firstName: infoData.FirstName,
        lastName: infoData.LastName,
        companyName: infoData.CompanyName,
        email: infoData.EmailAddress,
        phone: infoData.Phone,
        cellPhone: infoData.CellPhone,
        city: infoData.City,
        state: infoData.State,
        postalCode: infoData.PostalCode,
      };
    }
    catch (e) {
      return e.message;
    }
    return contactInfo;
  }

  public async getManufacturerSettings(): Promise<IManufacturerSettings> {
    let settings = {} as IManufacturerSettings;

    try {
      const settingsData = jsonData.manufacturerSetting;

      // TODO: Implement object mapper so we can avoid this
      settings = {
        id: settingsData.ManufacturerID,
      };
    }
    catch (e) {
      return e.message;
    }
    return settings;
  }
}

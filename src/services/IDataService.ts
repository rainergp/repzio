import IProduct from "@/models/IProduct";
import IContactInfo from "@/models/IContactInfo";
import IManufacturerSettings from "@/models/IManufacturerSettings";

export default interface IDataService{
  getProduct(id: number): Promise<IProduct>;
  getProducts(): Promise<IProduct[]>;
  getContactInfo(): Promise<IContactInfo>;
  getManufacturerSettings(): Promise<IManufacturerSettings>;
}

import IProduct from "@/models/IProduct";
import IContactInfo from "@/models/IContactInfo";

export default interface IDataService{
  getProducts(): Promise<IProduct[]>;
  getContactInfo(): Promise<IContactInfo>;
}

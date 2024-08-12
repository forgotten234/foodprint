export interface IProduct {
  productID?: number;
  productBarcode?: number;
  productTitle?: string;
  productTyp?: string;
  productPreis?: number;
  productImageURL?: string;
  productMarke?: string;
  productMeasure?: number;
  unitPrice?: number;
  nahrungsmittelTyp?: string;
  eigenschaft?: IEigenschaft[];
  regionofOrigin?: string;
  foodPrintScore?: number;
  co2Emissions?: number;
  waterUseml?: number;
  packageTyp?: string;
}

export interface INachhaltigkeitsScore{
  herkunftEU?: number;
  verpackung?: number;
  co2Abdruck?: number;
  h2oAbdruck?: number;
  bioProduct?: number;
  inSeason?: number;
  veganTierwohl?: number;
  fairtrade?: number;
}

export interface IUser {
  userID?: number;
  userName?: string
  userEmail?: string;
  joinDate?: Date;
  password?: string;
  favProducts?: IProduct[];
}

export interface IEigenschaft{
  eigenschaftVegetarisch?: string;
  eigenschaftVegan?: string;
  eigenschaftPlastikfrei?: string;
  eigenschaftGlutenfrei?: string;
  eigenschaftBio?: string;
  eigenschaftLaktosefrei?: string;
}

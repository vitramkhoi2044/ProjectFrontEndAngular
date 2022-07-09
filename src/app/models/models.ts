export interface Product {
  Product_Id: number;
  Product_Name: string;
  Brand: string;
  Type: string;
  Color: string;
  Ram: number;
  Memory: number;
  Price: number;
  Warranty: number;
  Quantity: number;
  Status: string;
}

export class NodeProduct {
  Product_Id?: number;
  Product_Name?: string;
  Brand?: string;
  Type?: string;
  Color?: string;
  Ram?: number;
  Memory?: number;
  Price?: number;
  Warranty?: number;
  Quantity?: number;
  Status?: string;
}
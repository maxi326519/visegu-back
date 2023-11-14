export interface MovementsTS {
  id?: string;
  date: string;
  type: MovementType;
  quantity: number;
  StorageId?: string;
  UserId?: string;
  StockId?: string;
}

export enum MovementType {
  EGRESS = "Egress",
  INGRESS = "Ingress",
}

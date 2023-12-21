export interface MovementsTS {
  id?: string;
  date: Date;
  type: MovementType;
  quantity: number;
  ProductId?: string;
  UserId?: string;
  Stocks: {
    egress: string,
    ingress: string,
  },
  Storage: {
    egress: string,
    ingress: string,
  },
}

export enum MovementType {
  EGRESS = "Egress",
  INGRESS = "Ingress",
  TRANFER = "Transfer",
}

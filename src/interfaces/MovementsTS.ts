
export interface MovementsTS {
  id?: string;
  date: string;
  type: MovementsType;
  quantity: number;
  StorageId?: string;
  UserId?: string;
  StockId?: string;
}

export enum MovementsType {
  entrada = "ENTRADA",
  salida = "SALIDA"
}
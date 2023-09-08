
export interface HistoryTS {
    id?: string;
    date: string;
    type: HistoryType;
    StorageId?: string;
    UserId?: string;
    StockId?: string;
}

export enum HistoryType {
    entrada = "ENTRADA",
    salida = "SALIDA"
}
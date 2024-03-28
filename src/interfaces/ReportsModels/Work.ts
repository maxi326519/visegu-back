export interface WorkReportTS {
  id?: string;
  customer: string;
  location: string;
  timeToStartServices: Date;
  equipment: string;
  dateOfRepair: Date;
  timeFinishService: Date;
  licensePlate: string;
  PO: string;
  VIN: string;
  mechanicName: string;
  check: {
    RIF: boolean;
    ROF: boolean;
    RIR: boolean;
    ROR: boolean;
    LIF: boolean;
    LOF: boolean;
    LIR: boolean;
    LOR: boolean;
  };
  tableData: Array<TableData>;
}

export interface TableData {
  code: string;
  workDescription: string;
  laborTime: number;
  parts: string;
  total: string;
}

export interface WorkReportError {
  customer: string;
  location: string;
  timeToStartServices: string;
  equipment: string;
  dateOfRepair: string;
  timeFinishService: string;
  licensePlate: string;
  PO: string;
  VIN: string;
  mechanicName: string;
  table: string;
}

export const initWorkReportTS = (): WorkReportTS => ({
  customer: "",
  location: "",
  timeToStartServices: new Date(),
  equipment: "",
  dateOfRepair: new Date(),
  timeFinishService: new Date(),
  licensePlate: "",
  PO: "",
  VIN: "",
  mechanicName: "",
  check: {
    RIF: false,
    ROF: false,
    RIR: false,
    ROR: false,
    LIF: false,
    LOF: false,
    LIR: false,
    LOR: false,
  },
  tableData: [],
});

export const initWorkReportError = (): WorkReportError => ({
  customer: "",
  location: "",
  timeToStartServices: "",
  equipment: "",
  dateOfRepair: "",
  timeFinishService: "",
  licensePlate: "",
  PO: "",
  VIN: "",
  mechanicName: "",
  table: "",
});

export const initTableData = () => ({
  code: "",
  workDescription: "",
  laborTime: 0,
  parts: "",
  total: "",
});

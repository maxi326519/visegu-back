export interface WorkReportTS {
  id?: "";
  customer: string;
  location: string;
  timeToStartServices: string;
  equipment: string;
  dateOfRepair: Date;
  timeFinishService: string;
  licensePlate: string;
  PO: string;
  VIN: string;
  mechanicName: string;
  check: {
    RIF: boolean;
    RIFData: string;
    RIFData2: string;
    ROF: boolean;
    ROFData: string;
    ROFData2: string;
    RIR: boolean;
    RIRData: string;
    RIRData2: string;
    ROR: boolean;
    RORData: string;
    RORData2: string;
    LIF: boolean;
    LIFData: string;
    LIFData2: string;
    LOF: boolean;
    LOFData: string;
    LOFData2: string;
    LIR: boolean;
    LIRData: string;
    LIRData2: string;
    LOR: boolean;
    LORData: string;
    LORData2: string;
  };
  tableData: Array<WrokTable>;
}

export interface WrokTable {
  code: string;
  workDescription: string;
  laborTime: number;
  parts: string;
  quantity: string;
  total: string;
}

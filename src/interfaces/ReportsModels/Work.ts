export interface WorkReport {
  id?: "";
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
  tableData: Array<TableData>;
}

export interface TableData {
  code: string;
  workDescription: string;
  laborTime: string;
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

export const initWorkReport = (): WorkReport => ({
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
  laborTime: "",
  parts: "",
  total: "",
});

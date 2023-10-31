import { Inspection } from "./Inspection";
import { WorkReportTS } from "./Work";

export type Report = WorkReportTS | Inspection;

export enum ReportTypes {
  ANY,
  WORK,
  INSPECTION,
}


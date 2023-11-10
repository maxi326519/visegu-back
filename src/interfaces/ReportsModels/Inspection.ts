export interface Inspection {
  id?: string;
  userId?: string;
  yearFMCSA: string;
  FMCSA: string;
  yearBIT: string;
  BIT: string;
  licenseNumber: string;
  state: string;
  location: string;
  quipment: string;
  ownerOrLessor: string;
  InspectionDetail?: InspectionDetail[];
}

export interface InspectionDetail {
  ok: string;
  repair: string;
  labor: string;
  material: string;
  number: number;
}

export interface InspectionError {
  yearFMCSA: string;
  FMCSA: string;
  yearBIT: string;
  BIT: string;
  licenseNumber: string;
  state: string;
  location: string;
  quipment: string;
  ownerOrLessor: string;
}

export const initInspection = (): Inspection => ({
  yearFMCSA: "",
  FMCSA: "",
  yearBIT: "",
  BIT: "",
  licenseNumber: "",
  state: "",
  location: "",
  quipment: "",
  ownerOrLessor: "",
});

export const initInspectionError = (): InspectionError => ({
  yearFMCSA: "",
  FMCSA: "",
  yearBIT: "",
  BIT: "",
  licenseNumber: "",
  state: "",
  location: "",
  quipment: "",
  ownerOrLessor: "",
});

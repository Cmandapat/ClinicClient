export class Appointment {
  apptID: any;
  doctorID: any;
  patientID: any;
  symptoms: any;
  apptDate: any;
  apptTime: any;

  constructor(
    apptID: any,
    doctorID: any,
    patientID: any,
    symptoms: any,
    apptDate: any,
    apptTime: any
  ) {
    this.apptID = apptID;
    this.doctorID = doctorID;
    this.patientID = patientID;
    this.symptoms = symptoms;
    this.apptDate = apptDate;
    this.apptTime = apptTime;
  }
}

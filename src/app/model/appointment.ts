export class Appointment {
    apptID: number;
    doctorID: number;
    patientID: number;
    symptoms: string;
    apptDate: Date;
    apptTime: any; //have to figure out the datatype for time
}
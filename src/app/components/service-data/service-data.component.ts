import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-service-data',
  templateUrl: './service-data.component.html',
  styleUrls: ['./service-data.component.css'],
})
export class ServiceDataComponent {
  constructor(private http: HttpClient) {}

  SendDataToApi(data: any) {
    const url =
      'https://localhost:7159/BusinessEntity/AddEditBusinessEntitySetting';

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(url, data, { headers: headers }).subscribe(
      (response) => {
        console.log('API response: ', response);
      },

      (error) => {
        // Handle any errors that occur during the API call
        console.error('An error occurred:', error);
      }
    );
  }

  convertExcelToBase64(file: File): void {
    const fileReader: FileReader = new FileReader();
    fileReader.onload = (e: any) => {
      const workbook: XLSX.WorkBook = XLSX.read(e.target.result, { type: 'binary' });
      const worksheet: XLSX.WorkSheet = workbook.Sheets[workbook.SheetNames[0]];
      const excelData: any = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      const base64Data: string = btoa(JSON.stringify(excelData));
      console.log(base64Data);
    };
    fileReader.readAsBinaryString(file);
  }
  


}

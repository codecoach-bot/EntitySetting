import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-entity-setting-file-upload',
  templateUrl: './entity-setting-file-upload.component.html',
  styleUrls: ['./entity-setting-file-upload.component.css'],
})
export class EntitySettingFileUploadComponent {
  fileValue: any;
  fileReader = new FileReader();
  ExcelFileUrl: any;
  handleFileChange(event: any) {
    console.log(event);
    this.fileReader.readAsDataURL(event.target.files[0]);
    this.fileReader.onload = () => {
      this.ExcelFileUrl = this.fileReader.result;
    };

    console.log();
  }
  OpenFileManager() {
    console.log('hi');
  }
  filesdata: any;
  convertExcelToBase64(event: any): void {
    const data = new FormData();
    console.log(event);
    const fileReader: FileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onload = () => {
      console.log(fileReader.result);
      this.filesdata = fileReader.result;
    };

    data.append('file', event.target.files);
    console.log(data, 'dataobje');
  }

  constructor(private http: HttpClient) {}
  onAddEditEntity() {
    debugger
    this.http
      .post(
        'https://localhost:7159/BusinessEntity/AddEditBusinessEntitySetting',
        this.filesdata
      )
      .subscribe((result: any) => {});
  }
}

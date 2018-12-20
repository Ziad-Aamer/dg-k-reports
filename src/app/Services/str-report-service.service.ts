import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StrReport} from '../Models/strReport.model';

@Injectable({
  providedIn: 'root'
})
export class StrReportServiceService {

  private url: string;
  constructor(private http: HttpClient) {

   }

   addReport(report: StrReport): void {
    this.url = "/report";
    this.http.post(this.url, report)
        .subscribe(
          (val) => {
            console.log("POST Successfully made ", val);
          },
          (err) => {
            console.log("POST request has errors ", err);
          }
        );
  }
}

import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {StrReportServiceService} from '../Services/str-report-service.service';
@Component({
  selector: 'app-report-layout',
  templateUrl: './report-layout.component.html',
  styleUrls: ['./report-layout.component.css']
})
export class ReportLayoutComponent implements OnInit {

  constructor(private reportService: StrReportServiceService) { }

  ngOnInit() {
  }

  saveReport(reprotForm: NgForm): void {
    // this.reportService.addReport(reprotForm);
  }

}

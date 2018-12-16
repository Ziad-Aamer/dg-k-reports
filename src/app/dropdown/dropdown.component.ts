import { Component, OnInit } from '@angular/core';

export interface Report {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  reports: Report[] = [
    {value: 'str-0', viewValue: 'STR'},
    {value: 'ctr-1', viewValue: 'CTR'},
    {value: 'sar-2', viewValue: 'SAR'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

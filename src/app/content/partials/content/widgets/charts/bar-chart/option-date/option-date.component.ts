import { Component, OnInit } from '@angular/core';
export interface OptionDate {
  value: string;
  labelView: string;
}
@Component({
  selector: 'm-option-date',
  templateUrl: './option-date.component.html',
  styleUrls: ['./option-date.component.scss']
})
export class OptionDateComponent implements OnInit {
  OptionDates: OptionDate[] = [
    {value:'homnay',labelView:'Hôm nay'},
    {value:'homqua',labelView:'Hôm qua'},
    {value:'7ngayqua',labelView:'7 ngày qua'},
    {value:'thangnay',labelView:'Tháng này'},
    {value:'thangtruoc',labelView:'tháng trước'},
  ]
  constructor() { }

  ngOnInit() {
  }
  
}

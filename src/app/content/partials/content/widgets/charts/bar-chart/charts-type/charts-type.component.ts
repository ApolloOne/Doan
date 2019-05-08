import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'm-charts-type',
  templateUrl: './charts-type.component.html',
  styleUrls: ['./charts-type.component.scss']
})
export class ChartsTypeComponent implements OnInit {
  @Output() icon: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }
  icons: string[] = ['insert_chart', 'pie_chart', 'show_chart'];
  changeChart(icon: string) {
    return this.icon.emit(icon);
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'm-bar-chart',
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.scss'],
	inputs: ['typeChart']
})
export class BarChartComponent implements OnInit {
	type_chart: string = '';
	public barChartOptions: any = {
	scaleShowVerticalLines: false,
	responsive: true
};
	public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
	public barChartType: string = 'line';
	public barChartLegend: boolean = true;

	public barChartData: any[] = [
	{ data: [65, 59, 80, 81, 56, 55, 40], label: 'SamSung Galaxy S10' },
	{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Iphone XS' }
];

constructor() { }

ngOnInit() {
}

// events
chartClicked(e: any): void {
}

chartHovered(e: any): void {
}

}

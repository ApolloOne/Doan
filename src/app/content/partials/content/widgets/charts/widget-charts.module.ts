import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';
import { 
	MatCardModule 
} from '@angular/material';
@NgModule({
	imports: [
		CommonModule,
		ChartsModule,
		// Module material 
		MatCardModule
	],
	exports: [
		BarChartComponent,
		DoughnutChartComponent,
	],
	declarations: [
		BarChartComponent,
		DoughnutChartComponent,
	]
})
export class WidgetChartsModule { }

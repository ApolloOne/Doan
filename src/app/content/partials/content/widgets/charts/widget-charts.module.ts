import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';
import { 
	MatCardModule 
} from '@angular/material';
import { OptionDateComponent } from './bar-chart/option-date/option-date.component';
import { ChartsTypeComponent } from './bar-chart/charts-type/charts-type.component';
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
		OptionDateComponent,
		ChartsTypeComponent,
	]
})
export class WidgetChartsModule { }

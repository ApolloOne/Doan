import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerReportComponent } from './CustomerReport.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CustomerReportComponent
            }
        ])
    ],
    declarations: [CustomerReportComponent]
})
export class CustomerReportModule { }
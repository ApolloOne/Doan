import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashFlowComponent } from './CashFlow.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CashFlowComponent
            }
        ])
    ],
    declarations: [CashFlowComponent]
})
export class CashFlowModule { }
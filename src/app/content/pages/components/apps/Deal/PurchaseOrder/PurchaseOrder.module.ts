import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderComponent } from './PurchaseOrder.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: PurchaseOrderComponent
            }
        ])
    ],
    declarations: [PurchaseOrderComponent]
})
export class PurchaseOrderModule { }
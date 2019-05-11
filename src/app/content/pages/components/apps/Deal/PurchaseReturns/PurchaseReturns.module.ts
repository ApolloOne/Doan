import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseReturnsComponent } from './PurchaseReturns.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: PurchaseReturnsComponent
            }
        ])
    ],
    declarations: [PurchaseReturnsComponent]
})
export class PurchaseReturnsModule { }